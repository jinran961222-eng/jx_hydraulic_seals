import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const metric = [
  ['0', '10', '0.1', '0.13', '0.16', '0.2', '0.2', '0.32', '0.32', '0.8'],
  ['10', '16', '0.13', '0.16', '0.2', '0.25', '0.25', '0.4', '0.4', '0.9'],
  ['16', '25', '0.16', '0.2', '0.2', '0.32', '0.32', '0.5', '0.5', '1'],
  ['25', '40', '0.2', '0.25', '0.32', '0.4', '0.4', '0.63', '0.63', '1.12'],
  ['40', '63', '0.25', '0.32', '0.4', '0.5', '0.5', '0.8', '0.8', '1.25'],
  ['63', '100', '0.32', '0.4', '0.5', '0.63', '0.63', '1', '1.1', '1.4'],
  ['100', '160', '0.4', '0.5', '0.63', '0.8', '0.8', '1.25', '1.25', '1.6'],
  ['160 & over (Multiply by)', '', 'x .004', 'x .005', 'x .005', 'x .008', 'x .008', 'x .010', '', ''],
]

const inch = [
  ['0', '0.40', '0.004', '0.005', '0.006', '0.008', '0.008', '0.013', '0.013', '0.032'],
  ['0.40', '0.63', '0.005', '0.006', '0.008', '0.010', '0.010', '0.016', '0.016', '0.036'],
  ['0.63', '1.00', '0.006', '0.006', '0.010', '0.013', '0.013', '0.020', '0.020', '0.040'],
  ['1.00', '1.60', '0.008', '0.010', '0.013', '0.016', '0.016', '0.025', '0.025', '0.045'],
  ['1.60', '2.50', '0.010', '0.013', '0.016', '0.020', '0.020', '0.032', '0.032', '0.050'],
  ['2.50', '4.00', '0.013', '0.016', '0.020', '0.025', '0.025', '0.040', '0.040', '0.056'],
  ['4.00', '6.30', '0.016', '0.020', '0.025', '0.032', '0.032', '0.050', '0.050', '0.063'],
  ['6.30 & over (Multiply by)', '', 'x .004', 'x .005', 'x .005', 'x .008', 'x .008', 'x .010', '', ''],
]

const summary = [
  ['1', 'E1', 'L1', 'S1', 'EN1'],
  ['2', 'E2', 'L2', 'S2', 'EN2'],
  ['3', 'E3', 'L3', 'S3', 'EN3'],
]

const csMetric = [
  ['0', '1.5', '+0.15', '+0.25', '+0.4'],
  ['1.5', '2.5', '0.20', '0.35', '0.50'],
  ['2.5', '4', '0.25', '0.40', '0.70'],
  ['4', '6.3', '0.35', '0.50', '0.80'],
  ['6.3', '10', '0.40', '0.70', '1.00'],
  ['10', '16', '0.50', '0.80', '1.30'],
  ['16', '25', '0.70', '1.00', '1.60'],
  ['25', '40', '0.80', '1.30', '2.00'],
  ['40', '63', '1.00', '1.60', '2.50'],
  ['63', '100', '1.30', '2.00', '3.20'],
]

const csInch = [
  ['0', '0.06', '+0.006', '+0.010', '+0.015'],
  ['0.06', '0.10', '0.008', '0.014', '0.020'],
  ['0.10', '0.16', '0.010', '0.016', '0.027'],
  ['0.16', '0.25', '0.014', '0.020', '0.031'],
  ['0.25', '0.39', '0.016', '0.027', '0.039'],
  ['0.39', '0.63', '0.020', '0.031', '0.051'],
  ['0.63', '0.98', '0.027', '0.039', '0.063'],
  ['0.98', '1.57', '0.031', '0.051', '0.079'],
  ['1.57', '2.48', '0.039', '0.063', '0.098'],
  ['2.48', '3.94', '0.051', '0.079', '0.126'],
]

const cutMetric = [
  ['0', '40', '+0.7', '+0.04', '+1.6'],
  ['40', '63', '0.08', '1.3', '2.0'],
  ['63', '100', '1.0', '1.6', '2.5'],
  ['100', '160', '1.3', '2.0', '3.2'],
  ['160', '250', '1.6', '2.5', '4.0'],
  ['250', '400', '2.0', '3.2', '5.0'],
  ['400', '630', '2.5', '4.0', '6.3'],
  ['630', '1000', '3.2', '5.0', '10.0'],
  ['1000', '1600', '4.0', '6.3', '12.5'],
  ['1600', '2500', '5.0', '10.0', '16.0'],
  ['2500', '4000', '6.3', '12.5', '20.0'],
  ['4000', '', '0.16%', '0.32%', '0.50%'],
]

