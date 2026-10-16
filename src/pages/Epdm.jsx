import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const resistanceStandout = ['Heat', 'Ozone & weather', 'Acids', 'Water & steam']
const resistanceStrong = ['Low temperature', 'Solvents / ketones', 'Abrasion', 'Compression set']

const industries = ['Automotive', 'Rail & Transit', 'Renewable Energy']
const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certs']

const specs = [
  ['Continuous service temp', '-58°F to +302°F (-50°C to +150°C)'],
  ['Hardness', '40–90 Shore A'],
  ['Tensile strength', '500–2,500 psi'],
  ['Heat', 'Good–Excellent'],
  ['Low temperature', 'Good'],
  ['Ozone & weather', 'Excellent'],
  ['Oil & fuel', 'Poor'],
  ['Acids', 'Good–Excellent'],
  ['Solvents / ketones', 'Fair–Good'],
  ['Water & steam', 'Excellent'],
  ['Abrasion', 'Good'],
  ['Compression set', 'Good'],
]

const applications = [
  { industry: 'Automotive', items: ['Coolant/radiator connector seals, glycol brake-system seals, EGR & charge-air gaskets.'] },
  { industry: 'Rail & Transit', items: ['Window and door glazing seals, weatherstrip, HVAC gaskets.'] },
  { industry: 'Renewable Energy', items: ['Solar-panel frame and junction-box seals, roofing-membrane gaskets.'] },
  { industry: 'Water & Municipal', items: ['NSF-grade valve seats, pump and pipe-flange gaskets for potable water and steam.'] },
]

const chooseWhen = [
  'Outdoor, ozone or UV exposure is the driving requirement',
  'Hot water, steam, glycol or brake-fluid service',
  'Low-cost, long-life static seals with no oil present',
]

const alternative = [
  'Any petroleum oil, fuel or mineral-grease contact → NBR, HNBR or FKM',
  'Sustained temperatures above ~300°F → silicone, FKM or FFKM',
]

const references = [
  { label: 'Material Selection Guide', desc: 'Compare EPDM against other elastomers for your temperature and chemistry.', to: '/material-selection-guide' },
  { label: 'Chemical Compatibility', desc: 'Check EPDM resistance ratings across hundreds of media.', to: '/chemical-compatibility' },
  { label: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes for spec.', to: '/rma-tolerance-chart' },
]

export default function Epdm() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="calc-hero">
          <div className="container">
            <p className="calc-hero__eyebrow">SEALING MATERIAL</p>
            <h1 className="calc-hero__title">EPDM</h1>
            <p className="calc-hero__desc">
              Ethylene Propylene Diene Monomer — the go-to for weather, ozone, steam and brake-fluid service,
              but not petroleum oils. A saturated-backbone elastomer with outstanding ozone, UV, weather and
              polar-fluid resistance — with one hard limit: petroleum oils.
            </p>
            <p className="calc-hero__temp">Service temp <strong>-58°F to +302°F (-50°C to +150°C)</strong></p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/elastomers" className="btn btn--ghost">All Elastomers →</Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">OVERVIEW</p>
              <h2 className="section__title">What EPDM is best at</h2>
            </div>
            <p className="industry-col__p">
              EPDM offers excellent resistance to ozone, UV, weathering and polar fluids; peroxide-cured grades
              push heat and compression-set performance higher. Its defining limitation is near-total
              incompatibility with petroleum oils, fuels and mineral-oil greases.
            </p>
            <div className="section__subtitle">Standout resistance</div>
            <div className="materials-chip-grid">
              {resistanceStandout.map((r) => (
                <div key={r} className="material-chip"><strong>{r}</strong></div>
              ))}
            </div>
            <div className="section__subtitle">Also strong in</div>
            <div className="materials-chip-grid">
              {resistanceStrong.map((r) => (
                <div key={r} className="material-chip"><strong>{r}</strong></div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries + Approvals */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">INDUSTRIES WE SERVE</p>
            </div>
            <div className="industry-tags">
              {industries.map((i) => <span key={i} className="industry-tag">{i}</span>)}
            </div>
            <p className="industry-approvals__eyebrow">QUALITY &amp; APPROVALS — ON REQUEST</p>
            <div className="approval-tags">
              {approvals.map((a) => <span key={a} className="approval-tag">{a}</span>)}
            </div>
            <p className="industry-cta">
              Need EPDM parts to spec?{' '}
              <a href="#contact" className="inline-link">Request a quote →</a>
            </p>
          </div>
        </section>

        {/* Specs */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">TYPICAL PROPERTIES</p>
              <h2 className="section__title">EPDM performance at a glance</h2>
            </div>
            <div className="tol-table-wrap">
              <table className="tol-table tol-table--spec">
                <thead>
                  <tr><th>Property</th><th>Typical Value</th></tr>
                </thead>
                <tbody>
                  {specs.map((s) => (
                    <tr key={s[0]}><td>{s[0]}</td><td>{s[1]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="industry-col__p">
              Typical published ranges — final properties depend on the specific ARC compound, cure system and
              fillers. Request a compound-specific data sheet for design values.
            </p>
          </div>
        </section>

        {/* Where it's used */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHERE IT’S USED</p>
              <h2 className="section__title">Typical applications by industry</h2>
            </div>
            {applications.map((a) => (
              <div key={a.industry} style={{ marginBottom: 18 }}>
                <div className="section__subtitle">{a.industry}</div>
                <ul className="app-list">
                  {a.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Choose / Alternative */}
        <section className="section">
          <div className="container">
            <div className="industry-split">
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">GUIDANCE</p>
                  <h2 className="section__title">Choose EPDM when</h2>
                </div>
                <ul className="app-list">
                  {chooseWhen.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">GUIDANCE</p>
                  <h2 className="section__title">Consider an alternative when</h2>
                </div>
                <ul className="app-list">
                  {alternative.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design references */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">DESIGN REFERENCES</p>
              <h2 className="section__title">Design references for EPDM</h2>
            </div>
            <div className="tools__grid">
              {references.map((r) => (
                <Link key={r.label} to={r.to} className="tool-card">
                  <div className="tool-card__top">
                    <h3>{r.label}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Need EPDM parts to spec?</h2>
            <p className="cta-band__desc">
              Send your service conditions or drawing — our engineers will confirm the right EPDM compound
              and a path to production.
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
