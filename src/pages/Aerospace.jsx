import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '6', label: 'product families' },
  { num: '5+', label: 'material options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Rubber-to-metal bonded seals, mounts & isolators',
  'Fuel- and hydraulic-fluid resistant compounds',
  'Extreme high/low temperature elastomers',
  'Vibration & shock isolation components',
  'Custom O-rings, gaskets, diaphragms & inflatable seals',
  'First-article inspection, PPAP & material certs on request',
  'ISO 9001:2015 & IATF 16949:2016 certified, Made in USA',
]

const products = [
  { name: 'Custom O-Rings',
    desc: 'AS568 and metric O-rings in fluorosilicone, FKM, FFKM and silicone for fuel and hydraulic sealing.' },
  { name: 'Molded & Metal-Bonded Parts',
    desc: 'Rubber-to-metal bonded mounts, isolators, bumpers and custom molded components.' },
  { name: 'Rubber Diaphragms',
    desc: 'Reinforced and PTFE-faced diaphragms for actuators, regulators and valves.' },
  { name: 'Inflatable Seals',
    desc: 'Pressure-actuated door, hatch and access-panel seals for contamination control.' },
  { name: 'PTFE Products',
    desc: 'Inert PTFE seals and components where elastomers reach their chemical or thermal limit.' },
  { name: 'Extruded Rubber',
    desc: 'Custom profiles, cords and environmental seals for enclosures and panels.' },
]

const materials = [
  { name: 'Fluorosilicone', desc: 'Fuel/oil resistance with wide temperature range' },
  { name: 'FKM / Viton', desc: 'High-heat and broad chemical/fuel resistance' },
  { name: 'Silicone', desc: 'Widest temperature flexibility for seals and gaskets' },
  { name: 'FFKM / Kalrez', desc: 'Near-universal chemical resistance for the harshest media' },
  { name: 'EPDM', desc: 'Phosphate-ester hydraulic fluid and weather resistance' },
]

const applications = [
  'Fuel-system O-rings and seals in fluorosilicone',
  'Actuator and regulator diaphragms surviving extreme temperature swings',
  'Rubber-to-metal bonded vibration isolators and engine mounts',
  'Access-panel, door and hatch environmental seals',
  'High- and low-temperature static and dynamic O-rings',
  'Inflatable seals for contamination-proof closures',
  'PTFE seals for aggressive-media and high-temperature service',
]

export default function Aerospace() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">INDUSTRIES WE SERVE</p>
              <h1 className="hero__title">Aerospace Rubber Components</h1>
              <p className="hero__desc">
                Custom seals, O-rings, diaphragms and metal-bonded rubber parts engineered for the
                temperature extremes, fuels and vibration of flight — built to your print under
                AS9100-minded, IATF 16949 quality, never pulled from a shelf.
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
              {/* Overview */}
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">OVERVIEW</p>
                  <h2 className="section__title">Engineered for the flight envelope</h2>
                </div>
                <p className="industry-col__p">
                  American Rubber Corp manufactures custom rubber components for aerospace and
                  defense platforms where a failed seal is not an option. We match the elastomer to
                  your fuel, hydraulic fluid, temperature range and vibration profile — from
                  fluorosilicone for fuel-system sealing to FFKM for the most aggressive chemistries
                  — and bond rubber to metal for actuator mounts, isolators and integral hardware.
                  Every part is molded, extruded or die-cut to your drawing and validated before
                  production, under ISO 9001:2015 and IATF 16949:2016.
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
                  Have a print or a spec for this industry?{' '}
                  <a href="#contact" className="inline-link">Request a quote →</a>
                </p>
              </div>

              {/* Capabilities */}
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
              <h2 className="section__title">Products we build for aerospace</h2>
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

        {/* Materials */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MATERIALS WE MOLD &amp; EXTRUDE FOR AEROSPACE</p>
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

        {/* Where it's used */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHERE IT’S USED</p>
              <h2 className="section__title">Typical aerospace applications</h2>
            </div>
            <ul className="app-list">
              {applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Need aerospace rubber parts to spec?</h2>
            <p className="cta-band__desc">
              Send your drawing, sample or service conditions — our engineers confirm the compound,
              tooling and a path to production.
            </p>
            <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
