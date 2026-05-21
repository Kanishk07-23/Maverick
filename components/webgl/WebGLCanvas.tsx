'use client'

import { useMemo, Suspense }             from 'react'
import { Canvas }                        from '@react-three/fiber'

import SceneContext, { createSceneRefs } from '@/lib/SceneContext'
import Scene                             from './Scene'

export default function WebGLCanvas() {
  const sceneRefs = useMemo(() => createSceneRefs(), [])

  return (
    <SceneContext.Provider value={sceneRefs}>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </SceneContext.Provider>
  )
}
