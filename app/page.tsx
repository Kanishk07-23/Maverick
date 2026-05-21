'use client'

const SERVICES = [
  {
    id:        'personal-branding',
    prismType: 'torus',
    number:    '01',
    title:     'Personal Branding',
    description: 'Craft a distinctive identity that speaks before you do. We build personal brands that command attention and lasting authority.',
    tags:      ['Identity', 'Positioning', 'Storytelling'],
  },
  {
    id:        'social-media',
    prismType: 'sphere',
    number:    '02',
    title:     'Social Media Management',
    description: 'Strategic content ecosystems that grow your audience and convert followers into loyal customers.',
    tags:      ['Content', 'Growth', 'Community'],
  },
  {
    id:        'web-app-dev',
    prismType: 'octahedron',
    number:    '03',
    title:     'Website & App Development',
    description: 'Immersive digital experiences engineered for performance. From concept to deployment, built to scale.',
    tags:      ['Next.js', 'React', 'WebGL'],
  },
  {
    id:        'seo-sem',
    prismType: 'pyramid',
    number:    '04',
    title:     'SEO & SEM',
    description: 'Dominate search results with data-driven strategies optimised for algorithms and humans alike.',
    tags:      ['Organic', 'Paid Search', 'Analytics'],
  },
  {
    id:        'performance-marketing',
    prismType: 'cylinder',
    number:    '05',
    title:     'Performance Marketing',
    description: 'ROI-obsessed campaigns across every channel. Growth loops that compound your returns month over month.',
    tags:      ['Meta Ads', 'Google Ads', 'Retargeting'],
  },
  {
    id:        'branding-strategy',
    prismType: 'dodecahedron',
    number:    '06',
    title:     'Branding & Strategy',
    description: 'Visual identities and brand systems that position you miles ahead of the competition.',
    tags:      ['Strategy', 'Visual Identity', 'Systems'],
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
          className="text-base font-black tracking-tighter text-black"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          MAVERICK DIGITALS
        </span>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[11px] font-medium tracking-widest uppercase
                           text-black/50 hover:text-black
                           transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button className="px-5 py-2 rounded-full bg-black text-white text-xs
                           font-semibold tracking-wide hover:bg-[#333]
                           transition-colors duration-200">
          Get Started
        </button>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center
                          relative pt-20 px-4">
        <div className="flex flex-col items-center text-center max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          border border-black/10 bg-white/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 inline-block" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50">
              Full-Service Digital Agency
            </span>
          </div>

          <h1
            className="font-black leading-none tracking-tighter text-black
                       text-[clamp(3rem,9vw,9rem)]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            GROWING{' '}
            <span className="text-[#FF8C00]">SMARTER,</span>
            <br />
            MOVING FASTER.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-black/60 font-light">
            We are a full-service digital agency engineering brand experiences
            that cut through the noise — from strategy to execution.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
            <a href="#services">
              <button className="px-8 py-3 rounded-full bg-black text-white text-sm
                                 font-medium tracking-wide hover:bg-[#333]
                                 transition-all duration-200 hover:-translate-y-px">
                Explore Services
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-3 rounded-full border border-black/20
                                 text-black text-sm font-medium tracking-wide
                                 bg-white/30 backdrop-blur-sm hover:bg-white/50
                                 transition-all duration-200 hover:-translate-y-px">
                Get In Touch
              </button>
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase text-black/30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-black/15 to-transparent" />
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section id="services" className="min-h-screen w-full flex flex-col justify-center
                                        py-20 px-4 md:px-10 border-t border-black/8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-black/25" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-black/40">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tighter
                         text-black leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Every Service Is a<br />Growth System.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-black/50">
              Engineered ecosystems built to compound your returns — not one-time deliverables.
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
                className="bg-white/40 backdrop-blur-lg border border-white/60
                           shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                           rounded-2xl p-8 flex flex-col
                           transition-all duration-300 hover:bg-white/60 group cursor-pointer"
              >
                {/*
                 * PRISM CONTAINER — intentionally empty.
                 * Step 5 GSAP will translate the matching CardPrism WebGL object
                 * into this DOM bounding box.
                 */}
                <div
                  className="prism-container w-full h-48 rounded-xl bg-black/5 mb-6"
                  id={`prism-${service.id}`}
                  data-prism-type={service.prismType}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3
                    className="text-base font-bold tracking-tight text-black leading-snug"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-bold text-black/25 tracking-widest shrink-0 mt-0.5">
                    {service.number}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-black/55 flex-1 mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium tracking-wide px-2.5 py-1
                                 rounded-full bg-black/5 text-black/40
                                 border border-black/8"
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
      <section id="work" className="min-h-[70vh] w-full flex items-center justify-center
                                     border-t border-black/8 px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-5 h-px bg-black/25" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-black/40">Our Work</span>
            <div className="w-5 h-px bg-black/25" />
          </div>
          <h2
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter
                       text-black leading-tight mb-5"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Case Studies
            <br />
            Coming Soon.
          </h2>
          <p className="text-sm text-black/50 max-w-sm mx-auto leading-relaxed">
            We're curating our best work. Check back soon for in-depth case studies and results.
          </p>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="min-h-[70vh] w-full flex items-center justify-center
                                      border-t border-black/8 px-4 md:px-16">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-black/25" />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-black/40">About</span>
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tighter
                         text-black leading-tight mb-5"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              We Architect
              <br />
              Growth Engines.
            </h2>
            <p className="text-sm text-black/55 leading-relaxed">
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
                className="p-5 rounded-2xl bg-white/40 backdrop-blur-sm
                           border border-white/60 text-center
                           shadow-[0_4px_16px_0_rgba(31,38,135,0.05)]"
              >
                <p
                  className="text-3xl font-black tracking-tight text-black"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] text-black/40 tracking-widest uppercase mt-1.5 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="min-h-[70vh] w-full flex items-center justify-center
                                        border-t border-black/8 px-4">
        <div className="max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-5 h-px bg-black/25" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-black/40">Contact</span>
            <div className="w-5 h-px bg-black/25" />
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter
                       text-black leading-tight mb-5"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Let's Build Something
            <br />
            <span className="text-[#FF8C00]">Extraordinary.</span>
          </h2>
          <p className="text-sm text-black/50 max-w-sm mx-auto mb-10 leading-relaxed">
            Book a free strategy session. We'll audit your current positioning and
            map your path to category leadership.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-10 py-4 rounded-full bg-black text-white text-sm
                               font-medium tracking-wide hover:bg-[#333]
                               transition-all duration-200 hover:-translate-y-px">
              Book a Free Strategy Call
            </button>
            <button className="px-10 py-4 rounded-full border border-black/20
                               text-black text-sm font-medium tracking-wide
                               bg-white/30 backdrop-blur-sm hover:bg-white/50
                               transition-all duration-200 hover:-translate-y-px">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="w-full border-t border-black/8 py-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-sm font-black tracking-tighter text-black"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            MAVERICK DIGITALS
          </span>
          <ul className="flex flex-wrap items-center gap-6 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[10px] tracking-widest uppercase text-black/30
                             hover:text-black transition-colors duration-200 no-underline font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-black/25 tracking-wide">
            © {new Date().getFullYear()} Maverick Digitals
          </p>
        </div>
      </footer>

    </main>
  )
}
