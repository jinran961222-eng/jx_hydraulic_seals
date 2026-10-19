import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '10', label: 'configurations' },
  { num: '6+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Three molding processes in-house: compression, transfer, injection',
  'In-house tooling & die shop — Wire EDM, Sinker EDM, CNC milling',
  'Three hydraulic presses plus injection molding machines',
  'High-volume capacity into the millions of parts per month',
  'Custom durometers, profiles and geometries to your print',
  'Compounds engineered for heat, abrasion, weather, fire and conductivity',
  'ISO 9001:2015 & IATF 16949:2016 certified, Made in USA',
]

const products = [
  { name: 'Bellows', desc: 'Convoluted molded boots that shield moving assemblies from dust, debris and contamination.' },
  { name: 'Grommets', desc: 'Edge-protection and pass-through components for cables, panels and wiring.' },
  { name: 'Seals & Gaskets', desc: 'Custom static and dynamic sealing components molded to any profile.' },
  { name: 'Expansion Joints', desc: 'Flexible connectors absorbing movement, misalignment and vibration in piping.' },
  { name: 'Anti-Vibration Mounts', desc: 'Molded isolators and mounts that dampen shock and vibration in machinery.' },
  { name: 'Rollers', desc: 'Rubber-covered and molded rollers for material handling and conveying.' },
  { name: 'Bushings', desc: 'Load-bearing molded bushings for vibration control and mechanical joints.' },
  { name: 'Washers', desc: 'Molded sealing and spacing washers in custom durometers and profiles.' },
  { name: 'Manhole & Manway Gaskets', desc: 'Large-format molded gaskets for tank, vessel and access-hatch sealing.' },
  { name: 'Die-Cut & Fabricated Parts', desc: 'Custom die-cut and fabricated rubber components for gaskets and seals.' },
]

const gallerySlots = ['IMG-41', 'IMG-42', 'IMG-43']

const materials = [
  { name: 'Silicone', desc: 'Wide temperature, weather & heat resistance' },
  { name: 'EPDM', desc: 'Weather, ozone, steam & water resistance' },
  { name: 'NBR / Nitrile', desc: 'Oil, fuel & abrasion resistance' },
  { name: 'FKM / Viton', desc: 'High-heat & chemical resistance' },
  { name: 'Neoprene', desc: 'Balanced weather, oil & flame' },
  { name: 'PTFE', desc: 'Chemical inertness & low friction' },
]

const industries = [
  'Aerospace', 'Agriculture', 'Oil & Gas', 'Marine',
  'Chemical Manufacturing', 'Renewable Power', 'Transportation & Logistics', 'Power Generation', 'Food & Beverage',
]

const applications = [
  'Convoluted protective bellows shielding actuator and linkage assemblies from contamination',
  'Anti-vibration engine and equipment mounts isolating shock in transportation platforms',
  'Manhole and manway gaskets sealing storage tanks and pressure vessels',
  'Expansion joints absorbing thermal movement in industrial piping runs',
  'Rubber-covered rollers for material-handling and processing lines',
  'Molded grommets protecting wiring pass-throughs in aerospace and ag equipment',
  'Custom bushings damping vibration in heavy-machinery joints',
  'High-volume molded O-rings and sealing washers for OEM assemblies',
]

const refTools = [
  { name: 'Custom Molding Guide', desc: 'Processes, tolerances and design guidance for molded parts.' },
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
]

const inDepth = [
  {
    title: 'Custom Rubber Molded Parts, Made to Your Print',
    paragraphs: [
      'American Rubber Corp is a leading manufacturer of custom molded rubber components, with in-house injection molding, transfer molding, and compression molding capabilities. Based on your elastomer compound and the geometry of the rubber component, we select the best molding method while keeping quality, precision, and competitive pricing front and center. Every part is molded to your requirements rather than pulled from a shelf, and our custom molded rubber components are compounded in-house to achieve the mechanical, electrical, and thermal properties your application demands, including weather resistance, abrasion resistance, fire resistance, conductivity, heat resistance, and insulation.',
      'As a full-service rubber manufacturing group, we help clients build rubber products and industrial systems using deep expertise across a wide range of elastomer compounds. Rather than stocking finished parts, we maintain one of the largest catalogs of molds and dies, covering standard and commonly used custom sizes, so we can accelerate tooling and fulfill rush orders. Provide a CAD drawing of your rubber part and we will custom-make it to print.',
    ],
  },
  {
    title: 'In-House Tooling, Die Design, and Production Capacity',
    paragraphs: [
      'Our in-house tooling and die-design shop is equipped with state-of-the-art Wire EDM, Sinker EDM, CNC milling, drill press, and other machines. Owning this tooling capability makes us self-sufficient and lets us accelerate tooling preparation for your manufacturing jobs, whether the project calls for a complex extrusion die or a multi-part mold for a complicated rubber component. For volume production, we run three hydraulic presses along with multiple injection molding machines, enabling mass production as large as a million parts per month, such as molded O-rings. We have proven expertise molding silicone, EPDM, FKM, Nitrile, PTFE, TPE, TPU, Neoprene, and Fluorosilicone, among others.',
    ],
  },
  {
    title: 'Commonly Used Elastomer Compounds',
    paragraphs: [
      'We select and compound the right material for your molded parts, drawing from a broad range of proven elastomers:',
    ],
    bullets: [
      'Silicone',
      'EPDM',
      'Butyl',
      'Nitrile (Buna-N or NBR)',
      'FKM (generic compound of Viton, a registered trademark of The Chemours Company)',
      'TPE and TPU',
      'PTFE (generic compound of Teflon, a registered trademark of The Chemours Company)',
      'Neoprene and Fluorosilicone',
    ],
    after: 'Nitrile is also known as Buna-N or NBR. FKM is a generic compound of Viton, a registered trademark of The Chemours Company, and PTFE is a generic compound of Teflon, a registered trademark of The Chemours Company. Whatever the type of custom rubber molded part or industry you serve, our engineers will help you choose the compound and molding process that meet your specification.',
  },
]

export default function Molded() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Rubber Molded Parts</h1>
              <p className="hero__desc">
                We mold custom rubber components to your exact print — no catalog, no compromises.
                Three molding processes and an in-house tooling shop under one roof let us build the
                parts other shops turn away.
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
                  <h2 className="section__title">Custom molded, built to your print</h2>
                </div>
                <p className="industry-col__p">
                  ARC manufactures a broad range of custom molded rubber components — bellows,
                  grommets, seals, gaskets, expansion joints, anti-vibration mounts, rollers,
                  bushings and washers — all produced to your specification by compression, transfer
                  and injection molding. Our in-house tooling and die shop (Wire EDM, Sinker EDM,
                  CNC milling) means we design and cut our own tooling, controlling quality from
                  print to part. We run three hydraulic presses plus injection machines with capacity
                  into the millions of parts per month, and compound each part for the exact
                  performance it needs — backed by ISO 9001:2015 and IATF 16949:2016 quality systems.
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
              <h2 className="section__title">Molded components we build</h2>
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
              <h2 className="section__title">Rubber Molded Parts we’ve built</h2>
            </div>
            <div className="gallery__grid">
              {gallerySlots.map((g) => (
                <ImageSlot key={g} tag={g} ratio="4/3" />
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
              <p className="section__eyebrow">DESIGN REFERENCES FOR MOLDED PARTS</p>
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
            <h2>Need molded parts to spec?</h2>
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
                  {s.bullets && (
                    <ul className="about__bullets">
                      {s.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {s.after && <p>{s.after}</p>}
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
