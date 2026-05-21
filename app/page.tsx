'use client'

const SERVICES = [
  {
    id:        'personal-branding',
    prismType: 'torus',
    number:    '01',
    title:     'Personal Branding',
    description:
      'We build high-ticket authority ecosystems that position you as the go-to expert in your category. From founder story architecture to thought-leadership content — crafted to attract premium clients and command premium prices.',
    tags: ['Authority Building', 'Thought Leadership', 'Premium Positioning'],
  },
  {
    id:        'social-media',
    prismType: 'sphere',
    number:    '02',
    title:     'Social Media Management',
    description:
      'Targeted outbound strategies engineered for B2B lead generation. We build and operate cold email outreach infrastructure, LinkedIn DM sequences, and content systems that fill your pipeline while you sleep.',
    tags: ['Outbound Sequences', 'Cold Email Infrastructure', 'Pipeline Growth'],
  },
  {
    id:        'web-app-dev',
    prismType: 'octahedron',
    number:    '03',
    title:     'Website & App Development',
    description:
      'Performance-first digital products built on modern stacks. We engineer conversion-optimised landing pages, full-stack web apps, and interactive brand experiences that turn visitors into qualified leads.',
    tags: ['Next.js', 'Conversion Design', 'WebGL'],
  },
  {
    id:        'seo-sem',
    prismType: 'pyramid',
    number:    '04',
    title:     'SEO & SEM',
    description:
      'Data-driven acquisition strategies that compound over time. We engineer search visibility through technical SEO, high-intent content clusters, and paid search systems calibrated to your exact cost-per-acquisition targets.',
    tags: ['Data-Driven Acquisition', 'Search Visibility', 'CPA Optimisation'],
  },
  {
    id:        'performance-marketing',
    prismType: 'cylinder',
    number:    '05',
    title:     'Performance Marketing',
    description:
      'Automated lead generation and conversion rate optimisation at every funnel stage. We build multi-channel paid ecosystems — Meta, Google, YouTube — backed by rigorous split-testing and attribution modelling that scales profitably.',
    tags: ['Automated Lead Gen', 'CRO', 'Attribution Modelling'],
  },
  {
    id:        'branding-strategy',
    prismType: 'dodecahedron',
    number:    '06',
    title:     'Branding & Strategy',
    description:
      'Complete brand positioning systems that differentiate you in saturated markets. We deliver naming, visual identity, messaging architecture, and go-to-market strategy — built to compound your competitive advantage over years.',
    tags: ['Positioning', 'Visual Identity', 'Go-to-Market'],
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
    <main className="bg-transparent text-[#1a1a1a] relative z-10 w-full min-h-screen">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-8 md:px-16
                      flex items-center justify-between
                      bg-white/40 backdrop-blur-md border-b border-white/50">
        <span
          className="text-sm font-black tracking-tighter text-black"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          MAVERICK DIGITALS
        </span>

        <ul className="hidden md:flex items-center gap-10 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[11px] font-semibold tracking-widest uppercase
                           text-black/40 hover:text-black
                           transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button className="px-5 py-2 rounded-full bg-black text-white text-xs
                           font-semibold tracking-wide hover:bg-neutral-800
                           transition-all duration-200 hover:-translate-y-px">
          Get Started
        </button>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section id="hero"
        className="min-h-screen w-full flex flex-col justify-center items-center
                   relative pt-20 px-6 md:px-16">

        <div className="flex flex-col items-center text-center max-w-7xl w-full">

          {/* Eyebrow */}
          <div className="mb-10 inline-flex items-center gap-2.5 px-5 py-2 rounded-full
                          border border-black/8 bg-white/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] inline-block" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-black/50">
              Full-Service Digital Agency
            </span>
          </div>

          {/* Headline — spec-exact sizing */}
          <h1
            className="font-black tracking-tighter leading-[0.85] text-black
                       text-7xl md:text-9xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            GROWING{' '}
            <span className="text-[#FF8C00]">SMARTER,</span>
            <br />
            MOVING FASTER.
          </h1>

          {/* Sub-headline — spec-exact sizing */}
          <p
            className="text-lg md:text-2xl font-medium tracking-wide opacity-60
                       max-w-3xl mt-8 leading-relaxed text-black"
          >
            We are a full-service digital agency engineering brand experiences
            that cut through the noise — from strategy to execution, we partner
            with ambitious companies ready to lead their category.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex items-center gap-4 flex-wrap justify-center">
            <a href="#services">
              <button className="px-10 py-4 rounded-full bg-black text-white text-sm
                                 font-semibold tracking-wide hover:bg-neutral-800
                                 transition-all duration-300 hover:-translate-y-0.5
                                 shadow-[0_4px_20px_0_rgba(0,0,0,0.15)]">
                Explore Services
              </button>
            </a>
            <a href="#contact">
              <button className="px-10 py-4 rounded-full border border-black/15
                                 text-black text-sm font-semibold tracking-wide
                                 bg-white/40 backdrop-blur-sm hover:bg-white/60
                                 transition-all duration-300 hover:-translate-y-0.5">
                Get In Touch
              </button>
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-black/25">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-black/15 to-transparent" />
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section id="services"
        className="min-h-screen w-full flex flex-col justify-center
                   py-32 px-6 md:px-16 border-t border-black/6">
        <div className="max-w-7xl mx-auto w-full">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF8C00]">
              What We Do
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <h2
              className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Services Built
              <br />
              to Scale.
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-black/50 font-medium md:text-right">
              Engineered growth ecosystems — not one-time deliverables.
              Every service compounds over time.
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
                className="bg-white/30 backdrop-blur-2xl border border-white/50
                           shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
                           rounded-3xl p-8 relative overflow-hidden
                           transition-transform duration-500 hover:-translate-y-2
                           flex flex-col"
              >
                {/* Subtle inner highlight top edge */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
                                from-transparent via-white/80 to-transparent" />

                {/*
                 * PRISM CONTAINER — intentionally empty.
                 * Step 5 GSAP will translate the matching CardPrism WebGL
                 * object into this exact DOM bounding box using its DOMRect.
                 * id and data-prism-type must match the type in Scene.tsx.
                 */}
                <div
                  className="prism-container bg-black/5 rounded-2xl h-48 mb-8 border border-black/5"
                  id={`prism-${service.id}`}
                  data-prism-type={service.prismType}
                  aria-hidden="true"
                />

                {/* Number */}
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase
                                 text-black/25 mb-3 block">
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-black tracking-tight text-black leading-tight mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-black/55 flex-1 mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-wide px-3 py-1.5
                                 rounded-full bg-black/5 text-black/45
                                 border border-black/6"
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
      <section id="work"
        className="min-h-[70vh] w-full flex items-center justify-center
                   border-t border-black/6 px-6 py-32">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF8C00]">
              Our Work
            </span>
            <div className="w-8 h-px bg-[#FF8C00]" />
          </div>
          <h2
            className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Case Studies
            <br />
            Coming Soon.
          </h2>
          <p className="text-base text-black/45 max-w-sm mx-auto leading-relaxed font-medium">
            We're curating our best work. In-depth case studies and results arriving shortly.
          </p>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about"
        className="min-h-[70vh] w-full flex items-center justify-center
                   border-t border-black/6 px-6 md:px-16 py-32">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#FF8C00]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF8C00]">
                Philosophy
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black tracking-tighter text-black
                         leading-[0.9] mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              We Architect
              <br />
              Growth Engines.
            </h2>
            <p className="text-base text-black/50 leading-relaxed font-medium">
              Maverick Digitals is a collective of strategists, designers, engineers,
              and growth marketers obsessed with one thing — building businesses that
              grow smarter and move faster than the competition.
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
                className="p-6 rounded-3xl bg-white/30 backdrop-blur-2xl
                           border border-white/50 text-center
                           shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]"
              >
                <p
                  className="text-4xl font-black tracking-tight text-black"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] text-black/40 tracking-[0.15em] uppercase mt-2 font-semibold">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact"
        className="min-h-[70vh] w-full flex items-center justify-center
                   border-t border-black/6 px-6 py-32">
        <div className="max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF8C00]">
              Ready to Grow?
            </span>
            <div className="w-8 h-px bg-[#FF8C00]" />
          </div>
          <h2
            className="text-5xl md:text-7xl font-black tracking-tighter text-black
                       leading-[0.9] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Let's Build
            <br />
            <span className="text-[#FF8C00]">Something Great.</span>
          </h2>
          <p className="text-base text-black/50 max-w-md mx-auto mb-12 leading-relaxed font-medium">
            Book a free strategy session. We'll audit your current positioning
            and map your path to category leadership.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-12 py-4 rounded-full bg-black text-white text-sm
                               font-semibold tracking-wide hover:bg-neutral-800
                               transition-all duration-300 hover:-translate-y-0.5
                               shadow-[0_4px_20px_0_rgba(0,0,0,0.15)]">
              Book a Free Strategy Call
            </button>
            <button className="px-12 py-4 rounded-full border border-black/15
                               text-black text-sm font-semibold tracking-wide
                               bg-white/40 backdrop-blur-sm hover:bg-white/60
                               transition-all duration-300 hover:-translate-y-0.5">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="w-full border-t border-black/6 py-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center
                        justify-between gap-4">
          <span
            className="text-sm font-black tracking-tighter text-black"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            MAVERICK DIGITALS
          </span>
          <ul className="flex flex-wrap items-center gap-8 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[11px] tracking-widest uppercase text-black/30
                             hover:text-black transition-colors duration-200
                             no-underline font-semibold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-black/25 tracking-wide">
            © {new Date().getFullYear()} Maverick Digitals. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}
