import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '10', label: 'configurations' },
  { num: '5+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Full range: general-purpose (NR/SBR) through technical (Nitrile/EPDM/Butyl/Silicone)',
  'Supplied to your specified thickness, width and durometer',
  'Sheet and roll formats',
  'Fabric-reinforced and coated-fabric (insertion) constructions',
  'Specialty compounds: skirtboard, shot-blast, floating/flame, vacuum-seal',
  'Compounds fabricated to IS and BS standards where specified',
  'Abrasion-, chemical-, acid/alkali-, heat/steam- and ozone-resistant grades',
  'Free compound-selection guidance and care support (ungated)',
]

const products = [
  { name: 'Natural Rubber Sheet (NR)', desc: 'Flexible, shock-absorbent sheet resisting cut, tear, abrasion and salt.' },
  { name: 'SBR Rubber Sheet', desc: 'Economical styrene-butadiene sheet with abrasion, aging and wear resistance.' },
  { name: 'Neoprene Rubber Sheet', desc: 'Weather/oil/flame-resistant sheet fabricated to IS and BS grades.' },
  { name: 'Nitrile Rubber Sheet', desc: 'Oil-, fuel- and temperature-resistant sheet for industrial service.' },
  { name: 'EPDM Rubber Sheet', desc: 'Water, heat, steam, chemical, fire, weather, UV and ozone resistant.' },
  { name: 'Butyl Rubber Sheet', desc: 'Air-tight/vacuum-seal sheet resisting oil, ozone, chemicals and weathering.' },
  { name: 'Silicone Rubber Sheet', desc: 'For automotive, medical-device and implant-grade applications.' },
  { name: 'Skirtboard Sheet', desc: 'Abrasion/impact-resistant NR compound for conveyor skirting.' },
  { name: 'Shot-Blasting Sheet', desc: 'Blister-free sheet for shot-blasting/abrasive-blast enclosures.' },
  { name: 'Para Floating Sheet', desc: 'Highly flame-resistant sheet that withstands high pressure.' },
]

const gallerySlots = ['IMG-47', 'IMG-48', 'IMG-49']

const materials = [
  { name: 'SBR', desc: 'Low-cost abrasion & wear for long life' },
  { name: 'Neoprene', desc: 'Balanced weather, oil & flame' },
  { name: 'NBR / Nitrile', desc: 'Oil, fuel & petrol resistance' },
  { name: 'EPDM', desc: 'Water, steam, UV & ozone resistance' },
  { name: 'Silicone', desc: 'High-temp and medical/implant grade' },
]

const industries = [
  'Flooring', 'Marine', 'Automotive', 'Defence',
  'Hospitals / Medical', 'Bulk Material Handling', 'Chemical Processing', 'HVAC/R',
]

const applications = [
  'Conveyor skirtboard lining for bulk-material handling',
  'Blister-free liners for shot-blast/abrasive-blast cabinets',
  'Hospital flooring for labor, neonatal and post-operative rooms',
  'Vacuum-seal and air-tight sheet (butyl) for sealing applications',
  'Steam- and heat-service gasketing and lining (EPDM)',
  'Marine deck and anti-slip sheet',
  'Automotive and medical-device silicone sheet',
  'Flame-resistant floating rubber sheet for high-pressure service',
]

const refTools = [
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
  { name: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes.' },
]

const inDepth = [
  {
    title: 'Custom Rubber Sheets and Coated Fabrics for Industrial Use',
    paragraphs: [
      'American Rubber Corp is an engineering-led, Made in USA manufacturer of rubber sheets for industrial and general-purpose applications. With 20 years of experience, we produce rubber sheet in a range of grades to your specification, from general-purpose natural rubber to more technical grades such as Nitrile, EPDM, and Butyl rubber sheet, along with coated fabrics. Each grade is selected and produced to meet the mechanical, chemical, and environmental demands of your application.',
    ],
  },
  {
    title: 'Applications and Industries',
    paragraphs: [
      'Rubber sheet is one of the most widely used rubber products, valued for the sheathing and protective effect it provides across countless settings. One of its most common uses is in flooring: rubber flooring is in high demand because it resists oil, UV light, and oxidizing elements. Beyond flooring, rubber sheet serves automotive, defense, and marine applications, and it is used in hospitals for neonatal, labor, and post-operative rooms where a clean, resilient surface is essential.',
    ],
    bullets: [
      'Flooring, floor runners, and sheeting for buildings and agricultural use',
      'Automotive, defense, and marine applications',
      'Hospital and clinical environments, including neonatal and labor rooms',
    ],
  },
  {
    title: 'Maintenance of Rubber Sheet',
    paragraphs: [
      'Rubber sheet delivers a long service life when it is properly maintained through initial cleaning, regular upkeep, and application of an appropriate floor finish. Placing door mats at main entrances helps keep dirt off the sheet, and daily wet-vacuuming is recommended, since a wet vacuum effectively draws dirt particles out of the grooves of the sheet. Harsh chemicals should not be used on rubber sheet. In hospital settings where rubber sheet is used in labor rooms and for neonates, it should be washed under running water, treated with an antiseptic solution, hung until dry, then powdered and rolled for storage. Maintenance is straightforward but must be carried out on a regular basis to protect the material’s performance and longevity.',
    ],
  },
]

export default function RubberSheets() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Rubber Sheets &amp; Coated Fabrics</h1>
              <p className="hero__desc">
                We manufacture and supply rubber sheet for industrial and general-purpose use — from
                general-purpose natural rubber to technical grades like Nitrile, EPDM and Butyl —
                matched to your service conditions and supplied to your thickness, width and
                durometer.
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
                  <h2 className="section__title">The right compound for the job</h2>
                </div>
                <p className="industry-col__p">
                  ARC offers a full range of rubber sheet grades, spanning flexible shock-absorbing
                  natural rubber to specialized compounds for shot blasting, conveyor skirtboard,
                  floating/flame service and vacuum sealing. Sheet is produced to your grade,
                  thickness and format rather than sold as a fixed online catalog, and technical
                  grades are compounded for specific resistances — oil, ozone, steam, abrasion, acids
                  and alkalis. Fabric-reinforced and coated-fabric constructions add tensile strength
                  and dimensional stability for demanding applications. From flooring and marine to
                  defense, automotive and hospital environments, we help you select and manufacture
                  the right compound for the job.
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
              <h2 className="section__title">Sheet grades we supply</h2>
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
              <h2 className="section__title">Rubber Sheets &amp; Coated Fabrics we’ve built</h2>
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
            <h2>Need rubber sheet to spec?</h2>
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
