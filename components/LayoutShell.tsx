'use client'
import dynamic from 'next/dynamic'

const WebGLCanvas = dynamic(
  () => import('@/components/webgl/WebGLCanvas'),
  { ssr: false, loading: () => null }
)

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        id="canvas-layer"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          width: '100vw', height: '100vh',
          zIndex: 0, // FIXED: Moved from -1 to 0
          pointerEvents: 'none',
        }}
      >
        <WebGLCanvas />
      </div>

      <div id="ui-shell" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {children}
      </div>
    </>
  )
}