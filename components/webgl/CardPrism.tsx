'use client'

/**
 * CardPrism.tsx
 * -------------
 * A glass 3D primitive to be displayed inside each service card.
 * Three variants map to the three cards on the Services section:
 *
 *  'torus'      → TorusGeometry      (Card 1)
 *  'pyramid'    → ConeGeometry(4)    (Card 2 — 4-sided cone = square pyramid)
 *  'octahedron' → OctahedronGeometry (Card 3)
 *
 * Material — MeshPhysicalMaterial (spec-exact values):
 *  roughness:    0.05   — nearly mirror-polished
 *  transmission: 1.0    — fully transparent / glass-like
 *  thickness:    2.0    — refraction depth (how "thick" the glass feels)
 *  ior:          1.5    — standard glass index of refraction
 *
 * Each prism has a dedicated PointLight (color #FF8C00) offset at [0.5, 0.5, 0]
 * to create the internal orange refraction glow seen in the reference video.
 *
 * Animation (useFrame):
 *  • Y-axis floating: sine wave with per-type phase offset
 *  • Slow X + Y rotation creating a living, tumbling effect
 *
 * The mesh ref is forwarded so GSAP (Step 5) can animate:
 *  • scale: 0 → 1 entrance
 *  • rotation.x initial offset (spec: Math.PI)
 *  • continuous useFrame rotation continues after GSAP completes
 */

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useFrame }                                 from '@react-three/fiber'
import * as THREE                                   from 'three'

// ─── Types ────────────────────────────────────────────────────────────────────
export type PrismType = 'torus' | 'pyramid' | 'octahedron'

export interface CardPrismProps {
  type:      PrismType
  position?: [number, number, number]
  scale?:    number
}

// Phase offsets so the three prisms float out of sync with each other
const PHASE_OFFSET: Record<PrismType, number> = {
  torus:      0,
  pyramid:    Math.PI * 0.66,
  octahedron: Math.PI * 1.33,
}

// ─── Component ────────────────────────────────────────────────────────────────
const CardPrism = forwardRef<THREE.Group, CardPrismProps>(
  ({ type, position = [0, 0, 0], scale = 1 }, ref) => {
    const groupRef = useRef<THREE.Group>(null)
    const meshRef  = useRef<THREE.Mesh>(null)

    // Expose the group to forwarded ref consumers (GSAP in Step 5)
    useImperativeHandle(ref, () => groupRef.current!, [])

    const baseY  = position[1]
    const phase  = PHASE_OFFSET[type]

    // ── Per-frame animation ─────────────────────────────────────────────────
    useFrame(({ clock }) => {
      const t = clock.elapsedTime

      if (meshRef.current) {
        // Floating Y-offset: ±0.10 world units, unique phase per prism
        meshRef.current.position.y = Math.sin(t * 0.8 + phase) * 0.10

        // Slow tumbling rotation
        meshRef.current.rotation.x = t * 0.18 + phase
        meshRef.current.rotation.y = t * 0.25 + phase * 0.5
      }
    })

    return (
      <group ref={groupRef} position={position} scale={scale}>

        {/* Localized orange PointLight — creates internal refraction glow */}
        <pointLight
          color="#FF8C00"
          intensity={4}
          distance={5}
          decay={2}
          position={[0.5, 0.5, 0]}
        />

        {/* Secondary fill light from below for depth */}
        <pointLight
          color="#FFcc44"
          intensity={1.5}
          distance={3}
          decay={2}
          position={[-0.5, -0.5, 0.5]}
        />

        <mesh ref={meshRef}>
          {/* ── Geometry (one of three variants) ─────────────────────────── */}
          {type === 'torus'      && <torusGeometry      args={[0.75, 0.28, 32, 100]} />}
          {type === 'pyramid'    && <coneGeometry        args={[0.85, 1.60,   4, 1]}  />}
          {type === 'octahedron' && <octahedronGeometry  args={[0.90]}                />}

          {/* ── MeshPhysicalMaterial — spec-exact glass ────────────────── */}
          <meshPhysicalMaterial
            roughness={0.05}
            transmission={1.0}
            thickness={2.0}
            ior={1.5}
            reflectivity={0.5}
            envMapIntensity={1.5}
            transparent={true}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>

      </group>
    )
  },
)

CardPrism.displayName = 'CardPrism'

export default CardPrism
