import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '6', label: 'configurations' },
  { num: '5+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Elastomer vulcanized to a metal ring with spring-tensioned lip',
  'Single- and double-lip configurations for retention and exclusion',
  'Custom sizing to shaft diameter, bore and width per print',
  'Engineered to pressure, temperature, shaft speed and runout',
  'Fluid-compatibility matching across oils, fuels, grease and water',
  'Free Oil Seal Size Chart and cross-reference (ungated)',
  'ISO 9001:2015 & IATF 16949:2016 certified, Made in USA',
]

const products = [
  { name: 'Rotary Shaft Seals', desc: 'Spring-loaded lip seals for rotating shafts, retaining lubricant and excluding contaminants.' },
  { name: 'Fabric-Reinforced Oil Seals', desc: 'Fabric-reinforced construction for added strength in demanding service.' },
  { name: 'Heavy-Duty Oil Seals', desc: 'Rugged seals for high-load, harsh-environment machinery.' },
  { name: 'High-Pressure Oil Seals', desc: 'Engineered to hold under elevated system pressures.' },
  { name: 'Grease Seals', desc: 'Designed to retain grease and block dirt and moisture ingress.' },
  { name: 'Fluid Seals', desc: 'General sealing against oils, fuels, water and other fluids.' },
]

const gallerySlots = ['IMG-26', 'IMG-27', 'IMG-28']

const materials = [
  { name: 'NBR / Nitrile', desc: 'Most common lip — oil & fuel resistance' },
  { name: 'FKM / Viton', desc: 'High-temp & chemical for hot service' },
  { name: 'HNBR', desc: 'Enhanced heat & wear for rotary duty' },
  { name: 'Silicone', desc: 'Wide temp range for dry-running/cold' },
  { name: 'PTFE', desc: 'Widest temp & chemical range' },
]

const industries = [
  'Automotive', 'Oil & Gas', 'Agriculture', 'Heavy Equipment',
  'Industrial Machinery', 'Marine', 'Power Generation', 'Transportation & Logistics',
]

const applications = [
  'Rotary shaft seals retaining oil in engines and transmissions',
  'Heavy-duty seals on agricultural and construction equipment axles',
  'High-pressure seals in hydraulic pumps and motors',
  'Grease seals protecting wheel bearings from dirt and moisture',
  'PTFE seals for high-temperature or low-lubrication rotating shafts',
  'Fabric-reinforced seals in assembly-machine drive shafts',
  'Fluid seals blocking lubricant escape between moving and stationary parts',
  'Custom seals matched to non-standard shaft and bore dimensions',
]

const refTools = [
  { name: 'Oil Seal Size Chart', desc: 'Shaft/bore sizing and cross-reference for rotary and static seals.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
]

const inDepth = [
  {
    title: 'Understanding Oil Seals and Rotary Shaft Seals',
    paragraphs: [
      'Choosing the right rotary shaft seal or fabric oil seal to keep machinery free of unwanted leakage can be difficult, and this reference is meant to help you select the correct one for your application. Oil seals, also known as rotary shaft seals, fluid seals, or grease seals, play an important role in closing the gaps between the moving and stationary elements of mechanical equipment. By preventing lubricants from escaping, they protect critical machine components from damage caused by fluid leaks. Everything from car engines to assembly machines relies on oil seals to stay free of harmful interactions that can cause serious and expensive damage.',
    ],
  },
  {
    title: 'What Rotary Shaft Seals Are and How They Are Made',
    paragraphs: [
      'Rotary shaft seals, or oil seals, are placed between the moving and stationary parts of machinery so that contaminants, moisture, corrosive materials, and abrasives do not damage the components. They also prevent unwanted mixing of fluids, such as water and oil combining inside a machine. In manufacturing, an elastomer, most often nitrile, is vulcanized to a metal ring. This creates a stiffening effect and incorporates a specialized metal tension spring directly behind the sealing lip, keeping the oil seal firmly in place against the moving part.',
    ],
  },
  {
    title: 'Oil Seal Materials and Types We Manufacture',
    paragraphs: [
      'Many different materials are used to manufacture oil seals. As a custom-to-spec, made-to-print manufacturer, we produce rotary shaft seals, fabric-reinforced oil seals, heavy-duty oil seals, and high-pressure oil seals to meet demand across many sectors and application-specific requirements. For details on size, type, material, and application-specific rotary and oil seals, please refer to our Oil Seals catalog.',
    ],
  },
  {
    title: 'How to Choose the Right Oil Seal',
    paragraphs: [
      'Several key factors should be considered when selecting oil seals for a project, so that you protect your machinery from both immediate and long-term damage:',
    ],
    bullets: [
      'Temperature: Know the operating temperature so you can choose a seal that withstands the heat or cold. PTFE seals offer the widest temperature range, making them useful for machines exposed to extreme weather or elements.',
      'Speed and shaft conditions: Consider the shaft speed, the runout, the housing bore, and the type of oil being sealed to select a seal that will not suffer from abrasion or spiralling.',
      'Fluid compatibility: Various oil seals can withstand contact with oils, fuels, grease, water, and more. Knowing which fluid the rotary shaft seal will be in constant contact with helps ensure the longevity of the seal and the surrounding components.',
      'Lubrication: Seals perform best when lubricated, but some machines run through dry spells. In those cases a leather or PTFE seal is beneficial, as both can operate with less lubrication than other materials.',
    ],
    tail: 'With dozens of specifically designed oil seals available in a variety of materials, identifying the best choice for a given machine can be challenging. Our engineering-led team is always available to help you choose the correct style, material, and size of oil seal, for everything from commercial machinery to hobby car building, so you can be confident the rotary shaft seal you specify will protect your components and extend the life of your machines.',
  },
]

export default function Oilseals() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <ImageSlot tag="IMG-01" ratio="cover" />
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Oil Seals</h1>
              <p className="hero__desc">
                We manufacture custom oil seals engineered for the exact shaft, speed, pressure and
                fluid your equipment sees. When a shaft is leaking and stock seals won’t hold, our
                engineers solve it — built to your print, never pulled from a bin.
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
                  <h2 className="section__title">Keep lubricant in, contaminants out</h2>
                </div>
                <p className="industry-col__p">
                  ARC designs and molds custom oil seals — rotary shaft, fabric-reinforced,
                  heavy-duty, high-pressure, grease and fluid seals — matched to each application’s
                  pressure, temperature, shaft speed, runout and fluid compatibility. Our seals bond
                  an elastomer, most often nitrile, to a metal ring with a precision spring-tensioned
                  lip for reliable dynamic sealing, and we select the elastomer to the media — from
                  nitrile for general oils to PTFE for the widest temperature and chemical range.
                  Every seal is custom-to-spec and Made in USA under ISO 9001:2015 and IATF
                  16949:2016, backed by a free size chart, cross-reference guide and catalog.
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
              <h2 className="section__title">Oil seal types we build</h2>
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
              <h2 className="section__title">Oil Seals we’ve built</h2>
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

        {/* References & tools */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">OIL SEAL REFERENCES &amp; TOOLS</p>
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
            <h2>Need oil seals to spec?</h2>
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
                  {s.tail && <p>{s.tail}</p>}
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
