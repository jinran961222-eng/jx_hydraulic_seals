import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const types = [
  'Flat diaphragms: simple, low-stroke sealing and pressure sensing.',
  'Rolling (rolling-lobe) diaphragms: long stroke with low, consistent friction — the convolution rolls along the cylinder wall.',
  'Convoluted diaphragms: molded convolutions deliver greater stroke than a flat diaphragm at moderate pressure.',
  'Dished / preformed: shaped to a specific stroke and pressure profile.',
  'Fabric-reinforced vs. homogeneous: fabric reinforcement (nylon, polyester, aramid) adds burst strength for higher pressure; homogeneous (unsupported) diaphragms maximize flexibility at low pressure.',
]

const elastomers = [
  'NBR (Nitrile): fuels, oils, hydraulic fluids.',
  'EPDM: water, steam, brake fluid, weathering.',
  'FKM (Viton): aggressive chemicals and high temperature.',
  'Silicone (VMQ): medical/food contact, wide temperature range.',
  'Neoprene (CR): general purpose, weather and refrigerant resistance.',
]

const related = [
  { label: 'Rubber Diaphragms', to: '/products/rubber-diaphragms' },
  { label: 'Elastomer Materials', to: '/elastomers' },
  { label: 'Molded Parts', to: '/products/custom-rubber-molded-parts' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
]

export default function DiaphragmDesignGuide() {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">Rubber Diaphragm Design Guide</span>
            </p>
            <p className="calc-hero__eyebrow">Design Guide</p>
            <h1 className="calc-hero__title">Rubber Diaphragm Design Guide</h1>
            <p className="calc-hero__desc">
              A practical reference to rubber diaphragm types, elastomer materials and the key design considerations —
              stroke, pressure, fatigue life and fabric reinforcement. Engineers use it to specify flat, rolling or
              convoluted diaphragms for pumps, valves, actuators and regulators, and ARC molds each one to your exact
              spec.
            </p>
            <div className="calc-hero__actions">
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote</a>
              <Link to="/knowledge" className="btn btn--ghost">All Guides &amp; Charts →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">SOURCING</p>
              <h2 className="section__title">Sourcing a rubber diaphragm for your build</h2>
            </div>
            <p className="industry-col__p">
              This rubber diaphragm design guide walks engineers through the three main diaphragm types — flat, rolling
              and convoluted — and the elastomer materials, stroke, pressure range, fatigue life and fabric
              reinforcement that govern each one. If you are searching for how to design or spec a rubber diaphragm for
              a pump, valve, actuator, regulator or pressure switch, use it to match the profile and compound to your
              media, temperature and cycle-life targets before you request a part.
            </p>
            <p className="industry-col__p">
              ARC molds each diaphragm to your exact drawing — flat or rolling, with or without fabric reinforcement —
              in the elastomer your application calls for, from NBR and EPDM to silicone, FKM and food-grade compounds.
              With 20 years of US custom manufacturing under ISO 9001:2015 and IATF 16949:2016, we confirm the material,
              tooling and tolerances and turn your dimensions and pressure requirements into a fast quote.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">OVERVIEW</p>
              <h2 className="section__title">Rubber Diaphragms — Overview</h2>
            </div>
            <p className="industry-col__p">
              <strong>Chinese Rubber Corp</strong> designs and manufactures custom <strong>rubber diaphragms</strong>{' '}
              for pumps, valves, regulators, actuators, and pressure-sensing applications. This guide covers diaphragm
              types, materials, and the design factors — pressure, stroke, temperature, and media — that determine the
              right construction for your part.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">TYPES</p>
              <h2 className="section__title">Types of Diaphragms We Manufacture</h2>
            </div>
            <ul className="app-list">
              {types.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MATERIALS</p>
              <h2 className="section__title">Commonly Used Elastomers</h2>
            </div>
            <ul className="app-list">
              {elastomers.map((e) => <li key={e}>{e}</li>)}
            </ul>
            <p className="industry-col__p">
              Not sure which compound fits your media and temperature? See our{' '}
              <Link to="/chemical-compatibility" className="inline-link">chemical compatibility guide</Link> and{' '}
              <Link to="/material-selection-guide" className="inline-link">material selection guide</Link>, or send us
              your requirements.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">RELATED PRODUCTS &amp; MATERIALS</p>
            </div>
            <div className="related-tags">
              {related.map((r) => (
                <Link key={r.label} to={r.to} className="related-tag">{r.label}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Need a custom rubber diaphragm?</h2>
            <p className="cta-band__desc">
              Send your drawing, stroke and pressure requirements — our engineers confirm the right construction.
            </p>
            <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
