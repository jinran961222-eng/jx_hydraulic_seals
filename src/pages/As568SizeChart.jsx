import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import { as568Data } from '../data/as568Data.js'

const series = [
  ['Zero', '0.070', '± .003', '1/16', '1.78', '0.029" - 5.239"'],
  ['100', '0.103', '± .003', '3/32', '2.62', '0.049" - 9.737"'],
  ['200', '0.139', '± .004', '1/8', '3.53', '0.171" - 17.955"'],
  ['300', '0.210', '± .005', '3/16', '5.33', '0.412" - 25.940"'],
  ['400', '0.275', '± .006', '1/4', '6.99', '1.350" - 25.940"'],
  ['900', 'varies', 'varies', 'varies', '1.42 - 3.00', '0.185" - 2.337"'],
]

const related = [
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Standard O-Rings', to: '/products/o-rings' },
  { label: 'Metric tolerance calculator', to: '/products/standard-o-rings/metric-o-ring-tolerances-calculator' },
  { label: 'O-ring materials', to: '/elastomers' },
]

export default function As568SizeChart() {
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return as568Data
    return as568Data.filter((r) => r[0].toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">AS568 O-Ring Size Chart</span>
            </p>
            <p className="calc-hero__eyebrow">O-Ring Size Standard</p>
            <h1 className="calc-hero__title">AS568 O-Ring Size Chart</h1>
            <p className="calc-hero__desc">
              The complete AS568 dash-number series (-001 through -475) with inside diameters, cross-sections and
              tolerances — the US aerospace O-ring standard published by SAE. ARC molds every AS568 size to your
              compound, hardness and color.
            </p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/products/o-rings" className="btn btn--ghost">Standard O-Rings →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">SOURCING</p>
              <h2 className="section__title">Sourcing AS568 O-rings for your build</h2>
            </div>
            <p className="industry-col__p">
              If your drawing calls out an AS568 dash number, this chart gives you the exact inside diameter,
              cross-section and tolerance for every size in the series — so you can confirm the O-ring a groove needs
              before you request a quote. AS568 is the most widely specified O-ring standard on North American
              industrial and aerospace equipment, and getting the size and tolerance right is the difference between a
              seal that holds and an unplanned line-down.
            </p>
            <p className="industry-col__p">
              American Rubber Corp molds every AS568 size to your compound, hardness and color — not off a shelf.
              Whether you need a drop-in replacement in a better material (Viton/FKM, EPDM, silicone, nitrile, FFKM) or
              a high-volume production run, our engineers match the elastomer to your fluid, temperature and pressure
              and build to spec under ISO 9001:2015 and IATF 16949:2016.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">AS568 O-Ring Size Chart</h2>
            </div>
            <p className="industry-col__p">
              The American Rubber Corp Size Reference Chart covers the AS568 O-Ring Sizes published by the Society of
              Automotive Engineers (S.A.E.), and includes the Extended Sizes in the 400 Series. Dimensional tolerances
              for all AS568 o-rings offered by American Rubber Corp are in accordance with ISO 3601-1A. The purpose of
              this chart is to specify the inside diameters, cross-sections, tolerances, and size identification codes
              (dash numbers) for o-rings used in sealing applications and for straight thread tube fitting boss
              gaskets.
            </p>
            <p className="industry-col__p">
              <strong>Need AS568 O-Rings? Standard Sizes or Custom-Made.</strong> American Rubber Corp manufactures
              every AS568 dash size (-001 through -993) in Silicone, EPDM, FKM (Viton), Nitrile (NBR), HNBR, FFKM,
              Neoprene, and custom compounds. Standard sizes shipped fast; custom materials made to spec. ISO
              9001:2015 + IATF 16949 certified.
            </p>

            <h3 className="section__subtitle">AS568 Series at a Glance</h3>
            <div className="as568-glance">
              <div className="tol-table-wrap as568-glance__table">
                <table className="tol-table">
                  <thead>
                    <tr>
                      <th>Series</th>
                      <th>CS Inches</th>
                      <th>Tolerance</th>
                      <th>CS Frac.</th>
                      <th>CS MM</th>
                      <th>ID Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {series.map((s) => (
                      <tr key={s[0]}>
                        {s.map((c, i) => <td key={i}>{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="as568-glance__img">
                <img src="https://i.postimg.cc/LsVhjX4G/standard.jpg" alt="O-Ring Cross Section and Inside Diameter" />
              </div>
            </div>

            <div className="size-table-block">
              <input
                className="search-input size-search"
                type="text"
                placeholder="Search dash # (e.g. 214, 322)…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="tol-table-wrap">
              <table className="tol-table as568-table">
                <thead>
                  <tr>
                    <th>Dash #</th>
                    <th>CS Nominal</th>
                    <th>ID Nominal</th>
                    <th>OD Nominal</th>
                    <th>CS Inch</th>
                    <th>ID Inch</th>
                    <th>Tol Inch</th>
                    <th>CS mm</th>
                    <th>ID mm</th>
                    <th>Tol mm</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => <td key={i}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">HISTORY</p>
              <h2 className="section__title">History</h2>
            </div>
            <p className="industry-col__p">
              This size chart was first published in 1971 by the A-6c2 Seals Committee at SAE (Society of Automotive
              Engineers) as Aerospace Standard AS568. These standards were later republished in 1974 as AS568A, in 2001
              as AS568B, in 2008 as AS568C, and most recently in 2014 as AS568D. Any of these terms (AS568, AS568A,
              AS568B, AS568C, AS568D) may be used interchangeably when referring to an o-ring dash size.
            </p>
            <p className="industry-col__p">
              <strong>Looking for an AS568 Equivalent in Metric or Another Standard?</strong> Use our{' '}
              <Link to="/products/standard-o-rings/metric-o-ring-size-cross-reference-table" className="inline-link">
                Cross-Reference Table
              </Link>{' '}
              to find AS568 equivalents in ISO 3601, BS 1806, DIN 3771, JIS B 2401, SMS 1586, or NF T 47-501. Or
              request a quote and we’ll cross-reference for you.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MEASUREMENT</p>
              <h2 className="section__title">Actual vs. Nominal</h2>
            </div>
            <p className="industry-col__p">
              To assist our customers in selecting the correct size o-ring we have included 3 measurements for cross
              reference purposes; the “Nominal”, “Actual Inch”, and “Actual Metric” sizes. We are often asked, “What is
              the difference between Actual and Nominal sizes for o-rings?”. The Nominal (fractional) dimensions are in
              name only (often used when verbally describing the size). For more accurate measurements, please refer to
              the actual inch or millimeter sizes, as these are the true dimensions of the o-ring.
            </p>
            <h3 className="section__subtitle">O-Ring Formulas</h3>
            <p className="industry-col__p">
              To calculate an o-ring’s outside diameter (OD) you may use this formula: <strong>2(CS) + ID = OD</strong>
            </p>
            <p className="industry-col__p">
              Conversely, if you have the OD and need to find the ID use this formula:{' '}
              <strong>OD – 2(CS) = ID</strong>
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
            <h2>Need an AS568 size molded to your spec?</h2>
            <p className="cta-band__desc">
              Send your dash number, compound and hardness — our engineers confirm fit and quote to production.
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
