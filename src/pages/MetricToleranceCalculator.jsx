import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

// ISO 3601-1B cross-section tolerance bands (mm)
const CS_TOL = [
  [0, 2.62, 0.08],
  [2.63, 3.0, 0.09],
  [3.01, 4.5, 0.10],
  [4.51, 5.5, 0.13],
  [5.51, 7.5, 0.15],
  [7.51, 8.5, 0.18],
  [8.51, 10.0, 0.20],
]

// ISO 3601-1B inside-diameter tolerance bands (mm)
const ID_TOL = [
  [1.8, 2.79, 0.13], [2.8, 4.86, 0.14], [4.87, 6.69, 0.15], [6.7, 8.75, 0.16],
  [8.76, 10.59, 0.17], [10.5, 11.79, 0.18], [11.8, 14.99, 0.19], [15.0, 16.99, 0.20],
  [17.0, 18.99, 0.21], [19.0, 21.19, 0.22], [21.2, 22.39, 0.23], [22.4, 24.99, 0.24],
  [25.0, 25.79, 0.25], [25.8, 27.99, 0.26], [28.0, 29.99, 0.28], [30.0, 31.49, 0.29],
  [31.5, 32.49, 0.31], [32.5, 34.49, 0.32], [34.5, 35.49, 0.33], [35.5, 36.49, 0.34],
  [36.5, 37.49, 0.35], [37.5, 38.59, 0.36], [38.7, 39.99, 0.37], [40.0, 41.19, 0.38],
  [41.2, 42.49, 0.39], [42.5, 43.69, 0.40], [43.7, 44.99, 0.41], [45.0, 46.19, 0.42],
  [46.2, 47.49, 0.43], [47.5, 48.69, 0.44], [48.7, 49.99, 0.45], [50.0, 51.49, 0.46],
  [51.5, 52.99, 0.47], [53.0, 54.49, 0.48], [54.5, 55.99, 0.50], [56.0, 57.99, 0.51],
  [58.0, 59.99, 0.52], [60.0, 61.49, 0.54], [61.5, 62.99, 0.55], [63.0, 64.99, 0.58],
  [65.0, 68.99, 0.58], [67.0, 68.99, 0.59], [69.0, 70.99, 0.61], [71.0, 72.99, 0.63],
  [73.0, 74.99, 0.64], [75.0, 77.49, 0.66], [77.5, 79.99, 0.67], [80.0, 82.49, 0.69],
  [82.5, 84.99, 0.71], [85.0, 87.49, 0.73], [87.5, 89.99, 0.75], [90.0, 92.49, 0.77],
  [92.5, 94.99, 0.79], [95.0, 97.49, 0.81], [97.5, 99.99, 0.83], [100, 102.9, 0.84],
  [103, 105.9, 0.87], [106, 108.9, 0.89], [109, 111.9, 0.91], [112, 114.9, 0.93],
  [115, 117.9, 0.95], [118, 121.9, 0.97], [122, 124.9, 1.00], [125, 127.9, 1.03],
  [128, 131.9, 1.05], [132, 135.9, 1.08], [136, 139.9, 1.10], [140, 144.9, 1.13],
  [145, 149.9, 1.17], [150, 154.9, 1.20], [155, 159.9, 1.24], [160, 164.9, 1.27],
  [165, 169.9, 1.31], [170, 174.9, 1.34], [175, 179.9, 1.38], [180, 184.9, 1.41],
  [185, 189.9, 1.44], [190, 194.9, 1.48], [195, 199.9, 1.51], [200, 205.9, 1.55],
  [206, 211.9, 1.59], [212, 217.9, 1.63], [218, 223.9, 1.67], [224, 229.9, 1.71],
  [230, 235.9, 1.75], [236, 242.9, 1.79], [243, 249.9, 1.83], [250, 257.9, 1.88],
  [258, 264.9, 1.93], [265, 271.9, 1.98], [272, 279.9, 2.02], [280, 289.9, 2.08],
  [290, 299.9, 2.14], [300, 306.9, 2.21], [307, 314.9, 2.25], [315, 324.9, 2.30],
  [325, 334.9, 2.37], [335, 344.9, 2.43], [345, 354.9, 2.49], [355, 364.9, 2.56],
  [365, 374.9, 2.62], [375, 386.9, 2.68], [387, 399.9, 2.78], [400, 411.9, 2.84],
  [412, 424.9, 2.91], [425, 436.9, 2.99], [437, 449.9, 3.07], [450, 461.9, 3.15],
  [462, 474.9, 3.22], [475, 486.9, 3.30], [487, 499.9, 3.37], [500, 514.9, 3.45],
  [515, 529.9, 3.54], [530, 544.9, 3.63], [545, 559.9, 3.72], [560, 579.9, 3.81],
  [580, 599.9, 3.93], [600, 614.9, 4.05], [615, 629.9, 4.13], [630, 649.9, 4.22],
  [650, 669.9, 4.34], [670, 689.9, 4.46],
]
const ID_TOL_OVER = 690 // >= 690 => 0.65%

