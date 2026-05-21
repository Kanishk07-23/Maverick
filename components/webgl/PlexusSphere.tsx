"use client";

import { useRef, useMemo } from 'react';
import { useFrame }        from '@react-three/fiber';
import * as THREE          from 'three';

// ── Shader strings at module level — never recreated on re-render ─────────────

const VERTEX_SHADER = `
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 15.0 * (1.0 / -mvPosition.z);
    gl_Position  = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = `
  void main() {
    float d        = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / d - 0.1;
    gl_FragColor   = vec4(1.0, 0.6, 0.0, strength);
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export default function PlexusSphere() {
  const groupRef = useRef<THREE.Group>(null);

  // ── Geometry — built once on mount, safe on main thread ──────────────────
  // 400 pts × 400 = 80k checks; each is just 3 multiplies + a sqrt comparison.
  // Completes in < 5ms — not the cause of previous freezes (those were inline
  // shader string literals being recreated every frame by React).
  const { pointGeo, edgeGeo } = useMemo(() => {
    // 1. Generate 400 uniformly-random points on sphere surface (radius 2)
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 400; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      pts.push(new THREE.Vector3(
        2 * Math.sin(phi) * Math.cos(theta),
        2 * Math.sin(phi) * Math.sin(theta),
        2 * Math.cos(phi),
      ));
    }

    // 2. Point geometry
    const ptArr = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => { ptArr[i*3]=p.x; ptArr[i*3+1]=p.y; ptArr[i*3+2]=p.z; });
    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.BufferAttribute(ptArr, 3));

    // 3. Edge geometry — connect any pair closer than 0.6 world units
    const edgeArr: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.6) {
          edgeArr.push(pts[i].x, pts[i].y, pts[i].z);
          edgeArr.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edgeArr), 3));

    return { pointGeo, edgeGeo };
  }, []); // empty deps — calculate once on mount

  // ── useFrame — only rotation mutations, zero allocations ─────────────────
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>

      {/* Glowing nodes — shader references module-level constants */}
      <points geometry={pointGeo}>
        <shaderMaterial
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Organic web edges */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial
          color="#1A1A1A"
          transparent={true}
          opacity={0.2}
          depthWrite={false}
        />
      </lineSegments>

      {/* Core glow */}
      <pointLight color="#FF8C00" intensity={2} distance={10} />

    </group>
  );
}
