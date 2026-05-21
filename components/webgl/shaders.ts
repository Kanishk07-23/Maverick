/**
 * shaders.ts — HDR output edition
 * ---------------------------------
 * Key insight: Three.js ShaderMaterial has toneMapped = false by default,
 * meaning ACESFilmic tone mapping is NOT applied to our gl_FragColor output.
 * The raw values we write go straight into the EffectComposer's framebuffer.
 *
 * With frameBufferType = THREE.HalfFloatType (set in EffectComposer), the
 * framebuffer stores float16 values, so we CAN write values > 1.0 (HDR).
 *
 * Strategy:
 *  - Multiply the output color by 3.0 → the bright white core emits ~3.0
 *    luminance, FAR above any reasonable luminanceThreshold
 *  - The Bloom luminance check runs on these raw HDR values
 *  - Tone mapping is applied by the EffectComposer in the final pass
 *  - Result: guaranteed bloom on node cores, zero bloom on dark edges/BG
 *
 * Point size stays small (1.8 base) — Bloom creates the halo, not the radius.
 */

export const PLEXUS_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Subtle trig-based pulsing per node
    float noise =
      sin(position.x * 4.7 + uTime * 1.1) *
      cos(position.y * 3.9 + uTime * 0.7) *
      sin(position.z * 5.1 + uTime * 1.3);

    float size = 1.8 + noise * 0.5;

    // Perspective-correct attenuation — closer = bigger
    gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
  }
`

export const PLEXUS_FRAG = /* glsl */ `
  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));

    // Crisp disc — narrow smoothstep = hard edge, not soft blob
    float alpha = smoothstep(0.5, 0.45, dist);
    if (alpha < 0.01) discard;

    // HDR color — multiplied by 3.0 so the framebuffer stores values ~3.0
    // This guarantees these pixels exceed the Bloom luminanceThreshold (0.2)
    // even after any internal framebuffer conversions.
    vec3 col = mix(
      vec3(1.0, 0.95, 0.80),   // warm white core
      vec3(1.0, 0.50, 0.05),   // orange rim
      smoothstep(0.0, 0.40, dist)
    );

    // HDR multiply: nodes output 3× LDR brightness into the float16 buffer
    gl_FragColor = vec4(col * 3.0, alpha);
  }
`
