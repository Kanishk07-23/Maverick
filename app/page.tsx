'use client'

// ── Service card data ────────────────────────────────────────────────────────
const SERVICES = [
  {
    id:          'personal-branding',
    prismType:   'torus',
    number:      '01',
    title:       'Personal Branding',
    description: 'Craft a distinctive identity that speaks before you do. We build personal brands that command attention and build lasting authority in your space.',
    tags:        ['Identity', 'Positioning', 'Storytelling'],
  },
  {
    id:          'social-media',
    prismType:   'sphere',
    number:      '02',
    title:       'Social Media Management',
    description: 'Strategic content ecosystems that grow your audience, deepen engagement, and convert followers into loyal, paying customers.',
    tags:        ['Content', 'Growth', 'Community'],
  },
  {
    id:          'web-app-dev',
    prismType:   'octahedron',
    number:      '03',
    title:       'Website & App Development',
    description: 'Immersive digital experiences engineered for performance. From concept to deployment, we build products that scale with your ambition.',
    tags:        ['Next.js', 'React', 'WebGL'],
  },
  {
    id:          'seo-sem',
    prismType:   'pyramid',
    number:      '04',
    title:       'SEO & SEM',
    description: 'Dominate search results with data-driven strategies. We optimise for the algorithms that matter and the humans that convert.',
    tags:        ['Organic', 'Paid Search', 'Analytics'],
  },
  {
    id:          'performance-marketing',
    prismType:   'cylinder',
    number:      '05',
    title:       'Performance Marketing',
    description: 'ROI-obsessed campaigns across every channel. We engineer growth loops that compound your returns month over month.',
    tags:        ['Meta Ads', 'Google Ads', 'Retargeting'],
  },
  {
    id:          'branding-strategy',
    prismType:   'dodecahedron',
    number:      '06',
    title:       'Branding & Strategy',
    description: 'Visual identities and brand systems that position you miles ahead of the competition. Built to last, designed to lead.',
    tags:        ['Strategy', 'Visual Identity', 'Systems'],
  },
] as const

// ── Stats data ───────────────────────────────────────────────────────────────
const STATS = [
  { value: '150+', label: 'Clients Served' },
  { value: '8×',   label: 'Avg. ROI Delivered' },
  { value: '98%',  label: 'Retention Rate' },
  { value: '6yr',  label: 'Industry Experience' },
]

