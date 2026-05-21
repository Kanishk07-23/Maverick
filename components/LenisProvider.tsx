'use client'

/**
 * LenisProvider
 * -------------
 * Initialises Lenis smooth scrolling and synchronises it with GSAP's ScrollTrigger
 * via the `requestAnimationFrame` raf loop. Every child of this component benefits
 * from momentum-based, buttery smooth scrolling that GSAP ScrollTrigger can read.
 *
 * Architecture:
 *  - Lenis instance is stored in a React ref (survives re-renders, no stale closures)
 *  - GSAP ScrollTrigger.scrollerProxy + ScrollTrigger.addEventListener keep both
 *    libraries in sync on every frame
 *  - The raf loop is properly cleaned up on unmount
 */

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LenisProviderProps {
  children: React.ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // ── 1. Instantiate Lenis ────────────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    })

    lenisRef.current = lenis

    // ── 2. Add lenis class to html for CSS overrides ────────────────────────
    document.documentElement.classList.add('lenis')

    // ── 3. Sync Lenis → GSAP ScrollTrigger ─────────────────────────────────
    //    ScrollTrigger needs to know about Lenis scroll position because it
    //    bypasses the native window scroll events.
    lenis.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
    })

    ScrollTrigger.addEventListener('refresh', () => lenis.resize())
    ScrollTrigger.refresh()

    // ── 4. RAF loop — drives Lenis on every frame ───────────────────────────
    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    // ── 5. Cleanup ──────────────────────────────────────────────────────────
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      lenis.destroy()
      lenisRef.current = null
      document.documentElement.classList.remove('lenis')
      ScrollTrigger.clearScrollMemory()
    }
  }, [])

  return <>{children}</>
}
