'use client'

// ── Service card data ─────────────────────────────────────────────────────────
const SERVICES = [
  {
    id:          'personal-branding',
    prismType:   'torus',
    number:      '01',
    title:       'Personal Branding',
    description: 'Craft a distinctive identity that speaks before you do. We build personal brands that command attention and build lasting authority.',
    tags:        ['Identity', 'Positioning', 'Storytelling'],
  },
  {
    id:          'social-media',
    prismType:   'sphere',
    number:      '02',
    title:       'Social Media Management',
    description: 'Strategic content ecosystems that grow your audience, deepen engagement, and convert followers into loyal customers.',
    tags:        ['Content', 'Growth', 'Community'],
  },
  {
    id:          'web-app-dev',
    prismType:   'octahedron',
    number:      '03',
    title:       'Website & App Development',
    description: 'Immersive digital experiences engineered for performance. From concept to deployment, we build products that scale.',
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

const NAV_LINKS = ['Home', 'Services', 'Work', 'About', 'Contact']

export default function Home() {
  return (
    <main className="bg-transparent">

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-20 px-8 md:px-16
                   flex items-center justify-between
                   bg-white/5 backdrop-blur-md border-b border-white/20"
      >
        {/* Logo */}
        <a href="#hero" className="no-underline">
          <span
            className="text-lg font-black tracking-tighter text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            MAVERICK DIGITALS
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-medium tracking-widest uppercase
                           text-[#1a1a1a]/50 hover:text-[#1a1a1a]
                           transition-colors duration-200 no-underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-sm
                     font-medium tracking-wide transition-all duration-200
                     hover:bg-[#333] hover:-translate-y-px"
        >
          Get Started
        </button>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <header
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center
                   pt-20 px-8 md:px-16 text-center"
      >
        <div
          data-gsap-fade-up
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     border border-[#1a1a1a]/10 bg-white/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/40 inline-block" />
          <span className="text-[11px] font-medium tracking-widest uppercase text-[#666666]">
            Full-Service Digital Agency
          </span>
        </div>

        <h1
          data-gsap-fade-up
          className="font-black leading-[1.0] tracking-tighter text-[#1a1a1a]
                     text-[clamp(3rem,8vw,8rem)] max-w-5xl"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          GROWING SMARTER,
          <br />
          MOVING FASTER.
        </h1>

        <p
          data-gsap-fade-up
          className="mt-8 max-w-md text-base leading-relaxed text-[#666666] font-light"
        >
          We are a full-service digital agency engineering brand experiences
          that cut through the noise — from strategy to execution.
        </p>

        <div data-gsap-fade-up className="mt-10 flex items-center gap-4">
          <button
            className="px-8 py-3.5 rounded-full bg-[#1a1a1a] text-white text-sm
                       font-medium tracking-wide transition-all duration-200
                       hover:bg-[#333] hover:-translate-y-px"
          >
            Explore Services
          </button>
          <button
            className="px-8 py-3.5 rounded-full border border-[#1a1a1a]/20
                       text-[#1a1a1a] text-sm font-medium tracking-wide
                       bg-white/10 backdrop-blur-sm transition-all duration-200
                       hover:bg-white/20 hover:-translate-y-px"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/30">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#1a1a1a]/20 to-transparent" />
        </div>
      </header>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="relative min-h-screen w-full py-32 px-8 md:px-16"
      >
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-6 h-px bg-[#1a1a1a]/30" />
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#666666]">
              Services
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2
              data-gsap-fade-up
              className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tighter
                         text-[#1a1a1a] leading-tight max-w-lg"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Every Service is a
              <br />
              Growth System.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-[#666666]">
              Not one-time deliverables — engineered ecosystems built to
              compound your returns over time.
            </p>
          </div>

          {/* 6-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                id={`card-${service.id}`}
                data-gsap-card
                data-prism-type={service.prismType}
                className="relative overflow-hidden rounded-2xl p-8 flex flex-col gap-6
                           bg-white/10 backdrop-blur-lg border border-white/20
                           transition-all duration-300 hover:bg-white/20 group cursor-pointer"
              >
                {/*
                 * ── PRISM CONTAINER ─────────────────────────────────────────
                 * Intentionally empty. Step 5 GSAP will translate the matching
                 * CardPrism WebGL object into this DOM bounding box.
                 * id and data-prism-type must match the CardPrism type in Scene.tsx
                 */}
                <div
                  className="prism-container w-full h-48 rounded-xl
                             bg-white/10 border border-white/20
                             flex items-center justify-center relative overflow-hidden"
                  id={`prism-${service.id}`}
                  data-prism-type={service.prismType}
                  aria-hidden="true"
                >
                  <span
                    className="text-7xl font-black text-[#1a1a1a]/5 select-none"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="text-lg font-bold tracking-tight text-[#1a1a1a] leading-snug"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {service.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#666666] tracking-widest mt-0.5 shrink-0">
                      {service.number}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-[#666666] flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold tracking-wider px-3 py-1
                                   rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/40
                                   border border-[#1a1a1a]/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="relative w-full py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl p-12 md:p-20 bg-white/10 backdrop-blur-lg
                       border border-white/20 flex flex-col md:flex-row
                       items-center gap-16"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-[#1a1a1a]/30" />
                <span className="text-[11px] font-medium tracking-widest uppercase text-[#666666]">
                  Our Philosophy
                </span>
              </div>
              <blockquote
                className="text-3xl md:text-4xl font-black tracking-tight
                           text-[#1a1a1a] leading-tight mb-8"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                "We don't just build brands. We architect growth engines that
                compound over time."
              </blockquote>
              <p className="text-sm text-[#666666] leading-relaxed max-w-sm">
                Maverick Digitals is a collective of strategists, designers,
                engineers, and growth marketers obsessed with one thing —
                building businesses that grow smarter and move faster.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 shrink-0">
              {[
                { value: '150+', label: 'Clients Served' },
                { value: '8×',   label: 'Avg. ROI' },
                { value: '98%',  label: 'Retention Rate' },
                { value: '6yr',  label: 'Experience' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl bg-white/15 border border-white/20 text-center"
                >
                  <p
                    className="text-4xl font-black tracking-tight text-[#1a1a1a]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] text-[#666666] tracking-widest uppercase mt-2 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────────────────────── */}
      <section id="contact" className="relative w-full py-32 px-8 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 h-px bg-[#1a1a1a]/30" />
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#666666]">
              Ready to Grow?
            </span>
            <div className="w-6 h-px bg-[#1a1a1a]/30" />
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter
                       text-[#1a1a1a] leading-tight mb-8"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Let's Build Something
            <br />
            Extraordinary.
          </h2>
          <p className="text-base text-[#666666] max-w-md mx-auto mb-12 leading-relaxed">
            Book a free strategy session. We'll audit your current positioning
            and map your path to category leadership.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              className="px-10 py-4 rounded-full bg-[#1a1a1a] text-white text-sm
                         font-medium tracking-wide transition-all duration-200
                         hover:bg-[#333] hover:-translate-y-px"
            >
              Book a Free Strategy Call
            </button>
            <button
              className="px-10 py-4 rounded-full border border-[#1a1a1a]/20
                         text-[#1a1a1a] text-sm font-medium tracking-wide
                         bg-white/10 backdrop-blur-sm transition-all duration-200
                         hover:bg-white/20 hover:-translate-y-px"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="relative w-full border-t border-[#1a1a1a]/10 py-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-base font-black tracking-tighter text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            MAVERICK DIGITALS
          </span>

          <ul className="flex flex-wrap items-center gap-8 list-none">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] tracking-widest uppercase text-[#1a1a1a]/40
                             hover:text-[#1a1a1a] transition-colors duration-200 no-underline font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[11px] text-[#1a1a1a]/30 tracking-wide">
            © {new Date().getFullYear()} Maverick Digitals
          </p>
        </div>
      </footer>

    </main>
  )
}
