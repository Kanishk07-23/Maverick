'use client'

/**
 * SmoothScrollContext
 * -------------------
 * Exposes the live Lenis instance to any descendant via React context.
 * Components that need to programmatically control scroll (e.g., scroll-to-section
 * buttons, carousel syncing) can call `useSmoothScroll()` to get the Lenis ref.
 *
 * Usage:
 *   const lenis = useSmoothScroll()
 *   lenis?.scrollTo('#services', { duration: 1.5, easing: (t) => ... })
 */

import { createContext, useContext, useRef, MutableRefObject } from 'react'
import Lenis from 'lenis'

type LenisContextValue = MutableRefObject<Lenis | null>

export const SmoothScrollContext = createContext<LenisContextValue>({
  current: null,
})

export function useSmoothScroll(): Lenis | null {
  return useContext(SmoothScrollContext).current
}
