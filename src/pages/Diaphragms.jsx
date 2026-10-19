import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '5', label: 'configurations' },
  { num: '6+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Custom shapes and configurations molded to your print',
  'Fabric reinforcement in Nylon, Dacron, Nomex, Kevlar and cotton',
  'Metal bonding to stainless, brass and alloys with integral studs, washers, nuts',
  'PTFE facing for chemical inertness and abrasion resistance',
  'Engineered for extreme pressures and temperatures',
  'Designed for high-frequency pneumatic and hydraulic systems',
  'Optimized for long cycle life and reliability',
  'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
]

const products = [
  { name: 'Reinforced Diaphragms', desc: 'Fabric-reinforced (Nylon, Dacron, Nomex, Kevlar, cotton) for high-pressure strength and stability.' },
  { name: 'Pump & Valve Diaphragms', desc: 'Custom diaphragms for pumps, valves and flow-control devices with long cycle life.' },
  { name: 'Rolling Diaphragms', desc: 'Convoluted rolling designs for long-stroke, low-friction, high-cycle actuation.' },
  { name: 'PTFE-Coated Diaphragms', desc: 'PTFE-faced diaphragms for chemical, abrasion and media resistance.' },
  { name: 'Metal-Bonded Diaphragms', desc: 'Bonded to metal inserts — studs, washers, threaded nuts — for direct assembly mounting.' },
]

const galleryImages = [
  'https://i.postimg.cc/X7z5Bv70/arc-ptfe-diaphragms-(1).jpg',
  'https://i.postimg.cc/zDRv2kqx/rubber.jpg',
  'https://i.postimg.cc/3JXRYJ4Z/rubber-diaphagrams2.jpg',
  'https://i.postimg.cc/VNYzYqyW/image-1-1.jpg',
]

const materials = [
  { name: 'NBR / Nitrile', desc: 'Oil & fuel resistance for hydraulic duty' },
  { name: 'EPDM', desc: 'Water, steam & weather for flow control' },
  { name: 'Silicone', desc: 'Wide temperature flexibility for actuators' },
  { name: 'FKM / Viton', desc: 'Chemical & high-heat for aggressive media' },
  { name: 'Neoprene', desc: 'Balanced oil, weather & flame' },
  { name: 'Fluorosilicone', desc: 'Fuel resistance with broad temp range' },
]

const industries = [
  'Aerospace', 'Automotive', 'Oil & Gas', 'Food & Dairy',
  'Hydraulic Equipment', 'HVAC/R', 'Chemical Processing', 'Power Generation',
]

const applications = [
  'Rolling diaphragms for long-stroke pneumatic actuators requiring low friction',
  'Metal-bonded diaphragms in pressure regulators and control valves',
  'Fabric-reinforced diaphragms in high-pressure hydraulic pumps',
  'PTFE-coated diaphragms handling aggressive chemicals in metering pumps',
  'Diaphragms for vacuum pumps and air compressors',
  'Flow-control meters and pressure regulators in HVACR systems',
  'Aerospace actuator diaphragms surviving extreme temperature swings',
  'Food and dairy pump diaphragms requiring clean, compliant elastomers',
]

const refTools = [
  { name: 'Diaphragm Design Guide', desc: 'Types, materials and design considerations for rubber diaphragms.' },
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
]

const inDepth = [
  {
    title: 'Custom-Molded Rubber Diaphragms for Flow Control and Sealing',
    paragraphs: [
      'Rubber diaphragms are versatile, flexible sealing components that deliver variable sealing in flow-control applications, making them one of the most valuable elements in any sealing system. As an engineering-led, Made in China manufacturer with 20 years of experience, Chinese Rubber Corp produces rubber diaphragms to your specification and to your print, using single and composite elastomers matched to the demands of each industry application. Every diaphragm is custom-to-spec, engineered to fit challenging shapes and configurations rather than pulled from a shelf.',
    ],
  },
  {
    title: 'Elastomer Compounds and Reinforcement Fabrics',
    paragraphs: [
      'We produce diaphragm seals from a broad range of compound grades, selecting the material to suit your operating pressure, temperature, chemical exposure, and service-life requirements. Where an application calls for added strength and dimensional stability, we integrate reinforcement fabrics into the diaphragm.',
    ],
    bulletGroups: [
      {
        label: 'Elastomer compounds',
        items: [
          'Silicone',
          'EPDM',
          'Butyl',
          'Nitrile (Buna-N or NBR)',
          'FKM (a generic compound of Viton, a registered trademark of The Chemours Company)',
          'Neoprene/Chloroprene',
          'TPE',
          'PTFE (a generic compound of Teflon, a registered trademark of The Chemours Company)',
        ],
      },
      {
        label: 'Reinforcement fabrics',
        items: ['Cotton', 'Polyester', 'Nylon', 'Nomex', 'Dacron', 'Kevlar'],
      },
    ],
  },
  {
    title: 'Engineered to Your Application',
    paragraphs: [
      'Because no two flow-control applications are alike, we manufacture diaphragm seals to fit any challenging shape or configuration your design demands. Our engineers work with your requirements to recommend the right compound grade and reinforcement, then produce diaphragms made-to-print for consistent, repeatable performance across the full production run.',
    ],
  },
]

