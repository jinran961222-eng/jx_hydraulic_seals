import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const sizes = [
  ['10 mm', '22 mm', '7 mm', '10 x 22 x 7'],
  ['12 mm', '24 mm', '7 mm', '12 x 24 x 7'],
  ['15 mm', '30 mm', '7 mm', '15 x 30 x 7'],
  ['17 mm', '30 mm', '7 mm', '17 x 30 x 7'],
  ['20 mm', '35 mm', '7 mm', '20 x 35 x 7'],
  ['22 mm', '40 mm', '7 mm', '22 x 40 x 7'],
  ['25 mm', '40 mm', '7 mm', '25 x 40 x 7'],
  ['28 mm', '47 mm', '7 mm', '28 x 47 x 7'],
  ['30 mm', '47 mm', '7 mm', '30 x 47 x 7'],
  ['32 mm', '52 mm', '8 mm', '32 x 52 x 8'],
  ['35 mm', '52 mm', '8 mm', '35 x 52 x 8'],
  ['38 mm', '58 mm', '8 mm', '38 x 58 x 8'],
  ['40 mm', '55 mm', '8 mm', '40 x 55 x 8'],
  ['42 mm', '62 mm', '8 mm', '42 x 62 x 8'],
  ['45 mm', '62 mm', '8 mm', '45 x 62 x 8'],
  ['50 mm', '72 mm', '8 mm', '50 x 72 x 8'],
  ['55 mm', '80 mm', '8 mm', '55 x 80 x 8'],
  ['60 mm', '85 mm', '8 mm', '60 x 85 x 8'],
  ['65 mm', '90 mm', '10 mm', '65 x 90 x 10'],
  ['70 mm', '90 mm', '10 mm', '70 x 90 x 10'],
  ['75 mm', '100 mm', '10 mm', '75 x 100 x 10'],
  ['80 mm', '100 mm', '10 mm', '80 x 100 x 10'],
  ['85 mm', '110 mm', '12 mm', '85 x 110 x 12'],
  ['90 mm', '120 mm', '12 mm', '90 x 120 x 12'],
  ['100 mm', '125 mm', '12 mm', '100 x 125 x 12'],
]

const lips = [
  'Single lip (SC): one sealing lip, general-purpose rotary sealing.',
  'Single lip with dust lip (TC): primary lip plus a dust/exclusion lip for contaminated environments.',
  'Double lip: two sealing lips for bidirectional media or grease retention.',
  'Spring-loaded (garter spring): maintains lip load over temperature and wear.',
]

const materials = [
  'NBR (Nitrile): most common; petroleum oils/greases, -40 to +120 C.',
  'FKM (Viton): high temperature and aggressive fluids, up to +200 C.',
  'Silicone (VMQ): wide temperature range, dry-running friendliness.',
  'PTFE: low friction, chemical resistance, high-speed or dry applications.',
]