const cutInch = [
  ['1', '1.6', '+0.03', '+0.04', '+0.06'],
  ['1.6', '2.5', '0.03', '0.05', '0.08'],
  ['2.5', '4', '0.04', '0.06', '0.10'],
  ['4', '6.3', '0.05', '0.08', '0.13'],
  ['6.3', '10', '0.06', '0.10', '0.16'],
  ['10', '16', '0.8', '0.13', '0.20'],
  ['16', '25', '0.10', '0.16', '0.25'],
  ['25', '40', '0.13', '0.20', '0.40'],
  ['40', '63', '0.16', '0.25', '0.50'],
  ['63', '100', '0.20', '0.40', '0.63'],
  ['100', '160', '0.25', '0.50', '0.80'],
  ['160', '', '0.16%', '0.32%', '0.50%'],
]

const splicedMetric = [
  ['0', '250', '+0.2', '+3.2', '+7.1'],
  ['250', '400', '0.4', '7.1', '8.0'],
  ['400', '630', '0.5', '8.0', '9.0'],
  ['630', '1000', '0.63', '9.0', '10.0'],
  ['1000', '1600', '0.8', '10.0', '11.2'],
  ['1600', '2500', '1.0', '11.2', '12.3'],
  ['2500', 'over', '0.12.5', '12.5', '16.0'],
]

const splicedInch = [
  ['0', '10', '+.13', '+.25', '+.28'],
  ['10', '16', '.16', '.28', '.32'],
  ['16', '25', '.20', '.32', '.36'],
  ['25', '40', '.25', '.36', '.40'],
  ['40', '63', '.32', '.40', '.45'],
  ['63', '100', '.40', '.45', '.50'],
  ['100', 'over', '.50', '.50', '.53'],
]

const mandrelMetric = [
  ['0', '4', '+0.20', '+0.20', '+0.35'],
  ['4', '6.3', '0.20', '0.25', '0.40'],
  ['6.3', '10', '0.25', '0.35', '0.50'],
  ['10', '16', '0.35', '0.40', '0.70'],
  ['16', '25', '0.40', '0.50', '0.80'],
  ['25', '40', '0.50', '0.70', '1.00'],
  ['40', '63', '0.70', '0.80', '1.30'],
  ['63', '100', '0.80', '1.00', '1.60'],
  ['100', '160', '1.00', '1.30', '2.00'],
  ['160', '', '0.6%', '0.8%', '1.2%'],
]

const mandrelInch = [
  ['0', '0.16', '+0.008', '+0.08', '+0.014'],
  ['0.16', '0.25', '0.008', '0.010', '0.016'],
  ['0.25', '0.40', '0.010', '0.014', '0.020'],
  ['0.4', '0.63', '0.014', '0.016', '0.028'],
  ['0.63', '1.00', '0.016', '0.020', '0.032'],
  ['1.00', '1.6', '0.020', '0.028', '0.040'],
  ['1.6', '2.5', '0.028', '0.032', '0.051'],
  ['2.5', '4.00', '0.032', '0.040', '0.063'],
  ['4.00', '6.30', '0.040', '0.051', '0.079'],
  ['6.30', '', '0.6%', '0.8%', '1.2%'],
]

