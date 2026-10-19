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
        {/* Hero */}
        <section className="calc-hero">
          <div className="container">
            <p className="calc-hero__eyebrow">SEALING MATERIAL</p>
            <h1 className="calc-hero__title">{title}</h1>
            <p className="calc-hero__lede">{heroDesc}</p>
            <p className="calc-hero__temp">
              Service temp <strong>{temp}</strong>
            </p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/elastomers" className="btn btn--ghost">All Elastomers →</Link>
            </div>
          </div>
        </section>

        {/* Overview - two column layout */}
        <section className="section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-left">
                <div className="section__head">
                  <p className="section__eyebrow">OVERVIEW</p>
                  <h2 className="section__title">{overviewTitle}</h2>
                </div>
                <p className="industry-col__p">{overviewPara}</p>
                <div className="section__subtitle">Standout resistance</div>
                <div className="materials-chip-grid">
                  {standout.map((r) => <div key={r} className="material-chip material-chip--good"><strong>{r}</strong></div>)}
                </div>
                <div className="section__subtitle">Also strong in</div>
                <div className="materials-chip-grid">
                  {alsoStrong.map((r) => <div key={r} className="material-chip material-chip--info"><strong>{r}</strong></div>)}
                </div>
                <div className="section__subtitle">Industries we serve</div>
                <div className="industry-tags">
                  {industries.map((i) => <span key={i} className="industry-tag">{i}</span>)}
                </div>
                <div className="section__subtitle">Quality & approvals — on request</div>
                <div className="approval-tags">
                  {approvals.map((a) => <span key={a} className="approval-tag">{a}</span>)}
                </div>
              </div>
              <div className="overview-right">
                <div className="spec-card">
                  {specs.map((s) => (
                    <div key={s[0]} className="spec-row">
                      <span className="spec-label">{s[0]}</span>
                      <span className="spec-value">{s[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where it's used - 4 cards row */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHERE IT'S USED</p>
              <h2 className="section__title">Typical applications by industry</h2>
            </div>
            <div className="apps-grid">
              {applications.map((a) => (
                <div key={a.industry} className="app-card">
                  <h4>{a.industry}</h4>
                  <p>{a.items[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose / Alternative - two columns with icons */}
        <section className="section">
          <div className="container">
            <div className="industry-split guidance-grid">
              <div className="industry-col">
                <h3 className="guidance-title">Choose {title} when</h3>
                <ul className="guidance-list guidance-list--check">
                  {chooseWhen.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div className="industry-col">
                <h3 className="guidance-title">Consider an alternative when</h3>
                <ul className="guidance-list guidance-list--cross">
                  {alternative.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design references - 3 cards row */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">DESIGN REFERENCES</p>
              <h2 className="section__title">{refTitle}</h2>
            </div>
            <div className="refs-grid">
              {references.map((r) => (
                <Link key={r.label} to={r.to} className="ref-card">
                  <div className="ref-card__top">
                    <h4>{r.label}</h4>
                    <span className="ref-card__arrow">→</span>
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
