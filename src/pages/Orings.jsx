import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '7', label: 'configurations' },
  { num: '6+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Full AS568 range plus ISO 3601, ISO 6149, BS 4518, DIN 3771, SMS 1586, NF T 47-501, JIS B 2401, generic metric',
  'Cross-sections from 0.5 mm up to ~7 cm industrial donut seals',
  'Custom tooling and precision compression/transfer molding to print',
  'Vacuum-environment manufacturing for void-free, high-integrity seals',
  'Cryogenic trimming for near-flashless finished rings',
  'Multiple color and Shore hardness options to spec',
  'Custom cross-section geometries beyond round (X, U, V, layered)',
  'Prototype through production with first-article inspection',
]

const products = [
  { name: 'Custom O-Rings', desc: 'Molded to your exact ID, cross-section, material and hardness — not a catalog part.' },
  { name: 'Standard O-Rings', desc: 'Full AS568 dash-number range and international metric sizes.' },
  { name: 'Cross & Quad Rings (X-rings)', desc: 'Four-lobe section for improved dynamic sealing and reduced twist vs. round.' },
  { name: 'Layered O-Rings', desc: 'Multi-layer / co-molded rings for specialized chemical or mechanical duty.' },
  { name: 'V-Seals & V-Rings', desc: 'Axial face seals for rotating shafts, excluding dirt and fluids.' },
  { name: 'Wiper Seals', desc: 'Scraper/wiper profiles that keep contaminants out of cylinder and rod assemblies.' },
  { name: 'U-Section Seals', desc: 'U-shaped cross-section for pressure-energized, single-direction sealing.' },
]

const galleryImages = [
  'https://i.postimg.cc/4Ndt3cG1/arc-precision-orings-static-seals.jpg',
  'https://i.postimg.cc/sD7Bx48Z/o-ring.jpg',
  'https://i.postimg.cc/vHf1TtjF/oring.jpg',
  'https://i.postimg.cc/P5HCw8sV/oring-1.jpg',
]

const sizeCharts = [
  'O-Ring Size Calculator',
  'AS568 O-Ring Size Chart',
  'Metric Size Cross-Reference',
  'ISO 3601 Metric',
  'ISO 6149 Metric',
  'BS 1806 Metric',
  'BS 4518 Metric',
  'DIN 3771 Metric',
  'JIS B 2401 Metric',
  'NF T 47-501 Metric',
  'SMS 1586 Metric',
  'Generic Metric O-Rings',
]

const materials = [
  { name: 'FKM / Viton', desc: 'High-temp & broad chemical/fuel resistance' },
  { name: 'EPDM', desc: 'Steam, water & weather/ozone sealing' },
  { name: 'Silicone', desc: 'Wide temp range, food/medical suitability' },
  { name: 'NBR / Nitrile', desc: 'Cost-effective oil, fuel & hydraulic sealing' },
  { name: 'FFKM / Kalrez', desc: 'Near-universal chemical resistance' },
  { name: 'Fluorosilicone', desc: 'Fuel/oil resistance with low-temp flex' },
]

const industries = [
  'Marine', 'Aerospace', 'Automotive', 'Pharmaceuticals',
  'Food & Dairy', 'Renewable Energy', 'Oil & Gas', 'Industrial OEM',
]

const applications = [
  'Hydraulic and pneumatic cylinder sealing in mobile and industrial equipment',
  'Aerospace fuel-system seals in fluorosilicone',
  'Food & dairy processing seals in FDA-compliant silicone/EPDM',
  'Pharmaceutical and clean-process sealing with high-purity elastomers',
  'Marine pump and valve seals resistant to salt water',
  'Large-diameter industrial donut seals up to ~7 cm cross-section',
  'Rotating-shaft exclusion using V-rings and wiper seals',
  'Renewable-energy actuator and enclosure sealing',
]

const refTools = [
  { name: 'AS568 O-Ring Size Chart', desc: 'ID, cross-section, tolerance and dash numbers.' },
  { name: 'Metric O-Ring Calculator', desc: 'Groove dimensions and tolerances, instantly.' },
  { name: 'Metric Size Cross-Reference', desc: 'Match metric sizes across international standards.' },
]

