'use client'

// LenisProvider is no longer used — SmoothScroll.tsx uses ReactLenis directly.
// This file is kept as an empty pass-through to avoid breaking any imports
// that may reference it, but it renders nothing special.

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
