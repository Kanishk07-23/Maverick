"use client";
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function PlexusSphere() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate a dense, perfect sphere of particles
  const particlesCount = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5; // Radius
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [particlesCount]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      // Subtle breathing effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particlesCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <shaderMaterial
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          fragmentShader={`
            void main() {
              // Create a soft circle instead of a square pixel
              vec2 xy = gl_PointCoord.xy - vec2(0.5);
              float ll = length(xy);
              if(ll > 0.5) discard;
              // Golden accent color matching reference
              gl_FragColor = vec4(1.0, 0.7, 0.1, (0.5 - ll) * 2.0 * 0.8);
            }
          `}
          vertexShader={`
            void main() {
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              // Size attenuation
              gl_PointSize = 15.0 * (1.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `}
        />
      </points>
    </group>
  );
}
