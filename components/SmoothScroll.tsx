'use client'

/**
 * SmoothScroll
 * ------------
 * The single source of truth for momentum-based scrolling across the entire app.
 *
 * Responsibilities:
 *  1. Instantiate Lenis with tuned easing/duration values from the spec
 *  2. Drive the Lenis RAF loop via requestAnimationFrame (no GSAP ticker
 *     dependency at this layer — keeping concerns separated)
 *  3. Bridge Lenis ↔ GSAP ScrollTrigger so scroll-bound animations always
 *     read Lenis's virtual scroll position, never the native browser position
 *  4. Expose the Lenis instance via SmoothScrollContext for child components
 *  5. Add/remove the `lenis` CSS class on <html> (consumed by globals.css)
 *  6. Properly clean up on unmount (cancel RAF, destroy Lenis, remove listeners)
 *
 * Placement: Rendered inside <body> in app/layout.tsx, wrapping ALL page content
 * and the WebGL canvas placeholder, so scroll state is truly global.
 */

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SmoothScrollContext } from '@/lib/SmoothScrollContext'

// Register ScrollTrigger safely on the client to avoid Next.js SSR crashes
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef   = useRef<number | null>(null)

  useEffect(() => {
    // ─── 1. Create Lenis instance ────────────────────────────────────────────
    const lenis = new Lenis({
      /**
       * duration: 1.2s — matches the spec's Phase 1 load animation timing.
       * Feels premium without being sluggish.
       */
      duration: 1.2,

      /**
       * Custom expo easing curve — accelerates fast, decelerates smoothly.
       * This is the "power4.out" equivalent in scroll-space.
       * t=0 → instant start, t=1 → perfectly settled.
       */
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      orientation:        'vertical',
      gestureOrientation: 'vertical',
      smoothWheel:        true,
      wheelMultiplier:    1.0,   // 1× native feel — prevents over-acceleration
      touchMultiplier:    2.0,   // Mobile swipe feels heavier/more natural
      infinite:           false,
    })

    lenisRef.current = lenis

    // ─── 2. CSS class for Lenis-specific overrides in globals.css ────────────
    //    html.lenis { height: auto } prevents the page from locking at 100vh
    document.documentElement.classList.add('lenis')

    // ─── 3. Bridge Lenis → GSAP ScrollTrigger ───────────────────────────────
    //
    //    Problem: GSAP ScrollTrigger listens to native `window.scroll` events,
    //    but Lenis intercepts wheel/touch events and manages its own virtual
    //    scroll position. Without a bridge, ScrollTrigger animations would fire
    //    at wrong positions (or not at all).
    //
    //    Solution: `scrollerProxy` teaches ScrollTrigger to read scroll position
    //    from Lenis, and `lenis.on('scroll', ...)` forces a ScrollTrigger.update
    //    on every Lenis tick so pin states, scrub values, and triggers stay in sync.

    lenis.on('scroll', () => ScrollTrigger.update())

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          // Programmatic GSAP scrollTo → pass through to Lenis
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      // Use CSS transforms for pinning if the page uses them, otherwise `fixed`
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
    })

    // When ScrollTrigger recalculates layout (e.g., on resize), tell Lenis too
    ScrollTrigger.addEventListener('refresh', () => lenis.resize())

    // Initial measurement pass — must happen after DOM is ready
    ScrollTrigger.refresh()

    // ─── 4. RAF loop ─────────────────────────────────────────────────────────
    //    Lenis.raf(time) must be called every frame — it advances the virtual
    //    scroll position and emits the 'scroll' event that triggers ST.update().
    //    We use a plain rAF loop (not GSAP.ticker) to avoid double-ticking.
    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    // ─── 5. Cleanup ──────────────────────────────────────────────────────────
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      lenisRef.current = null
      document.documentElement.classList.remove('lenis')
      ScrollTrigger.removeEventListener('refresh', () => lenis.resize())
      ScrollTrigger.clearScrollMemory()
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
