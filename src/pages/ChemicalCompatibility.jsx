import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import { chemData, chemColumns, chemSections } from '../data/compatibilityData.js'

const related = [
  { label: 'Elastomer materials', to: '/elastomers' },
  { label: 'Material selection guide', to: '/material-selection-guide' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Oil Seals', to: '/products/oil-seals' },
]

function ratingClass(r) {
  if (r === 'A') return 'rating-a'
  if (r === 'B') return 'rating-b'
  if (r === 'C') return 'rating-c'
  if (r === 'D') return 'rating-d'
  return 'rating-na'
}

export default function ChemicalCompatibility() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return chemData.filter((row) => row[0].toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">Elastomer Chemical Compatibility Guide</span>
            </p>
            <p className="calc-hero__eyebrow">Chemical Resistance Guide</p>
            <h1 className="calc-hero__title">Elastomer Chemical Compatibility Guide</h1>
            <p className="calc-hero__desc">
              Resistance ratings for common seal elastomers — including NBR, FKM, EPDM, silicone and more — across
              hundreds of chemicals, fuels and process media. Engineers use it to match a compound to the fluids,
              temperatures and exposure a part will see, then ARC molds that compound to your exact spec.
            </p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/products/o-rings" className="btn btn--ghost">Custom O-Rings →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">Using the chemical compatibility chart to spec your seal</h2>
            </div>
            <p className="industry-col__p">
              This elastomer chemical resistance chart pairs common seal compounds — NBR (Buna), FKM (Viton-type),
              EPDM, silicone, HNBR, neoprene and more — against hundreds of chemicals, fuels, oils and process media.
              When engineers search for an o-ring chemical compatibility chart or a rubber material resistance guide,
              they use it the same way: find each fluid your part contacts, read the resistance rating for every
              candidate elastomer, then narrow to the compounds that hold up against your full media list, service
              temperature and exposure time. It is the fastest way to rule out a material that will swell, harden or
              degrade before you commit to tooling.
            </p>
            <p className="industry-col__p">
              Once you have a shortlist, ARC molds it to spec. We supply custom seals, o-rings and molded rubber parts
              in the compound and durometer your application needs, backed by ISO 9001:2015 and IATF 16949:2016 quality
              systems and 20 years of US manufacturing. Send your media, temperature range and drawing or dash number
              and our engineers confirm the compound, hardness and a fast quote to production.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MATERIAL SELECTION</p>
              <h2 className="section__title">Chemical Compatibility Guide for Material Selection</h2>
            </div>
            <p className="industry-col__p">
              Our engineers spec the right elastomer for your chemical environment — including temperatures,
              concentrations, and cycle requirements not captured in this reference table. ISO 9001:2015 + IATF 16949
              certified.
            </p>
            <p className="industry-cta">
              <a href="#contact" className="inline-link">Request a Quote — 1 Business Day Response</a>
            </p>

            <div className="chem-key">
              <span><b className="rating-a">A</b> Recommended</span>
              <span><b className="rating-b">B</b> Minor to Moderate Effect</span>
              <span><b className="rating-c">C</b> Moderate to Severe Effect</span>
              <span><b className="rating-d">D</b> Not Recommended</span>
              <span><b className="rating-na">*</b> Insufficient Data</span>
            </div>

            <div className="chem-controls">
              <input
                className="search-input"
                type="text"
                placeholder="Search chemical…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="chem-jump">
                {chemSections.map((s) => (
                  <a key={s.label} href={`#sec-${s.label}`}>{s.label}</a>
                ))}
              </div>
            </div>

            <div className="tol-table-wrap">
              <table className="tol-table chem-table">
                <thead>
                  <tr>
                    <th className="chem-name-col">Chemical</th>
                    {chemColumns.map((c) => <th key={c}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filtered
                    ? filtered.map((row) => (
                        <tr key={row[0]}>
                          <td className="chem-name-col">{row[0]}</td>
                          {row.slice(1).map((r, i) => <td key={i}><span className={`rating ${ratingClass(r)}`}>{r || '–'}</span></td>)}
                        </tr>
                      ))
                    : chemSections.map((s) => (
                        <FragmentRows key={s.label} sec={s} />
                      ))}
                </tbody>
              </table>
            </div>
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
            <h2>Need a compound matched to your media?</h2>
            <p className="cta-band__desc">
              Send your chemical list, temperature and exposure — our engineers confirm the right elastomer.
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

function FragmentRows({ sec }) {
  const rows = chemData.slice(sec.range[0], sec.range[1] + 1)
  return (
    <>
      <tr className="chem-sec-row" id={`sec-${sec.label}`}>
        <td colSpan={chemColumns.length + 1}>{sec.label}</td>
      </tr>
      {rows.map((row) => (
        <tr key={row[0]}>
          <td className="chem-name-col">{row[0]}</td>
          {row.slice(1).map((r, i) => <td key={i}><span className={`rating ${ratingClass(r)}`}>{r || '–'}</span></td>)}
        </tr>
      ))}
    </>
  )
}
