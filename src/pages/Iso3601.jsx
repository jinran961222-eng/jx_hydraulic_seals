import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import { iso3601Data } from '../data/iso3601Data.js'

const grades = [
  ['Grade N', 'The standard of acceptance for general-purpose O-rings.'],
  ['Grade S', 'Quality requirements for optimum performance industrial applications and aerospace applications.'],
  ['Grade CS', 'Special and critical sealing applications, such as certain aerospace applications and critical oxygen service applications.'],
]

const related = [
  { label: 'Standard O-Rings', to: '/products/o-rings' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Tolerance Calculator', to: '/products/standard-o-rings/metric-o-ring-tolerances-calculator' },
  { label: 'O-ring materials', to: '/elastomers' },
]

export default function Iso3601() {
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return iso3601Data
    return iso3601Data.filter((r) => r[0].toLowerCase().includes(q) || r[1].toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">ISO 3601 Metric O-Ring Sizes &amp; Tolerances</span>
            </p>
            <p className="calc-hero__eyebrow">O-Ring Size Standard</p>
            <h1 className="calc-hero__title">ISO 3601 Metric O-Ring Sizes &amp; Tolerances</h1>
            <p className="calc-hero__desc">
              The international O-ring standard: ISO 3601-1 defines inside diameters, cross-sections and dimensional
              tolerances (Class A mirrors AS568 inch sizes; Class B is true metric), while ISO 3601-3 sets the visual
              quality-acceptance grades. Engineers use it to spec a size and grade with confidence; ARC molds every ISO
              3601 size to your compound, hardness and grade.
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
              <p className="section__eyebrow">ISO 3601</p>
              <h2 className="section__title">Using the ISO 3601 chart to spec your O-ring</h2>
            </div>
            <p className="industry-col__p">
              ISO 3601 is the international O-ring size standard engineers reach for when a drawing calls out a metric
              O-ring by code rather than a raw dimension. Part 1 (ISO 3601-1) fixes the inside diameter, cross-section
              and dimensional tolerances — Class A sizes mirror the AS568 inch series, while Class B covers true metric
              sizes — and Part 3 (ISO 3601-3) defines the visual quality-acceptance grades (N, S and CS) for surface
              and molding defects. Read the chart to confirm the exact ID x CS, the tolerance class and the quality
              grade before you release the part, so the seal drops into your groove and passes inspection the first
              time.
            </p>
            <p className="industry-col__p">
              Once you have the size and grade, ARC molds it to your spec. Twenty years of US custom rubber
              manufacturing, ISO 9001:2015 and IATF 16949:2016 certification, and a full range of compounds — NBR,
              HNBR, FKM/Viton, EPDM, silicone and more — mean you pick the material and hardness for your temperature,
              pressure and chemical duty, and we hold the ISO 3601 dimensions and quality grade you need. Send a size
              code, cross-section or drawing and our engineers confirm material, tolerance class and grade with a fast
              quote.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">ISO 3601</p>
              <h2 className="section__title">Compliance</h2>
            </div>
            <p className="industry-col__p">
              American Rubber Corp is fully compliant to the dimension and tolerance standards spelled out in ISO
              3601-1 Class A for all standard series O-rings and Class B for all metric series O-rings. Subsequently,
              American Rubber Corp defines the quality acceptance criteria of all O-rings to be in accordance with ISO
              3601-3 Grade N which classifies surface imperfections and specifies maximum acceptable limits for these
              imperfections. This information can be viewed in PDF format here. Stricter tolerance and inspection
              requirements can be achieved upon customer request.
            </p>
            <h3 className="section__subtitle">ISO 3601-3: Quality Acceptance Criteria</h3>
            <p className="industry-col__p">
              ISO 3601-3 was originally developed for general-purpose O-rings, but over the years this standard has
              been revised and refined to include three grades (N, S, CS) of defects depending upon the application.
            </p>
            <div className="app-list">
              {grades.map((g) => (
                <div className="app-list__item" key={g[0]}>
                  <strong>{g[0]}</strong>
                  <p>{g[1]}</p>
                </div>
              ))}
            </div>
            <p className="industry-col__p">
              Examples of surface imperfections characterized by this standard include flash, offset, parting-line
              projection, back rind, excessive trimming, flow marks, non-fills, and indentations.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">ISO 3601 Metric O-Rings Size Chart</h2>
            </div>
            <p className="industry-col__p">
              Issued by the International Organization for Standardization, the ISO 3601 standard contains two groups
              of O-Rings, Class A and Class B. Class A corresponds to the American standard AS 568B in its current
              format (the 900 series tube fitting O-Rings are not included). The ISO 3601-1 Size Code for these O-Rings
              is the same as the AS 568 dash number. Class B allows production of O-Rings in technically acceptable
              and economical “metric” sizes, which can then fit into metric grooves. The first digit of the Size Code
              indicates the cross section group (A-E), while the last four digits indicate the O-Ring inside diameter
              rounded to one-tenth millimeter.
            </p>
            <p className="industry-col__p">
              For a complete listing of all metric o-ring sizes, visit our{' '}
              <Link to="/products/standard-o-rings/metric-o-ring-size-cross-reference-table" className="inline-link">
                Metric O-Ring Cross Reference Table
              </Link>.
            </p>

            <div className="chem-controls">
              <input
                className="search-input"
                type="text"
                placeholder="Search size or reference (e.g. 2.65, B0060)…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="tol-table-wrap">
              <table className="tol-table">
                <thead>
                  <tr>
                    <th>Global Part#</th>
                    <th>Reference</th>
                    <th>C/S (MM)</th>
                    <th>I.D. (MM)</th>
                    <th>C/S (Inch)</th>
                    <th>I.D. (Inch)</th>
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

        <section className="section section--soft">
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
            <h2>Need ISO 3601 O-rings in the right compound?</h2>
            <p className="cta-band__desc">
              Send your size code, cross-section and grade — our engineers confirm material and tolerance.
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
