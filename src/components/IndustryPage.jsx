import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '6', label: 'product families' },
  { num: '5+', label: 'material options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

export default function IndustryPage({
  title, heroDesc, overviewTitle, overviewPara, capabilities,
  products, materials, applications, productsTitle, materialsEyebrow, applicationsTitle,
  ctaTitle, ctaDesc,
}) {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <ImageSlot tag="IMG-01" ratio="cover" />
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">INDUSTRIES WE SERVE</p>
              <h1 className="hero__title">{title}</h1>
              <p className="hero__desc">{heroDesc}</p>
              <div className="hero__badges">
                <span>Every part made to your spec</span>
                <span className="dot">·</span>
                <span>Made in USA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="industry-split">
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">OVERVIEW</p>
                  <h2 className="section__title">{overviewTitle}</h2>
                </div>
                <p className="industry-col__p">{overviewPara}</p>
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
                  {approvals.map((a) => <span key={a} className="approval-tag">{a}</span>)}
                </div>
                <p className="industry-cta">
                  Have a print or a spec for this industry?{' '}
                  <a href="#contact" className="inline-link">Request a quote →</a>
                </p>
              </div>

              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">CAPABILITIES</p>
                </div>
                <ul className="cap-list">
                  {capabilities.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHAT WE MAKE</p>
              <h2 className="section__title">{productsTitle}</h2>
            </div>
            <div className="tools__grid">
              {products.map((p) => (
                <Link key={p.name} to={p.to} className="tool-card">
                  <div className="tool-card__top">
                    <h3>{p.name}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">{materialsEyebrow}</p>
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

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHERE IT’S USED</p>
              <h2 className="section__title">{applicationsTitle}</h2>
            </div>
            <ul className="app-list">
              {applications.map((a) => <li key={a}>{a}</li>)}
            </ul>
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