// ── Nav links ─────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work'     },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Home() {
  return (
    <main className="bg-transparent">

      {/* ──────────────────────────────────────────────────────────────────────
          NAV — Fixed glassmorphism bar
          ────────────────────────────────────────────────────────────────────── */}
      <nav
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-50 h-20 px-8 md:px-12 flex items-center justify-between
                   bg-white/5 backdrop-blur-md border-b border-white/10"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.3)' }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline" aria-label="Maverick Digitals home">
          <span
            className="text-xl font-black tracking-tighter text-[#1A1A1A]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            MAVERICK
          </span>
          <span
            className="text-xl font-black tracking-tighter text-[#FF8C00]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            ↗
          </span>
        </a>

        {/* Primary links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-[#1A1A1A]/60
                           hover:text-[#1A1A1A] transition-colors duration-200 no-underline
                           hover:text-[#FF8C00]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact">
          <button className="btn-primary text-sm px-6 py-3">
            Get Started ↗
          </button>
        </a>
      </nav>

      {/* ──────────────────────────────────────────────────────────────────────
          HERO — Full viewport, massive type, 3D sphere lives behind
          ────────────────────────────────────────────────────────────────────── */}
      <header
        id="hero"
        className="relative min-h-screen w-full flex flex-col items-center justify-center
                   pt-20 px-8 md:px-16 text-center overflow-hidden"
      >
        {/* Eyebrow badge */}
        <div
          data-gsap-fade-up
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full
                     bg-white/20 backdrop-blur-sm border border-white/30 text-xs
                     font-semibold tracking-widest uppercase text-[#1A1A1A]/70"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] inline-block animate-pulse" />
          Full-Service Digital Agency
        </div>

        {/* Main headline */}
        <h1
          data-gsap-fade-up
          className="font-black leading-[1.0] tracking-tighter text-[#1A1A1A]
                     text-[clamp(3.5rem,9vw,9rem)] max-w-5xl"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          GROWING{' '}
          <span className="text-orange-accent">SMARTER,</span>
          <br />
          MOVING FASTER.
        </h1>

        {/* Sub-copy */}
        <p
          data-gsap-fade-up
          className="mt-8 max-w-xl text-lg leading-relaxed text-[#4A4A4A] font-light"
        >
          We are a full-service digital agency engineering brand experiences
          that cut through the noise — from strategy to execution, we partner
          with ambitious companies ready to lead their category.
        </p>

        {/* CTA buttons */}
        <div data-gsap-fade-up className="mt-10 flex items-center gap-4 flex-wrap justify-center">
          <a href="#services">
            <button className="btn-primary">
              Explore Services ↗
            </button>
          </a>
          <a href="#contact">
            <button className="btn-outline">
              Get In Touch
            </button>
          </a>
        </div>

        {/* Stats strip */}
        <div
          data-gsap-fade-up
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl
                     px-8 hidden md:flex items-center justify-between"
        >
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl font-black tracking-tight text-[#1A1A1A]"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {s.value}
              </p>
              <p className="text-xs text-[#1A1A1A]/50 tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#1A1A1A]/20 to-transparent" />
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────────────────
          SERVICES — 6-card glassmorphism grid
          ────────────────────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="relative min-h-screen w-full py-32 px-8 md:px-16"
      >
        {/* Section header */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF8C00]">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="section-heading max-w-xl"
              data-gsap-fade-up
            >
              Services Built{' '}
              <span className="text-orange-accent">to Scale</span>{' '}
              Your Vision
            </h2>
            <p
              className="max-w-xs text-sm leading-relaxed text-[#4A4A4A] md:text-right"
              data-gsap-fade-up
            >
              Every service is engineered as a growth system — not a one-time
              deliverable.
            </p>
          </div>
        </div>

        {/* ── 6-Card Grid ── */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={`card-${service.id}`}
              data-gsap-card
              data-prism-type={service.prismType}
              className="glass-card p-8 flex flex-col gap-6 group cursor-pointer"
            >
              {/*
               * ── PRISM CONTAINER ──────────────────────────────────────────
               * This div is intentionally empty.
               * In Step 5, GSAP will read the DOMRect of this element and
               * translate the corresponding CardPrism from the WebGL scene
               * into this exact screen position, creating the illusion of
               * a 3D object living inside the DOM card.
               *
               * data-prism-type matches the `type` prop on <CardPrism> in Scene.tsx
               */}
              <div
                className="prism-container w-full h-48 rounded-xl flex items-center justify-center
                           bg-white/10 border border-white/20 relative overflow-hidden"
                data-prism-type={service.prismType}
                id={`prism-${service.id}`}
                aria-hidden="true"
              >
                {/* Subtle inner glow — decorative until Step 5 */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,140,0,0.08) 0%, transparent 70%)',
                  }}
                />
                {/* Placeholder number shown until 3D object arrives */}
                <span
                  className="text-6xl font-black text-[#1A1A1A]/5 select-none"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {service.number}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Number + title row */}
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-xl font-bold tracking-tight text-[#1A1A1A] leading-tight"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {service.title}
                  </h3>
                  <span className="text-xs font-bold text-[#FF8C00] tracking-widest mt-1 shrink-0">
                    {service.number}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[#4A4A4A] flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full
                                 bg-[#1A1A1A]/5 text-[#1A1A1A]/60 border border-[#1A1A1A]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover CTA */}
                <div
                  className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                             text-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More
                  <span className="text-base leading-none">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────
          ABOUT — Brief trust section
          ────────────────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative w-full py-32 px-8 md:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">
            {/* Left: quote */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-[#FF8C00]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#FF8C00]">
                  Our Philosophy
                </span>
              </div>
              <blockquote
                className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A] leading-tight mb-8"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                "We don't just build brands.{' '}
                <span className="text-orange-accent">We architect growth engines</span>{' '}
                that compound over time."
              </blockquote>
              <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-md">
                Maverick Digitals is a collective of strategists, designers, engineers,
                and growth marketers obsessed with one thing — building businesses that
                grow smarter and move faster than the competition.
              </p>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-8 shrink-0">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-white/20 border border-white/30"
                >
                  <p
                    className="text-4xl font-black tracking-tight text-[#FF8C00]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/60 tracking-wider uppercase mt-2 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────
          CTA BAND — Contact conversion
          ────────────────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative w-full py-32 px-8 md:px-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF8C00] mb-6 block">
            Ready to Grow?
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-[#1A1A1A] leading-tight mb-8"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Let's Build Something{' '}
            <span className="text-orange-accent">Extraordinary.</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-xl mx-auto mb-12 leading-relaxed">
            Book a free strategy session with our team. We'll audit your current
            positioning and map out your path to category leadership.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="btn-primary text-base px-10 py-4">
              Book a Free Strategy Call ↗
            </button>
            <button className="btn-outline text-base px-10 py-4">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────
          FOOTER
          ────────────────────────────────────────────────────────────────────── */}
      <footer
        className="relative w-full border-t border-[#1A1A1A]/10 py-12 px-8 md:px-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-black tracking-tighter text-[#1A1A1A]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              MAVERICK
            </span>
            <span
              className="text-lg font-black tracking-tighter text-[#FF8C00]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              ↗
            </span>
          </div>

          {/* Footer links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-8 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs tracking-wider uppercase text-[#1A1A1A]/50 hover:text-[#FF8C00]
                               transition-colors duration-200 no-underline font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-[#1A1A1A]/40 tracking-wide">
            © {new Date().getFullYear()} Maverick Digitals. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}
