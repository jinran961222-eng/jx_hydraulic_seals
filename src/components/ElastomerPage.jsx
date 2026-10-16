import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certs']

const references = [
  { label: 'Material Selection Guide', desc: 'Compare against other elastomers for your temperature and chemistry.', to: '/material-selection-guide' },
  { label: 'Chemical Compatibility', desc: 'Check resistance ratings across hundreds of media.', to: '/chemical-compatibility' },
  { label: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes for spec.', to: '/rma-tolerance-chart' },
]

export default function ElastomerPage({
  crumb, title, heroDesc, temp, overviewTitle, overviewPara,
  standout, alsoStrong, industries, specs, applications,
  chooseWhen, alternative, ctaTitle, ctaDesc, refTitle,
}) {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="calc-hero__eyebrow">SEALING MATERIAL</p>
            <h1 className="calc-hero__title">{title}</h1>
            <p className="calc-hero__desc">{heroDesc}</p>
            <p className="calc-hero__temp">Service temp <strong>{temp}</strong></p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/elastomers" className="btn btn--ghost">All Elastomers →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">OVERVIEW</p>
              <h2 className="section__title">{overviewTitle}</h2>
            </div>
            <p className="industry-col__p">{overviewPara}</p>
            <div className="section__subtitle">Standout resistance</div>
            <div className="materials-chip-grid">
              {standout.map((r) => <div key={r} className="material-chip"><strong>{r}</strong></div>)}
            </div>
            <div className="section__subtitle">Also strong in</div>
            <div className="materials-chip-grid">
              {alsoStrong.map((r) => <div key={r} className="material-chip"><strong>{r}</strong></div>)}
            </div>
          </div>
        </section>

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
              Need {crumb} parts to spec?{' '}
              <a href="#contact" className="inline-link">Request a quote →</a>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">TYPICAL PROPERTIES</p>
              <h2 className="section__title">{title} performance at a glance</h2>
            </div>
            <div className="tol-table-wrap">
              <table className="tol-table tol-table--spec">
                <thead><tr><th>Property</th><th>Typical Value</th></tr></thead>
                <tbody>
                  {specs.map((s) => <tr key={s[0]}><td>{s[0]}</td><td>{s[1]}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="industry-col__p">
              Typical published ranges — final properties depend on the specific ARC compound, cure system and
              fillers. Request a compound-specific data sheet for design values.
            </p>
          </div>
        </section>

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

        <section className="section">
          <div className="container">
            <div className="industry-split">
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">GUIDANCE</p>
                  <h2 className="section__title">Choose {crumb} when</h2>
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

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">DESIGN REFERENCES</p>
              <h2 className="section__title">{refTitle}</h2>
            </div>
            <div className="tools__grid">
              {references.map((r) => (
                <Link key={r.label} to={r.to} className="tool-card">
                  <div className="tool-card__top"><h3>{r.label}</h3><span className="tool-card__arrow">→</span></div>
                  <p>{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>{ctaTitle}</h2>
            <p className="cta-band__desc">{ctaDesc}</p>
            <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