export default function Diaphragms() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Rubber Diaphragms</h1>
              <p className="hero__desc">
                We design and mold custom rubber diaphragms for the toughest pressure, temperature
                and cycle-life demands. When a diaphragm has to survive millions of cycles without
                failing, engineers bring us the problem others can’t solve.
              </p>
              <div className="hero__badges">
                <span>Every part made to your spec</span>
                <span className="dot">·</span>
                <span>Made in China</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Capabilities */}
        <section className="section">
          <div className="container">
            <div className="industry-split">
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">OVERVIEW</p>
                  <h2 className="section__title">Engineered for millions of cycles</h2>
                </div>
                <p className="industry-col__p">
                  ARC manufactures custom rubber diaphragms in five core configurations — reinforced,
                  pump &amp; valve, rolling, PTFE-coated and metal-bonded — each engineered for the
                  pressure, media and cycle life of its application. We reinforce with Nylon, Dacron,
                  Nomex, Kevlar or cotton fabric, bond to stainless steel, brass and other alloys, and
                  add PTFE facings for chemical and abrasion resistance. Built for extreme pressures
                  and temperatures and long operating life, our diaphragms serve high-frequency
                  pneumatic and hydraulic systems where reliability is non-negotiable — every part
                  custom-to-spec, Made in China, under ISO 9001:2015 and IATF 16949:2016.
                </p>
                <div className="stat-grid stat-grid--4">
                  {stats.map((s) => (
                    <div key={s.label} className="stat-box">
                      <span className="stat-box__num">{s.num}</span>
                      <span className="stat-box__label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p className="industry-approvals__eyebrow">QUALITY &amp; APPROVALS — ON REQUEST</p>
                <div className="approval-tags">
                  {approvals.map((a) => (
                    <span key={a} className="approval-tag">{a}</span>
                  ))}
                </div>
                <p className="industry-cta">
                  Have a print or a spec in mind?{' '}
                  <a href="#contact" className="inline-link">Request a quote →</a>
                </p>
              </div>

              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">CAPABILITIES</p>
                </div>
                <ul className="cap-list">
                  {capabilities.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What we make */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHAT WE MAKE</p>
              <h2 className="section__title">Diaphragm configurations we build</h2>
            </div>
            <div className="tools__grid">
              {products.map((p) => (
                <a key={p.name} href="#contact" className="tool-card">
                  <div className="tool-card__top">
                    <h3>{p.name}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{p.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">GALLERY</p>
              <h2 className="section__title">Rubber Diaphragms we've built</h2>
            </div>
            <div className="gallery-4col">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt="Diaphragm" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MATERIALS WE MOLD &amp; EXTRUDE</p>
            </div>
            <div className="materials-chip-grid">
              {materials.map((m) => (
                <div key={m.name} className="material-chip">
                  <strong>{m.name}</strong>
                  <span>{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">INDUSTRIES WE SERVE</p>
            </div>
            <div className="industry-tags">
              {industries.map((ind) => (
                <span key={ind} className="industry-tag">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Where it's used */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHERE IT’S USED</p>
              <h2 className="section__title">Typical applications</h2>
            </div>
            <ul className="app-list">
              {applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design references */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">DESIGN REFERENCES FOR DIAPHRAGMS</p>
            </div>
            <div className="tools__grid">
              {refTools.map((t) => (
                <a key={t.name} href="#contact" className="tool-card">
                  <div className="tool-card__top">
                    <h3>{t.name}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Need diaphragms to spec?</h2>
            <p className="cta-band__desc">
              Send your drawing, sample or service conditions — our engineers confirm the compound,
              tooling and a path to production.
            </p>
            <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>

        {/* In depth */}
        <section className="section about">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">IN DEPTH</p>
            </div>
            <div className="about__body">
              {inDepth.map((s) => (
                <div key={s.title} className="about__block">
                  <h3>{s.title}</h3>
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.bulletGroups && (
                    <>
                      {s.bulletGroups.map((g) => (
                        <div key={g.label} className="about__group">
                          <strong>{g.label}:</strong>
                          <ul className="about__bullets">
                            {g.items.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
