/**
 * SceneContext.ts
 * ---------------
 * A minimal React context that stores refs to the key 3D objects in the scene.
 * This allows components OUTSIDE the Canvas (e.g., GSAP scroll handlers in
 * Step 5) to read and mutate Three.js object properties without needing to
 * tunnel props through the component tree.
 *
 * Pattern: "context as a ref store" — the context value itself never changes
 * (it's always the same ref objects), so consumers never re-render due to this
 * context. Only the .current values change at runtime.
 *
 * Consumers:
 *  import { useSceneContext } from '@/lib/SceneContext'
 *  const { sphereGroup, prismGroups } = useSceneContext()
 *  // In GSAP: gsap.to(sphereGroup.current.scale, { x: 0, y: 0, z: 0 })
 */

import { createContext, useContext, useRef, MutableRefObject } from 'react'
import type * as THREE from 'three'

export interface SceneRefs {
  // The PlexusSphere outer group — GSAP controls scale, position, rotation
  sphereGroup:  MutableRefObject<THREE.Group | null>
  // The three CardPrism groups — GSAP controls entrance scale + rotation
  prismGroups:  MutableRefObject<(THREE.Group | null)[]>
}

// ─── Context ──────────────────────────────────────────────────────────────────
const SceneContext = createContext<SceneRefs | null>(null)

export default SceneContext

// ─── Consumer Hook ────────────────────────────────────────────────────────────
export function useSceneContext(): SceneRefs {
  const ctx = useContext(SceneContext)
  if (!ctx) throw new Error('useSceneContext must be used inside <SceneContextProvider>')
  return ctx
}

// ─── Provider Factory ─────────────────────────────────────────────────────────
// Creates a stable ref object that can be passed as the context value.
// Call this ONCE (e.g., in WebGLCanvas) and pass the result to the provider.
export function createSceneRefs(): SceneRefs {
  return {
    sphereGroup: { current: null },
    prismGroups: { current: [null, null, null] },
  }
}
