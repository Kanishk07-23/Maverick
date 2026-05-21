/**
 * app/page.tsx — Home Page
 * ------------------------
 * The layout shell (canvas layer + UI shell + Lenis) is handled by layout.tsx.
 * This file only contains page-level content that goes inside #ui-shell.
 *
 * Build order:
 *  [✓] Step 1 — Framework setup
 *  [✓] Step 2 — Smooth scroll & layout shell  ← current
 *  [ ] Step 3 — WebGL canvas (Three.js plexus sphere)
 *  [ ] Step 4 — Navigation component
 *  [ ] Step 5 — Hero section + GSAP load animations
 *  [ ] Step 6 — About section
 *  [ ] Step 7 — Services section + card prisms
 */

export default function Home() {
  return (
    <>
      {/*
       * ── Navigation ────────────────────────────────────────────
       * Placeholder — will be replaced by <Navbar /> in Step 4
       */}
      <nav className="nav-glass">
        <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>
          MAVERICK
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {['HOME', 'SERVICES', 'WORK', 'ABOUT', 'CONTACT'].map((item) => (
            <div key={item} style={{ position: 'relative' }}>
              <a
                href="#"
                style={{
                  fontSize:      '0.75rem',
                  fontWeight:    500,
                  letterSpacing: '0.12em',
                  color:         '#1a1a1a',
                  opacity:       item === 'SERVICES' ? 1 : 0.6,
                  textDecoration:'none',
                  transition:    'opacity 200ms ease',
                }}
              >
                {item}
              </a>
              {item === 'SERVICES' && <span className="nav-active-indicator" />}
            </div>
          ))}
        </div>

        <button className="btn-primary">
          Get Started ↗
        </button>
      </nav>

      {/*
       * ── Hero Section ──────────────────────────────────────────
       * Placeholder — will be replaced by <HeroSection /> in Step 5
       * data-gsap-* attributes pre-set for GSAP fade-in animations
       */}
      <section className="hero-section" id="hero">
        {/* Col 1–6 → Primary heading */}
        <div style={{ gridColumn: 'span 6' }} data-gsap-fade-up>
          <h1 className="hero-heading">
            GROWING<br />
            <span className="text-orange-accent">SMARTER,</span><br />
            MOVING<br />
            FASTER.
          </h1>
        </div>

        {/* Col 8–12 → Secondary copy */}
        <div style={{ gridColumn: '8 / span 5' }} data-gsap-fade-up>
          <p className="hero-sub">
            We are a full-service digital agency engineering brand experiences
            that cut through the noise — from strategy to execution, we
            partner with ambitious companies ready to lead their category.
          </p>
        </div>

        {/* CTA Buttons — absolute centered, 20% from bottom */}
        <div
          data-gsap-fade-up
          style={{
            position:  'absolute',
            bottom:    '20%',
            left:      '50%',
            transform: 'translateX(-50%)',
            display:   'flex',
            gap:       '1rem',
          }}
        >
          <button className="btn-primary">Explore Our Work</button>
          <button className="btn-outline">Get In Touch</button>
        </div>
      </section>

      {/*
       * ── Scroll height spacer ──────────────────────────────────
       * Gives Lenis enough scroll distance to test momentum behaviour.
       * Replaced by real sections in Steps 5–7.
       */}
      <div
        aria-hidden="true"
        style={{ height: '300vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <p style={{ color: '#999', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
          SCROLL SPACE — sections coming in Steps 5–7
        </p>
      </div>
    </>
  )
}
