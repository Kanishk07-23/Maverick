"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function PlexusSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. The Nodes (Points) */}
      <points>
        {/* Lowered detail from 4 to 3 to ensure absolute performance safety */}
        <icosahedronGeometry args={[2, 3]} />
        <shaderMaterial
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          fragmentShader={`
            void main() {
              float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
              float strength = 0.05 / distanceToCenter - 0.1;
              gl_FragColor = vec4(1.0, 0.6, 0.0, strength);
            }
          `}
          vertexShader={`
            void main() {
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = 15.0 * (1.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `}
        />
      </points>

      {/* 2. The Edges (Native GPU Wireframe) */}
      <mesh>
        <icosahedronGeometry args={[2, 3]} />
        <meshBasicMaterial
          color="#1A1A1A"
          wireframe={true}
          transparent={true}
          opacity={0.15}
        />
      </mesh>

      {/* 3. Center Glow Light */}
      <pointLight color="#FF8C00" intensity={2} distance={10} />
    </group>
  );
}
