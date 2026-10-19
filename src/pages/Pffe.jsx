import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '4', label: 'configurations' },
  { num: '3+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Compression molding of PTFE powders to custom geometries',
  'Machining of molded billets/stock to tight tolerance',
  'Metallic surface spraying and dipping with PTFE dispersions',
  'PTFE fiber spinning and coating applications',
  'Food-grade, medical-grade and high-purity grade sourcing',
  'Made-to-print custom O-rings, gaskets, diaphragms and parts',
  'Filled/modified PTFE compounds for wear and creep resistance',
  'Prototype through production, first-article support',
]

const products = [
  { name: 'PTFE O-Rings', desc: 'Inert, high-temperature O-rings where elastomers fail chemically or thermally.' },
  { name: 'PTFE Gaskets & Seals', desc: 'Flange gaskets and sealing components for aggressive media.' },
  { name: 'PTFE Diaphragms', desc: 'Chemically inert diaphragms for pumps and valves.' },
  { name: 'Custom PTFE Molded Products', desc: 'Bespoke machined/molded PTFE parts to your print.' },
]

const galleryImages = [
  'https://i.postimg.cc/X7z5Bv70/arc-ptfe-diaphragms-(1).jpg',
  'https://i.postimg.cc/2yv5qCHC/ptfe-2.jpg',
]

const materials = [
  { name: 'PTFE', desc: 'Maximum chemical inertness & purity' },
  { name: 'FFKM / Kalrez', desc: 'Elastomeric seal with PTFE-class chemistry' },
  { name: 'FKM / Viton', desc: 'Paired in hybrid PTFE-contact assemblies' },
]

const industries = [
  'Chemical Processing', 'Pharmaceuticals', 'Food & Dairy', 'Semiconductor',
  'Medical', 'Aerospace', 'Oil & Gas', 'Industrial OEM',
]

const applications = [
  'Aggressive-chemical flange gaskets resistant to acids and solvents',
  'Pump and valve diaphragms handling corrosive process fluids',
  'High-purity semiconductor and pharmaceutical seals',
  'Food and medical grade sealing components in regulated processes',
  'Low-friction PTFE seals for dynamic/sliding interfaces',
  'Electrical-insulating seals for hot, wet environments',
  'Anti-adhesion (non-stick) sealing surfaces in process equipment',
  'High-temperature O-rings beyond elastomer limits',
]

const refTools = [
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
  { name: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes.' },
]

const inDepth = [
  {
    title: 'Custom PTFE Products, Engineered and Made in USA',
    paragraphs: [
      'Polytetrafluoroethylene (PTFE) is a synthetic fluoropolymer of tetrafluoroethylene with an exceptionally broad range of applications. The most widely known brand name for PTFE-based compositions is Teflon by Chemours, a spin-off from DuPont, which originally discovered the compound in 1938. American Rubber Corp is an engineering-led, Made in USA manufacturer of an exclusive range of custom PTFE products, each designed to the diverse and demanding requirements of our customers and valued for its durability and precision. Our PTFE line includes PTFE O-rings, PTFE gaskets and seals, PTFE diaphragms, and custom PTFE molded products, all built to your specification and to your print.',
    ],
  },
  {
    title: 'Properties of PTFE',
    paragraphs: [
      'PTFE combines a set of properties that give it high commercial value across industrial applications: outstanding chemical inertness and resistance to aggressive media, a very low coefficient of friction, excellent electrical insulation, a wide operating temperature range, and strong resistance to weathering and aging. These characteristics make PTFE the material of choice where other elastomers cannot survive the chemical or thermal environment.',
    ],
  },
  {
    title: 'Fabrication of PTFE Products',
    paragraphs: [
      'Fabricating PTFE products requires specialized processing because the material does not flow readily, even above its melting point. Molded parts are produced by compressing and heating fine PTFE powders blended with volatile lubricants. Metallic surfaces can be sprayed or dipped with aqueous dispersions of PTFE particles to form a permanent coating, and dispersions can also be spun into fibers. Our engineers apply the appropriate PTFE fabrication method for each part to deliver consistent, made-to-spec results.',
    ],
  },
]

export default function Pffe() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">PTFE Products</h1>
              <p className="hero__desc">
                When elastomers can’t take the chemistry or the heat, we turn to PTFE. We
                compression-mold and machine custom PTFE O-rings, gaskets, diaphragms and parts — in
                food, medical and high-purity grades — to your exact print.
              </p>
              <div className="hero__badges">
                <span>Every part made to your spec</span>
                <span className="dot">·</span>
                <span>Made in USA</span>
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
                  <h2 className="section__title">Where elastomers reach their limit</h2>
                </div>
                <p className="industry-col__p">
                  ARC manufactures custom PTFE components for applications demanding near-universal
                  chemical resistance, wide temperature capability and the lowest coefficient of
                  friction available in a sealing material. We produce PTFE O-rings, gaskets and
                  seals, diaphragms and fully custom molded products using compression molding of
                  PTFE powders, plus coating, dispersion spraying/dipping and fiber processes.
                  Food-grade, medical-grade and high-purity grades support regulated and clean
                  applications. Every part is made to spec — never a stock catalog item — with the
                  engineering support to match grade and geometry to your service conditions.
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
              <h2 className="section__title">PTFE components we build</h2>
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
              <h2 className="section__title">PTFE Products we've built</h2>
            </div>
            <div className="gallery-2col">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt="PTFE product" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
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
              <p className="section__eyebrow">DESIGN REFERENCES</p>
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
            <h2>Need PTFE parts to spec?</h2>
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
