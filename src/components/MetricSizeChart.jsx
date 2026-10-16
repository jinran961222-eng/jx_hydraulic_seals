import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

function SizeTable({ cols, rows, searchPh }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) => r.some((c) => c.toLowerCase().includes(q)))
  }, [query, rows])
  return (
    <div className="chem-controls">
      <input
        className="search-input"
        type="text"
        placeholder={searchPh || 'Search sizes…'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="tol-table-wrap">
        <table className="tol-table">
          <thead>
            <tr>{cols.map((c) => <th key={c}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function MetricSizeChart({
  crumb, eyebrow, title, heroDesc, introTitle, introParas, chartTitle,
  cols, data, searchPh, tables, related, ctaTitle, ctaDesc,
}) {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">{crumb}</span>
            </p>
            <p className="calc-hero__eyebrow">{eyebrow}</p>
            <h1 className="calc-hero__title">{title}</h1>
            <p className="calc-hero__desc">{heroDesc}</p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/products/o-rings" className="btn btn--ghost">Standard O-Rings →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">{eyebrow}</p>
              <h2 className="section__title">{introTitle}</h2>
            </div>
            {introParas.map((p, i) => <p key={i} className="industry-col__p">{p}</p>)}
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">{chartTitle}</h2>
            </div>
            {tables ? (
              tables.map((t, i) => (
                <div key={i} style={{ marginBottom: i < tables.length - 1 ? '34px' : 0 }}>
                  <h3 className="section__subtitle">{t.title}</h3>
                  <SizeTable cols={t.cols} rows={t.rows} searchPh={searchPh} />
                </div>
              ))
            ) : (
              <SizeTable cols={cols} rows={data} searchPh={searchPh} />
            )}
          </div>
        </section>

        {related && (
          <section className="section">
            <div className="container">
              <div className="section__head"><p className="section__eyebrow">RELATED PRODUCTS &amp; MATERIALS</p></div>
              <div className="related-tags">
                {related.map((r) => (
                  <Link key={r.label} to={r.to} className="related-tag">{r.label}</Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
