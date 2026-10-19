import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const capabilities = [
  'Complete AS568 dash-number range (-001 through -475)',
  'Every major metric standard: ISO 3601, ISO 6149, DIN 3771, JIS B 2401, BS 1806, BS 4518, SMS 1586, NF T 47-501',
  'Molded to your compound, Shore hardness and color — not a bin part',
  'Free, ungated size charts plus a metric tolerance calculator for groove and gland dimensions',
]

export default function StandardOrings() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="calc-hero">
          <div className="container">
            <p className="calc-hero__eyebrow">PRODUCT FAMILY</p>
            <h1 className="calc-hero__title">Standard O-Rings</h1>
            <p className="calc-hero__lede">
              Standard-size O-rings across the full AS568 inch dash-number series and the
              international metric standard — AS568, ISO 3601, ISO 6149, DIN 3771, JIS B 2401,
              BS 1806, BS 4518, SMS 1586 and NF T 47-501 — molded in your compound, hardness and
              color — and chart plus a metric tolerance calculator for groove and gland dimensions.
            </p>
            <div className="calc-hero__badge">
              Every part <strong>made to your spec</strong> · Made in USA
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-left">
                <div className="section__head">
                  <p className="section__eyebrow">OVERVIEW</p>
                  <h2 className="section__title">Every AS568 dash number and metric standard</h2>
                </div>
                <p className="industry-col__p">
                  When your drawing calls out a standard O-ring size, ARC builds it to that
                  standard in the material your application actually needs — rather than selling a
                  fixed catalog of stock parts. We cover the complete AS568 inch dash-number series
                  (-001 through -475) and the full set of international metric standards, so a size
                  specified to ISO 3601, ISO 6149, DIN 3771, JIS B 2401, BS 1806, BS 4518, SMS 1586
                  or NF T 47-501 is molded to the correct cross-section and tolerance.
                </p>
                <p className="industry-col__p">
                  Every standard we build to has a free, ungated size chart below, plus a metric
                  O-ring tolerance calculator for groove and gland dimensions. Need a size no
                  standard table lists? That's a custom O-ring — and we build those too. All
                  standard and custom O-rings are made to spec. Made in USA. under ISO 9001:2015
                  and IATF 16949:2016 quality systems.
                </p>
              </div>
              <div className="overview-right">
                <div className="cap-card">
                  <h3 className="cap-card__title">CAPABILITIES</h3>
                  <ul className="cap-list">
                    {capabilities.map((c) => (
                      <li key={c}>
                        <span className="cap-check">✓</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Need standard O-rings to spec?</h2>
            <p className="cta-band__desc">
              Send your dash number, metric size or drawing — our engineers confirm the compound,
              hardness and a fast path to production.
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