const inDepth = [
  {
    title: 'Custom and Standard O-Rings, Manufactured to Your Specification',
    paragraphs: [
      'Chinese Rubber Corp is a manufacturer of standard and custom rubber and TPV/TPE O-rings made to your specification. Rubber O-rings can be manufactured from a wide range of elastomers and thermoplastic vulcanizate materials to suit many applications, including marine, aerospace, automotive, and general industry, many of which expose our custom seals and O-rings to harsh environments and mission-critical conditions. Custom tooling, molding, extrusion, and the overall transformation of raw materials into a finished product are at the core of the manufacturing industry. When a new product is developed, O-rings are used to seal static and dynamic components of fabricating equipment, or within the final product itself. In the fabrication process, the seals used may need to withstand extreme pressures inside hydraulic presses and offer high chemical resistance to caustic fluids in pumps.',
    ],
  },
  {
    title: 'O-Ring Materials and Standards',
    paragraphs: [
      'The international standard ISO 3601 provides a comprehensive list of standard O-rings, and we manufacture these O-rings from a variety of materials to meet your requirements and industry standards. Typical elastomers and TPE that we use for O-rings include Silicone, Fluorosilicone, EPDM, FKM, Neoprene, Nitrile (Buna-N), NBR, HNBR, Santoprene, and many more standard and custom-formulated compounds. Because these O-rings are made to print rather than pulled from stock, we can match the compound to your application, whether it faces hostile environments, extreme pressure, or aggressive chemicals.',
    ],
  },
  {
    title: 'Shrinkage Compensation and Material-Specific Tooling',
    paragraphs: [
      'Each elastomer material shrinks at a different rate during manufacturing, so the tooling used to produce an ISO 3601 Nitrile-70 O-ring is not suitable for producing an O-ring in a different material. For example, most Nitrile-70 compounds shrink about 1.8 percent, while most of our silicones shrink 3 to 4 percent during the manufacturing process. To account for this, we maintain custom-sized O-ring tools, dies, and molds for each elastomer material, allowing for shrinkage compensation. This method lets us consistently deliver the best-quality O-rings to our customers, matched precisely to the specified material and dimensions.',
    ],
  },
  {
    title: 'Custom O-Ring Specification and Support',
    paragraphs: [
      'We manufacture many types of custom O-rings from a wide range of materials, and the right choice depends on the size, material, and application. With dozens of specifically designed O-rings available, identifying the best option for a given machine can be difficult. Our engineering-led team is always available to help you choose the correct style, material, and size, for everything from commercial machinery to hobby car building, so you can be confident the O-ring you specify will protect your components and extend the life of your equipment.',
    ],
  },
]

export default function Orings() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Rubber O-Rings</h1>
              <p className="hero__desc">
                For 20 years we’ve molded O-rings to your exact spec — not off a shelf, but to your
                print. From 0.5 mm cross-sections to 7 cm industrial donut seals, near-flashless
                and Made in China, backed by free AS568 and metric reference tools.
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
                  <h2 className="section__title">Every standard, plus the ones beyond round</h2>
                </div>
                <p className="industry-col__p">
                  ARC manufactures custom and standard O-rings across the full AS568 range and every
                  major metric standard, molded to your material, hardness, color and tolerance. Our
                  custom tooling, vacuum-environment molding and cryogenic trimming produce
                  near-flashless rings with tight, repeatable cross-sections. We engineer beyond the
                  round ring — cross/quad rings, layered rings, V-seals, wiper seals and U-section
                  profiles — for the sealing geometry your application actually needs. Made-to-print,
                  Made in China, engineering-led from RFQ to first article.
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
              <h2 className="section__title">O-rings and profile seals we build</h2>
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
              <h2 className="section__title">Rubber O-Rings we've built</h2>
            </div>
            <div className="gallery-4col">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt="O-ring" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">O-Ring size charts &amp; standards</h2>
            </div>
            <p className="industry-col__p">
              Free, ungated O-ring size charts and a tolerance calculator — AS568 and every major
              metric standard. Building to standard sizes? See{' '}
              <a href="#contact" className="inline-link">Standard O-Rings</a>.
            </p>
            <div className="charts__grid">
              {sizeCharts.map((c) => (
                <a key={c} href="#contact" className="chart-link">
                  {c} <span className="arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="section">
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
        <section className="section section--soft">
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
        <section className="section">
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

        {/* Reference tools */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">O-RING REFERENCE TOOLS (FREE)</p>
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
            <h2>Need O-rings to spec?</h2>
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
