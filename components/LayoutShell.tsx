'use client'

/**
 * LayoutShell.tsx
 * ---------------
 * Owns the dual-layer DOM architecture that the entire site is built upon:
 *
 * ┌────────────────────────────────────────────────────────────────────────┐
 * │  <body>  (bg gradient lives here, background-attachment: fixed)        │
 * │  │                                                                     │
 * │  ├── [Layer 0] #canvas-layer                                           │
 * │  │      position: fixed, inset: 0                                      │
 * │  │      z-index: -1, pointer-events: none                              │
 * │  │      → <WebGLCanvas> (Three.js / R3F) renders here                 │
 * │  │        Dynamically imported with ssr:false (WebGL is browser-only)  │
 * │  │                                                                     │
 * │  └── [Layer 1] #ui-shell                                               │
 * │         position: relative, z-index: 10, width: 100%                  │
 * │         → All DOM UI (Nav, Hero, About, Services …) scrolls here      │
 * └────────────────────────────────────────────────────────────────────────┘
 *
 * Why dynamic import with ssr:false?
 *   @react-three/fiber accesses `window`, `document`, and WebGL APIs at
 *   import time. Next.js SSR runs in Node.js where none of these exist.
 *   ssr:false ensures the Canvas only mounts in the browser, preventing
 *   "window is not defined" build errors.
 *
 * Why a separate client component from layout.tsx?
 *   layout.tsx is a Server Component — keeping all 'use client' code here
 *   isolates the client bundle to only what's needed.
 */

import dynamic from 'next/dynamic'

// Dynamic import — ssr:false is REQUIRED for Three.js / WebGL
const WebGLCanvas = dynamic(
  () => import('@/components/webgl/WebGLCanvas'),
  {
    ssr:     false,
    loading: () => null,   // Canvas-layer stays empty during SSR/hydration
  },
)

interface LayoutShellProps {
  children: React.ReactNode
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      {/*
       * ── Layer 0: WebGL Canvas ──────────────────────────────────────────
       *
       * Fixed behind all DOM content. The Three.js Canvas fills this div.
       * pointer-events: none → all mouse/touch events pass through to Layer 1.
       *
       * The canvas itself is transparent (alpha: true in WebGLCanvas.tsx),
       * so the body gradient is visible through both this div AND the canvas.
       */}
      <div
        id="canvas-layer"
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          right:         0,
          bottom:        0,
          width:         '100vw',
          height:        '100vh',
          zIndex:        -1,
          pointerEvents: 'none',
          overflow:      'hidden',
          display:       'block',  // prevent any flexbox/grid collapsing
        }}
      >
        <WebGLCanvas />
      </div>

      {/*
       * ── Layer 1: Scrollable UI Shell ──────────────────────────────────
       *
       * All page content (Nav, Hero, About, Services, Footer) lives here.
       * position: relative means it participates in document flow and scrolls.
       * z-index: 10 ensures it's always above the canvas layer.
       *
       * Lenis (from SmoothScroll.tsx, parent in the tree) manages the
       * actual scroll momentum on this element's scroll position.
       */}
      <div
        id="ui-shell"
        style={{
          position:  'relative',
          zIndex:    10,
          width:     '100%',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </>
  )
}
