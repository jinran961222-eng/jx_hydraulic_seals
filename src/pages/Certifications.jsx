import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const certs = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    meta: 'Cert No. 24RN08DK · Certified since 2024',
    badge: 'ISO',
  },
  {
    title: 'IATF 16949:2016',
    subtitle: 'Automotive Quality Management',
    meta: 'Cert No. UK-02-V-01760 · Certified since 2025',
    badge: 'IATF',
  },
]

export default function Certifications() {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">Certifications</span>
            </p>
            <p className="calc-hero__eyebrow">Certifications</p>
            <h1 className="calc-hero__title">Certified quality you can verify</h1>
            <p className="calc-hero__desc">
              Chinese Rubber Corp maintains ISO 9001:2015 and IATF 16949:2016 quality management systems. Our current
              certificates are shown below for verification.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="tools__grid">
              {certs.map((c) => (
                <div key={c.title} className="tool-card">
                  <div className="tool-card__top">
                    <h3>{c.title}</h3>
                    <span className="cert-badge">{c.badge}</span>
                  </div>
                  <p className="industry-col__p">{c.subtitle}</p>
                  <p className="cert-meta">{c.meta}</p>
                  <p className="cert-note">Viewing only</p>
                </div>
              ))}
            </div>
            <p className="industry-col__p">
              <strong>Certificates are provided for verification and are view-only.</strong> For a copy or
              supplier-qualification documents, please contact us.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">SUPPLIER QUALIFICATION</p>
              <h2 className="section__title">Need our certifications for supplier qualification?</h2>
            </div>
            <p className="industry-col__p">
              We&apos;ll provide the documentation your procurement process requires.
            </p>
            <p className="industry-cta">
              <a href="#contact" className="inline-link">Contact us →</a>
            </p>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Verify our quality systems</h2>
            <p className="cta-band__desc">
              Contact us for certificate copies or supplier-qualification documents.
            </p>
            <a href="#contact" className="btn btn--yellow">Contact Us →</a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
