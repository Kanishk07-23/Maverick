'use client'

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
    description: 'Strategic content ecosystems that grow your audience and convert followers into loyal customers.',
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

const NAV_LINKS = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work'     },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Home() {
  return (
    <main className="bg-transparent text-[#1a1a1a]">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-8 md:px-16
                      flex items-center justify-between
                      bg-white/10 backdrop-blur-md border-b border-white/20">
        <span
          className="text-base font-black tracking-tighter text-[#1a1a1a]"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          MAVERICK DIGITALS
        </span>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[11px] font-medium tracking-widest uppercase
                           text-[#1a1a1a]/50 hover:text-[#1a1a1a]
                           transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-xs
                     font-semibold tracking-wide hover:bg-[#333]
                     transition-colors duration-200"
        >
          Get Started
        </button>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="min-h-screen w-full flex flex-col justify-center items-center relative pt-20"
      >
        <div className="flex flex-col items-center text-center px-4 max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          border border-[#1a1a1a]/10 bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/30 inline-block" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a1a]/50">
              Full-Service Digital Agency
            </span>
          </div>

          <h1
            className="font-black leading-none tracking-tighter text-[#1a1a1a]
                       text-[clamp(3rem,9vw,9rem)]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            GROWING SMARTER,
            <br />
            MOVING FASTER.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-[#666666]">
            We are a full-service digital agency engineering brand experiences
            that cut through the noise — from strategy to execution.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
            <a href="#services">
              <button
                className="px-8 py-3 rounded-full bg-[#1a1a1a] text-white text-sm
                           font-medium tracking-wide hover:bg-[#333]
                           transition-all duration-200 hover:-translate-y-px"
              >
                Explore Services
              </button>
            </a>
            <a href="#contact">
              <button
                className="px-8 py-3 rounded-full border border-[#1a1a1a]/20
                           text-[#1a1a1a] text-sm font-medium tracking-wide
                           bg-white/10 backdrop-blur-sm hover:bg-white/20
                           transition-all duration-200 hover:-translate-y-px"
              >
                Get In Touch
              </button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#1a1a1a]/20 to-transparent" />
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="min-h-screen w-full flex flex-col justify-center py-20 px-4 md:px-10
                   border-t border-black/10"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-[#1a1a1a]/30" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tighter
                         text-[#1a1a1a] leading-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Every Service Is a
              <br />
              Growth System.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-[#666666]">
              Engineered ecosystems built to compound your returns — not one-time deliverables.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                id={`card-${service.id}`}
                data-gsap-card
                data-prism-type={service.prismType}
                className="rounded-2xl p-6 flex flex-col
                           bg-white/10 backdrop-blur-lg border border-white/20
                           transition-all duration-300 hover:bg-white/20 group cursor-pointer"
              >
                {/*
                 * PRISM CONTAINER — intentionally empty.
                 * Step 5 GSAP will position the matching CardPrism WebGL object
                 * into this exact DOM bounding box.
                 */}
                <div
                  className="prism-container w-full h-48 rounded-xl bg-white/5 mb-6"
                  id={`prism-${service.id}`}
                  data-prism-type={service.prismType}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3
                    className="text-base font-bold tracking-tight text-[#1a1a1a] leading-snug"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-bold text-[#1a1a1a]/30 tracking-widest shrink-0 mt-0.5">
                    {service.number}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[#666666] flex-1 mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium tracking-wide px-2.5 py-1
                                 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/40
                                 border border-[#1a1a1a]/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ────────────────────────────────────────────────────────────── */}
      <section
        id="work"
        className="min-h-[70vh] w-full flex items-center justify-center border-t border-black/10"
      >
        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#1a1a1a]/30" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40">Our Work</span>
            <div className="w-5 h-px bg-[#1a1a1a]/30" />
          </div>
          <h2
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter text-[#1a1a1a] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Case Studies
            <br />
            Coming Soon.
          </h2>
          <p className="text-sm text-[#666666] max-w-sm mx-auto leading-relaxed">
            We're curating our best work. Check back soon for in-depth case studies and results.
          </p>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="min-h-[70vh] w-full flex items-center justify-center border-t border-black/10 px-4 md:px-16"
      >
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#1a1a1a]/30" />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40">About</span>
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tighter text-[#1a1a1a] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              We Architect
              <br />
              Growth Engines.
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed">
              Maverick Digitals is a collective of strategists, designers, engineers, and
              growth marketers obsessed with one thing — building businesses that grow
              smarter and move faster than the competition.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '150+', label: 'Clients Served' },
              { value: '8×',   label: 'Avg. ROI' },
              { value: '98%',  label: 'Retention Rate' },
              { value: '6yr',  label: 'Experience' },
            ].map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-2xl bg-white/10 border border-white/20 text-center"
              >
                <p
                  className="text-3xl font-black tracking-tight text-[#1a1a1a]"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] text-[#666666] tracking-widest uppercase mt-1.5 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="min-h-[70vh] w-full flex items-center justify-center border-t border-black/10 px-4"
      >
        <div className="max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#1a1a1a]/30" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40">Contact</span>
            <div className="w-5 h-px bg-[#1a1a1a]/30" />
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter text-[#1a1a1a] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Let's Build Something
            <br />
            Extraordinary.
          </h2>
          <p className="text-sm text-[#666666] max-w-sm mx-auto mb-10 leading-relaxed">
            Book a free strategy session. We'll audit your current positioning and
            map your path to category leadership.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              className="px-10 py-4 rounded-full bg-[#1a1a1a] text-white text-sm
                         font-medium tracking-wide hover:bg-[#333]
                         transition-all duration-200 hover:-translate-y-px"
            >
              Book a Free Strategy Call
            </button>
            <button
              className="px-10 py-4 rounded-full border border-[#1a1a1a]/20
                         text-[#1a1a1a] text-sm font-medium tracking-wide
                         bg-white/10 backdrop-blur-sm hover:bg-white/20
                         transition-all duration-200 hover:-translate-y-px"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="w-full border-t border-black/10 py-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-sm font-black tracking-tighter text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            MAVERICK DIGITALS
          </span>
          <ul className="flex flex-wrap items-center gap-6 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/30
                             hover:text-[#1a1a1a] transition-colors duration-200 no-underline font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-[#1a1a1a]/25 tracking-wide">
            © {new Date().getFullYear()} Maverick Digitals
          </p>
        </div>
      </footer>

    </main>
  )
}