const related = [
  { label: 'Oil Seals', to: '/products/oil-seals' },
  { label: 'Seal materials', to: '/elastomers' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Rubber Diaphragms', to: '/products/rubber-diaphragms' },
]

export default function OilSealSizeChart() {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">Oil Seal Size Chart &amp; Cross-Reference</span>
            </p>
            <p className="calc-hero__eyebrow">Reference Chart</p>
            <h1 className="calc-hero__title">Oil Seal Size Chart &amp; Cross-Reference</h1>
            <p className="calc-hero__desc">
              Standard rotary and static oil seal dimensions cross-referenced by shaft diameter, bore diameter and
              width, so engineers can identify the right seal and confirm the sealing profile for a given housing. ARC
              molds these seals to spec in the elastomer your application requires.
            </p>
            <div className="calc-hero__actions">
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote</a>
              <Link to="/products/oil-seals" className="btn btn--ghost">Oil Seal Products →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">REFERENCE</p>
              <h2 className="section__title">Using the oil seal size chart to spec your part</h2>
            </div>
            <p className="industry-col__p">
              An oil seal size chart cross-references rotary and static oil seals by shaft diameter, bore diameter and
              width, so you can confirm the exact sealing profile a housing needs. Engineers and buyers searching for
              an oil seal cross-reference, rotary shaft seal dimensions or a radial lip seal size chart are usually
              matching a worn seal or a new bore to the right part number and section — verifying the outer diameter
              presses cleanly into the bore while the lip rides true on the shaft. Reading it correctly keeps the
              callout right on the drawing and quotable on the floor.
            </p>
            <p className="industry-col__p">
              ARC molds oil seals to your shaft, bore and width in the elastomer your service conditions demand —
              nitrile, Viton, silicone, EPDM and more — for temperature, pressure and media compatibility. Every seal
              is produced under our ISO 9001:2015 and IATF 16949:2016 quality systems. Send your dimensions or a
              drawing and our engineers confirm the profile, material and tooling, typically with a quote in one
              business day.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">INTRODUCTION</p>
              <h2 className="section__title">Rotary oil seals in metric and imperial</h2>
            </div>
            <p className="industry-col__p">
              <strong>Chinese Rubber Corp</strong> manufactures custom and standard rubber <strong>rotary oil
              seals</strong> (shaft seals) in metric and imperial sizes for automotive, industrial, hydraulic, and
              agricultural applications. Use the reference chart below to identify a standard size, then request a
              quote for your material and quantity.
            </p>
            <p className="industry-col__p">
              Need full specifications? Download our{' '}
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="inline-link">Rotary &amp; Oil Seals Catalog (PDF)</a>.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">SIZE CHART</p>
              <h2 className="section__title">Oil Seal Sizes &amp; Designations</h2>
            </div>
            <p className="industry-col__p">
              Standard single-lip and double-lip rotary shaft seal sizes to <strong>ISO 6194 / DIN 3760</strong>.
              Designation format is <em>Shaft ID × Bore OD × Width</em>. Do not see your size? We tool custom sizes —{' '}
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="inline-link">send us your spec</a>.
            </p>
            <div className="tol-table-wrap">
              <table className="tol-table">
                <thead>
                  <tr>
                    <th>Shaft dia. (ID)</th>
                    <th>Bore dia. (OD)</th>
                    <th>Width</th>
                    <th>Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s) => (
                    <tr key={s[3]}>
                      <td>{s[0]}</td>
                      <td>{s[1]}</td>
                      <td>{s[2]}</td>
                      <td><strong>{s[3]}</strong></td>
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
              <p className="section__eyebrow">TYPES &amp; MATERIALS</p>
              <h2 className="section__title">Oil Seal Types &amp; Materials</h2>
            </div>
            <p className="section__subtitle">Lip designations:</p>
            <ul className="app-list">
              {lips.map((l) => <li key={l}>{l}</li>)}
            </ul>
            <p className="section__subtitle">Materials:</p>
            <ul className="app-list">
              {materials.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">SELECTION</p>
              <h2 className="section__title">How to Choose the Right Oil Seal</h2>
            </div>
            <p className="industry-col__p">
              Match the seal to your <strong>shaft speed, temperature, pressure, and media</strong>. Start from the
              size (shaft/bore/width), then select the elastomer by fluid and temperature. For fluid compatibility see
              our <Link to="/chemical-compatibility" className="inline-link">chemical compatibility guide</Link>; for
              dimensional tolerances see the <Link to="/rma-tolerance-chart" className="inline-link">RMA tolerance
              chart</Link>. Still unsure? Our engineers will recommend a construction for your application.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">QUOTE</p>
              <h2 className="section__title">Request a Quote for Oil Seals</h2>
            </div>
            <p className="industry-col__p">
              Send your shaft/bore/width, material, and quantity, or upload a drawing, and we will quote your rotary
              oil seals. Use the form below or email us directly.
            </p>
            <p className="industry-cta">
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="inline-link">Request a quote →</a>
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
            <h2>Need rotary oil seals?</h2>
            <p className="cta-band__desc">
              Send your shaft/bore/width, material and quantity — we confirm the profile and a fast quote.
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