const fmt = (n) => (Number.isInteger(n) ? String(n) : parseFloat(n.toFixed(2)).toString())

function csTol(value) {
  for (const [lo, hi, tol] of CS_TOL) {
    if (value >= lo && value <= hi) return tol
  }
  return null
}

export default function MetricToleranceCalculator() {
  const [cs, setCs] = useState('')
  const [id, setId] = useState('')
  const [od, setOd] = useState('')
  const [csSearch, setCsSearch] = useState('')
  const [idSearch, setIdSearch] = useState('')

  const num = (s) => {
    const n = parseFloat(s)
    return Number.isFinite(n) ? n : null
  }
  const csN = num(cs)
  const idN = num(id)
  const odN = num(od)

  // Given any two known dimensions, compute and backfill the third
  useEffect(() => {
    const filled = [csN, idN, odN].filter((x) => x !== null).length
    if (filled !== 2) return
    if (csN !== null && idN !== null) setOd(fmt(idN + 2 * csN))
    else if (csN !== null && odN !== null) setId(fmt(odN - 2 * csN))
    else if (idN !== null && odN !== null) setCs(fmt((odN - idN) / 2))
  }, [cs, id, od])

  const csTolVal = csN !== null ? csTol(csN) : null

  const filteredCS = useMemo(
    () => CS_TOL.filter((r) => !csSearch || String(r[0]).includes(csSearch) || String(r[1]).includes(csSearch)),
    [csSearch],
  )
  const filteredID = useMemo(
    () =>
      ID_TOL.filter(
        (r) =>
          !idSearch ||
          String(r[0]).includes(idSearch) ||
          String(r[1]).includes(idSearch) ||
          (idSearch === '690' && r[1] === 689.9),
      ),
    [idSearch],
  )

  const inputs = [
    {
      label: 'Cross Section (mm)',
      value: cs,
      onChange: setCs,
      show: (v) => (result && v === 'cs' ? { tol: `± ${fmt(csTolVal)}`, low: fmt(result.cs - csTolVal), high: fmt(result.cs + csTolVal) } : null),
    },
    { label: 'Inside Diameter (mm)', value: id, onChange: setId },
    { label: 'Outside Diameter (mm)', value: od, onChange: setOd },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="calc-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>
              <span className="current">Metric O-Ring Tolerance Calculator</span>
            </nav>
            <p className="calc-hero__eyebrow">ENGINEERING CALCULATOR</p>
            <h1 className="calc-hero__title">Metric O-Ring Tolerance Calculator</h1>
            <p className="calc-hero__desc">
              Enter a metric O-ring&rsquo;s inside diameter and cross-section to get the ISO 3601
              tolerance band in seconds. Engineers use it to set groove and gland dimensions with
              confidence — ARC molds custom O-rings built to these tolerances.
            </p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote </a>
              <a href="#contact" className="btn btn--ghost">Custom O-Rings →</a>
            </div>
          </div>
        </section>

        {/* Intro copy */}
        <section className="section">
          <div className="container">
            <h2 className="section__title">Using the metric O-ring tolerance chart to spec your part</h2>
            <p className="body-copy">
              This metric O-ring tolerance calculator turns an inside diameter (ID) and cross-section
              (CS) into the correct ISO 3601 tolerance band, so you can size grooves and glands right
              the first time. Engineers and buyers searching for metric O-ring tolerances, ISO 3601-1
              dimensions, or O-ring groove design data use it to confirm the allowable ID and CS
              deviation before releasing a drawing or requesting a quote — avoiding leak paths,
              over-compression, and costly rework on the seal.
            </p>
            <p className="body-copy">
              ARC molds custom O-rings held to these ISO 3601 bands in the compound your application
              demands — NBR, FKM/Viton, EPDM, silicone, HNBR and more — for the temperature, media
              and pressure you&rsquo;re sealing against. As a US manufacturer with 20 years of custom
              rubber experience and ISO 9001:2015 and IATF 16949:2016 quality systems, we take your
              dimensions and cross-section and come back fast with the confirmed tolerance, tooling
              path and a production quote.
            </p>
          </div>
        </section>

        {/* Oring Size Calculator */}
        <section className="section section--soft" id="calculator">
          <div className="container">
            <h2 className="section__title">Oring Size Calculator</h2>
            <p className="body-copy">
              To use this tool, simply enter 2 known dimensions (CS, ID, or OD). The other dimension
              will calculate and the associated tolerances will be shown below. Then, click the
              Global Size to find the closest standard size. Dimensional tolerances for all metric
              o-rings offered by American Rubber Corp are in accordance with ISO 3601-1B.
            </p>
            <p className="calc-note">
              NOTE: you can select your tolerance range (+/- %) when you request a quote. Our
              tolerances are only meant to serve as a guide. You should always select a size that
              you feel comfortable will work for your application.
            </p>

            <table className="calc-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Size</th>
                  <th>Tolerance</th>
                  <th>Low</th>
                  <th>High</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="calc-table__label">Cross Section (mm)</td>
                  <td><input type="number" step="any" value={cs} onChange={(e) => setCs(e.target.value)} placeholder="0" /></td>
                  {csTolVal != null ? (
                    <>
                      <td>± {fmt(csTolVal)}</td>
                      <td>{fmt(csN - csTolVal)}</td>
                      <td>{fmt(csN + csTolVal)}</td>
                    </>
                  ) : (
                    <>
                      <td className="calc-table__blank"></td>
                      <td className="calc-table__blank"></td>
                      <td className="calc-table__blank"></td>
                    </>
                  )}
                </tr>
                <tr>
                  <td className="calc-table__label">Inside Diameter (mm)</td>
                  <td><input type="number" step="any" value={id} onChange={(e) => setId(e.target.value)} placeholder="0" /></td>
                  <td className="calc-table__blank"></td>
                  <td className="calc-table__blank"></td>
                  <td className="calc-table__blank"></td>
                </tr>
                <tr>
                  <td className="calc-table__label">Outside Diameter (mm)</td>
                  <td><input type="number" step="any" value={od} onChange={(e) => setOd(e.target.value)} placeholder="0" /></td>
                  <td className="calc-table__blank"></td>
                  <td className="calc-table__blank"></td>
                  <td className="calc-table__blank"></td>
                </tr>
                <tr>
                  <td className="calc-table__label">Global Size</td>
                  <td colSpan="4" className="calc-table__global">
                    {csN !== null && idN !== null ? `${fmt(csN)}x${fmt(idN)}` : ''}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dimensional Tolerances */}
        <section className="section">
          <div className="container">
            <div className="tolerance-layout">
              <div>
                <div className="section__head">
                  <h2 className="section__title">Dimensional Tolerances of Metric O-Rings</h2>
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search:"
                    value={csSearch}
                    onChange={(e) => setCsSearch(e.target.value)}
                  />
                </div>
                <table className="tol-table">
                  <thead>
                    <tr><th>Cross Section (mm)</th><th>Tolerance (mm)</th></tr>
                  </thead>
                  <tbody>
                    {filteredCS.map((r) => (
                      <tr key={`${r[0]}-${r[1]}`}>
                        <td>{r[0] === 0 ? '≤ 2.62' : `${fmt(r[0])} – ${fmt(r[1])}`}</td>
                        <td>± {fmt(r[2])}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="oring-diagram">
                <img src="https://i.postimg.cc/LsVhjX4G/standard.jpg" alt="O-Ring Cross Section and Inside Diameter" className="oring-diagram__img" />
              </div>
            </div>

            <div className="tol-table-wrap">
              <input
                type="search"
                className="search-input"
                placeholder="Search:"
                value={idSearch}
                onChange={(e) => setIdSearch(e.target.value)}
              />
              <table className="tol-table">
                <thead>
                  <tr><th>I.D. (mm)</th><th>Tolerance (mm)</th></tr>
                </thead>
                <tbody>
                  {filteredID.map((r) => (
                    <tr key={`${r[0]}-${r[1]}`}>
                      <td>{fmt(r[0])} – {fmt(r[1])}</td>
                      <td>± {fmt(r[2])}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>≥ {ID_TOL_OVER}</td>
                    <td>± 0.65%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="section section--soft">
          <div className="container">
            <p className="section__eyebrow">RELATED PRODUCTS &amp; MATERIALS</p>
            <div className="related-tags">
              <a href="#contact" className="related-tag">Custom O-Rings</a>
              <a href="#contact" className="related-tag">Standard O-Rings</a>
              <a href="#contact" className="related-tag">AS568 Size Chart</a>
              <a href="#contact" className="related-tag">O-ring materials</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Need O-rings held to these tolerances?</h2>
            <p className="cta-band__desc">
              Send your drawing, sample or service conditions — our engineers confirm the compound,
              tooling and a path to production.
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
