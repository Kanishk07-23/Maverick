"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ── Module-level shader constants — never recreated on re-render ──────────────

// Shared vertex shader: GPU-based organic breathing displacement via uTime
const POINT_VERT = `
  uniform float uTime;
  void main() {
    float displacement = sin(position.x * 2.0 + uTime) * cos(position.y * 2.0 + uTime) * 0.2;
    vec3 newPosition = position + normal * displacement;
    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    gl_PointSize = 12.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Fragment: deep orange/gold radial glow for nodes
const POINT_FRAG = `
  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / d - 0.1;
    gl_FragColor = vec4(1.0, 0.4, 0.0, strength);
  }
`;

// Wire vertex: same displacement so wireframe breathes in sync with points
const WIRE_VERT = `
  uniform float uTime;
  void main() {
    float displacement = sin(position.x * 2.0 + uTime) * cos(position.y * 2.0 + uTime) * 0.2;
    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

// Fragment: dark, near-invisible wireframe
const WIRE_FRAG = `
  void main() {
    gl_FragColor = vec4(0.1, 0.1, 0.1, 0.12);
  }
`;

export default function PlexusSphere() {
  const groupRef    = useRef<THREE.Group>(null);
  const pointMatRef = useRef<THREE.ShaderMaterial>(null);
  const wireMatRef  = useRef<THREE.ShaderMaterial>(null);

  // Update uTime on GPU every frame — zero allocations, zero state
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pointMatRef.current) pointMatRef.current.uniforms.uTime.value = t;
    if (wireMatRef.current)  wireMatRef.current.uniforms.uTime.value  = t;
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>

      {/* Glowing breathing nodes */}
      <points>
        <icosahedronGeometry args={[2, 3]} />
        <shaderMaterial
          ref={pointMatRef}
          vertexShader={POINT_VERT}
          fragmentShader={POINT_FRAG}
          uniforms={{ uTime: { value: 0 } }}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Wireframe mesh — same displacement as points */}
      <mesh>
        <icosahedronGeometry args={[2, 3]} />
        <shaderMaterial
          ref={wireMatRef}
          vertexShader={WIRE_VERT}
          fragmentShader={WIRE_FRAG}
          uniforms={{ uTime: { value: 0 } }}
          wireframe={true}
          transparent={true}
          depthWrite={false}
        />
      </mesh>

      {/* Concentric orbit rings — static, dark, low opacity */}
      <mesh rotation={[Math.PI * 0.15, 0, 0]}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#1a1a1a" opacity={0.10} transparent={true} />
      </mesh>

      <mesh rotation={[Math.PI * 0.35, Math.PI * 0.1, 0]}>
        <torusGeometry args={[3.0, 0.005, 16, 100]} />
        <meshBasicMaterial color="#1a1a1a" opacity={0.07} transparent={true} />
      </mesh>

      <mesh rotation={[Math.PI * 0.55, Math.PI * 0.2, 0]}>
        <torusGeometry args={[3.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#1a1a1a" opacity={0.04} transparent={true} />
      </mesh>

    </group>
  );
}
