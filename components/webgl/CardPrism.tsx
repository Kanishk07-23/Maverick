'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useFrame }                                 from '@react-three/fiber'
import * as THREE                                   from 'three'

// ── Types ──────────────────────────────────────────────────────────────────────
export type PrismType =
  | 'torus'
  | 'pyramid'
  | 'octahedron'
  | 'sphere'
  | 'cylinder'
  | 'dodecahedron'

export interface CardPrismProps {
  type:      PrismType
  position?: [number, number, number]
  scale?:    number
}

// Phase offsets so all six prisms float out of sync
const PHASE: Record<PrismType, number> = {
  torus:       0,
  pyramid:     Math.PI * 0.33,
  octahedron:  Math.PI * 0.66,
  sphere:      Math.PI * 1.00,
  cylinder:    Math.PI * 1.33,
  dodecahedron: Math.PI * 1.66,
}

// ── Component ──────────────────────────────────────────────────────────────────
const CardPrism = forwardRef<THREE.Group, CardPrismProps>(
  ({ type, position = [0, 0, 0], scale = 1 }, ref) => {
    const groupRef = useRef<THREE.Group>(null)
    const meshRef  = useRef<THREE.Mesh>(null)

    useImperativeHandle(ref, () => groupRef.current!, [])

    const phase = PHASE[type]

    useFrame(({ clock }) => {
      const t = clock.elapsedTime
      if (meshRef.current) {
        meshRef.current.position.y = Math.sin(t * 0.8 + phase) * 0.10
        meshRef.current.rotation.x = t * 0.18 + phase
        meshRef.current.rotation.y = t * 0.25 + phase * 0.5
      }
    })

    return (
      <group ref={groupRef} position={position} scale={scale}>

        <pointLight color="#FF8C00" intensity={4}   distance={5} decay={2} position={[ 0.5,  0.5, 0  ]} />
        <pointLight color="#FFcc44" intensity={1.5} distance={3} decay={2} position={[-0.5, -0.5, 0.5]} />

        <mesh ref={meshRef}>
          {/* ── 6 geometry variants ─────────────────────────────────────── */}
          {type === 'torus'        && <torusGeometry        args={[0.75, 0.28, 32, 100]} />}
          {type === 'pyramid'      && <coneGeometry          args={[0.85, 1.60,  4,   1]} />}
          {type === 'octahedron'   && <octahedronGeometry    args={[0.90]}                />}
          {type === 'sphere'       && <sphereGeometry        args={[0.80, 32,   32]}      />}
          {type === 'cylinder'     && <cylinderGeometry      args={[0.55, 0.55, 1.50, 32]}/>}
          {type === 'dodecahedron' && <dodecahedronGeometry  args={[0.85]}                />}

          {/* ── Glass material ──────────────────────────────────────────── */}
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
