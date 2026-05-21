/**
 * app/layout.tsx — Root Server Layout
 * ------------------------------------
 * Responsibilities (Server Component — zero client JS overhead):
 *  1. Load Google Fonts as CSS variables via next/font
 *  2. Inject full SEO metadata
 *  3. Set the global background gradient on <body> (visible behind the WebGL canvas)
 *  4. Mount the provider chain in the correct order:
 *       SmoothScroll (Lenis + GSAP bridge)
 *         └── LayoutShell (canvas layer + UI shell)
 *               └── {children} (page content)
 *
 * Provider ordering matters:
 *  SmoothScroll must wrap LayoutShell so that any scroll-triggered animations
 *  inside page components have access to a fully initialised Lenis instance.
 */

import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'

import SmoothScroll  from '@/components/SmoothScroll'
import LayoutShell   from '@/components/LayoutShell'

import './globals.css'

// ─── Google Fonts ─────────────────────────────────────────────────────────────
// Both fonts are loaded as CSS custom property variables so they can be
// consumed both by Tailwind (via --font-sans / --font-display in @theme)
// and by vanilla CSS (var(--font-inter) etc.)

const inter = Inter({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display:  'swap',
})

const outfit = Outfit({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display:  'swap',
})

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default:  'Maverick Digitals — Growing Smarter, Moving Faster',
    template: '%s | Maverick Digitals',
  },
  description:
    'Maverick Digitals is a full-service digital agency specializing in brand strategy, immersive web experiences, and performance marketing that drives measurable, compounding growth.',
  keywords: [
    'digital agency',
    'brand strategy',
    'web design',
    'web development',
    'performance marketing',
    'creative agency',
    'Maverick Digitals',
  ],
  authors:  [{ name: 'Maverick Digitals', url: 'https://maverickdigitals.com' }],
  creator:  'Maverick Digitals',
  openGraph: {
    title:       'Maverick Digitals — Growing Smarter, Moving Faster',
    description: 'A full-service digital agency crafting exceptional brand experiences and performance-driven solutions.',
    type:        'website',
    locale:      'en_US',
    siteName:    'Maverick Digitals',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Maverick Digitals',
    description: 'Growing Smarter, Moving Faster.',
    creator:     '@maverickdigitals',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  themeColor:   '#EBEBEB',
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Font CSS variables available globally: var(--font-inter), var(--font-outfit)
      className={`${inter.variable} ${outfit.variable}`}
      // Suppress hydration warnings from browser extensions injecting attributes
      suppressHydrationWarning
    >
      <body
        className="overflow-x-hidden antialiased"
        style={{
          /**
           * Background gradient sits on <body> — the lowest DOM layer.
           * It shows through the transparent WebGL canvas (z-index: -1)
           * and behind all UI content (z-index: 10).
           * background-attachment: fixed ensures it doesn't scroll with content.
           */
          background:           'linear-gradient(180deg, #EBEBEB 0%, #D4D4D4 100%)',
          backgroundAttachment: 'fixed',
          minHeight:            '100vh',
        }}
      >
        {/*
         * ── Provider Chain ──────────────────────────────────────────────────
         *
         * SmoothScroll     → Lenis instance + GSAP ScrollTrigger bridge
         *   LayoutShell    → canvas-layer (z:-1) + ui-shell (z:10)
         *     {children}   → page content (Nav, Hero, About, Services …)
         */}
        <SmoothScroll>
          <LayoutShell>
            {children}
          </LayoutShell>
        </SmoothScroll>
      </body>
    </html>
  )
}