const related = [
  { label: 'Molded Parts', to: '/products/custom-rubber-molded-parts' },
  { label: 'Extruded Rubber', to: '/products/extruded-rubber' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Elastomer materials', to: '/elastomers' },
]

const twoColHeads = ['Fixed', 'Closure']

export default function RmaToleranceChart() {
  const renderClassTable = (rows, extra) => (
    <table className="tol-table">
      <thead>
        <tr>
          <th>Nominal Dimension</th>
          {['A1', 'A2', 'A3', 'A4'].map((c) => (
            <th key={c} colSpan={2}>{c}</th>
          ))}
        </tr>
        <tr>
          <th>above</th>
          <th>up to &amp; including</th>
          {[0, 1, 2, 3].map((i) => twoColHeads.map((h, j) => <th key={`${i}-${j}`}>{h}</th>))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx) => (
          <tr key={idx}>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
            {r.slice(2).map((v, i) => <td key={i}>{v}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )

  const renderCsTable = (rows) => (
    <table className="tol-table">
      <thead>
        <tr>
          <th>Above</th>
          <th>Up to and including</th>
          <th>1 - High Precision (E1)</th>
          <th>2 - Precision (E2)</th>
          <th>3 - Commercial (E3)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx) => (
          <tr key={idx}>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
            {r.slice(2).map((v, i) => <td key={i}>{v}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">RMA Rubber Tolerance Chart</span>
            </p>
            <p className="calc-hero__eyebrow">Reference Chart</p>
            <h1 className="calc-hero__title">RMA Rubber Tolerance Chart</h1>
            <p className="calc-hero__desc">
              The Rubber Manufacturers Association tolerance tables define the standard dimensional and geometric
              grades — A1/A2, B1/B2, C1/C2 and beyond — for molded, extruded and lathe-cut rubber parts. Engineers use
              it to set realistic tolerances that match a part&apos;s function and cost target; ARC molds and extrudes
              to every RMA class, or tighter where your application demands it.
            </p>
            <div className="calc-hero__actions">
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote</a>
              <Link to="/knowledge" className="btn btn--ghost">All Charts &amp; Tools →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">Using the RMA tolerance chart to spec your rubber part</h2>
            </div>
            <p className="industry-col__p">
              The RMA rubber tolerance chart is the industry reference engineers reach for when they need to assign
              realistic dimensional tolerances to a molded, extruded or lathe-cut part. Searching for the RMA standard
              molding tolerances, extrusion tolerance classes, or the A1/A2, B1/B2 and C1/C2 grades usually means you
              are pinning down a drawing callout — matching each dimension to the tightest class the part actually
              needs so it fits and functions without over-specifying and driving up cost. Reading the chart correctly
              keeps tolerances defensible on the print and quotable on the floor.
            </p>
            <p className="industry-col__p">
              ARC molds and extrudes to every RMA class, and tighter where the application demands it. Choose from a
              full range of elastomers — EPDM, silicone, nitrile, Viton, neoprene and more — compounded to your service
              conditions and produced under our ISO 9001:2015 and IATF 16949:2016 quality systems. Send a drawing or
              target dimensions and our engineers confirm the achievable grade, tooling and lead time, typically with
              a quote in one business day.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <p className="industry-col__p">
              <strong>Chinese Rubber Corp</strong> manufactures custom molded rubber parts to RMA Class A1, A2, A3,
              and A4 tolerances, and extruded products to RMA Class E1, E2, E3, E4. We work with your ASME Y14.5 GD&amp;T
              drawings. ISO 9001:2015 + IATF 16949 certified.
            </p>
            <div className="section__head">
              <p className="section__eyebrow">TOLERANCE TABLES</p>
              <h2 className="section__title">Metric Tolerances (mm)</h2>
            </div>
            {renderClassTable(metric)}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">TOLERANCE TABLES</p>
              <h2 className="section__title">Inch Tolerances (in)</h2>
            </div>
            {renderClassTable(inch)}
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">EXTRUDED PRODUCTS</p>
              <h2 className="section__title">Table 12 — Summary of RMA Drawing Designations, Extruded Rubber Products</h2>
            </div>
            <table className="tol-table">
              <thead>
                <tr>
                  <th>RMA Class</th>
                  <th>Dimensional Tolerance (Table 13)</th>
                  <th>Cut Length Tolerance (Table 16)</th>
                  <th>Spliced Length Tolerance (Table 16)</th>
                  <th>Mandrel Cured (Table 20)</th>
                </tr>
              </thead>
              <tbody>
                {summary.map((r, idx) => (
                  <tr key={idx}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                    <td>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">EXTRUDED PRODUCTS</p>
              <h2 className="section__title">Table 13 — Standard Cross-Sectional Tolerance (mm)</h2>
            </div>
            {renderCsTable(csMetric)}
            <div className="section__head" style={{ marginTop: 40 }}>
              <h2 className="section__title">Table 13 — Standard Cross-Sectional Tolerance (in)</h2>
            </div>
            {renderCsTable(csInch)}
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">EXTRUDED PRODUCTS</p>
              <h2 className="section__title">Table 16 — Cut Length Tolerance for Unspliced Extrusion (mm)</h2>
            </div>
            {renderCsTable(cutMetric)}
            <div className="section__head" style={{ marginTop: 40 }}>
              <h2 className="section__title">Table 16 — Cut Length Tolerance (in)</h2>
            </div>
            {renderCsTable(cutInch)}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">EXTRUDED PRODUCTS</p>
              <h2 className="section__title">Table 18 — Spliced Length Tolerances (mm)</h2>
            </div>
            {renderCsTable(splicedMetric)}
            <div className="section__head" style={{ marginTop: 40 }}>
              <h2 className="section__title">Table 18 — Spliced Length Tolerances (in)</h2>
            </div>
            {renderCsTable(splicedInch)}
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">EXTRUDED PRODUCTS</p>
              <h2 className="section__title">Table 20 — Tolerances on Internal Dimensions of Mandrel-Supported Extrusions (mm)</h2>
            </div>
            {renderCsTable(mandrelMetric)}
            <div className="section__head" style={{ marginTop: 40 }}>
              <h2 className="section__title">Table 20 — Mandrel-Supported Extrusions (in)</h2>
            </div>
            {renderCsTable(mandrelInch)}
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
            <h2>Need custom parts to specific RMA tolerances?</h2>
            <p className="cta-band__desc">
              Send your drawing or target dimensions — we confirm the achievable grade and a fast quote.
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
