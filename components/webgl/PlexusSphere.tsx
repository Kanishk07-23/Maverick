"use client";

import { useRef, useMemo } from 'react';
import { useFrame }        from '@react-three/fiber';
import * as THREE          from 'three';

export default function PlexusSphere() {
  const groupRef = useRef<THREE.Group>(null);

  // ── Build plexus geometry once on mount ──────────────────────────────────
  const { pointPositions, linePositions } = useMemo(() => {
    const POINT_COUNT = 350;
    const RADIUS      = 2.5;
    const MAX_DIST    = 0.8;

    // 1. Generate 350 points uniformly on sphere surface
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      pts.push(new THREE.Vector3(
        RADIUS * Math.sin(phi) * Math.cos(theta),
        RADIUS * Math.sin(phi) * Math.sin(theta),
        RADIUS * Math.cos(phi),
      ));
    }

    // 2. Point positions buffer
    const pointPositions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      pointPositions[i * 3]     = p.x;
      pointPositions[i * 3 + 1] = p.y;
      pointPositions[i * 3 + 2] = p.z;
    });

    // 3. Edge positions — O(n²) distance check, runs once (~61k iters ≈ 2ms)
    const edgeVerts: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < MAX_DIST) {
          edgeVerts.push(pts[i].x, pts[i].y, pts[i].z);
          edgeVerts.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const linePositions = new Float32Array(edgeVerts);

    return { pointPositions, linePositions };
  }, []); // empty deps — calculated once on mount

  // ── useFrame — rotation only, zero allocations ────────────────────────────
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>

      {/* Glowing nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
            array={pointPositions}
            count={pointPositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#FF8C00"
          size={0.05}
          sizeAttenuation={true}
          transparent={false}
        />
      </points>

      {/* Interconnecting lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#FF8C00"
          transparent={true}
          opacity={0.3}
        />
      </lineSegments>

    </group>
  );
}