import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const processes = [
  'Compression molding: economical for larger parts and low-to-medium volumes; simplest tooling.',
  'Transfer molding: better for complex geometries and bonded inserts, with tighter tolerances than compression.',
  'Injection molding: highest volumes, tightest tolerances, and complex parts — higher tooling investment.',
]

const parts = [
  'O-rings, gaskets, and seals',
  'Bumpers, mounts, and vibration isolators',
  'Grommets, bushings, and bellows',
  'Diaphragms and custom-shaped components',
  'Rubber-to-metal and rubber-to-plastic bonded parts',
]

const compounds = ['Silicone', 'EPDM', 'Butyl', 'Nitrile*', 'FKM*', 'TPE', 'PTFE*']

const related = [
  { label: 'Molded Parts', to: '/products/custom-rubber-molded-parts' },
  { label: 'Rubber materials', to: '/elastomers' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Rubber Diaphragms', to: '/products/rubber-diaphragms' },
]

export default function CustomMoldingGuide() {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">Custom Rubber Molding Guide</span>
            </p>
            <p className="calc-hero__eyebrow">Design Guide</p>
            <h1 className="calc-hero__title">Custom Rubber Molding Guide</h1>
            <p className="calc-hero__desc">
              A practical reference to the three rubber molding processes — compression, transfer and injection — with
              the tolerances, flash, draft and design-for-manufacture guidance each one demands. Engineers use it to
              match part geometry and volume to the right process, then ARC molds it to your exact spec under ISO
              9001:2015 and IATF 16949:2016.
            </p>
            <div className="calc-hero__actions">
              <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote</a>
              <Link to="/knowledge" className="btn btn--ghost">All Guides &amp; Charts →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">PROCESS SELECTION</p>
              <h2 className="section__title">Choosing a rubber molding process for your custom part</h2>
            </div>
            <p className="industry-col__p">
              This custom rubber molding guide compares the three production processes engineers weigh when sourcing a
              molded elastomer part: compression molding, transfer molding and injection molding. Use it to match your
              part&apos;s geometry, wall thickness, annual volume and tolerance requirements to the right process, then
              check the practical limits on dimensional tolerance, flash, draft angles and design-for-manufacture (DFM)
              before you release a drawing. It&apos;s built for engineers and procurement teams searching for custom rubber
              molding, injection vs. compression molding or rubber part tolerances who need to spec a part correctly the
              first time.
            </p>
            <p className="industry-col__p">
              ARC molds each part to your exact print. We help you select the process and the elastomer — from EPDM,
              nitrile and silicone to FKM/Viton-class and specialty compounds — validate the design for manufacturability,
              and produce it under ISO 9001:2015 and IATF 16949:2016 quality systems. Send a drawing and target volume
              and our engineers return a fast, no-obligation quote with the recommended process and tolerances.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">OVERVIEW</p>
              <h2 className="section__title">Custom Rubber Molded Parts — Overview</h2>
            </div>
            <p className="industry-col__p">
              <strong>Chinese Rubber Corp</strong> manufactures <strong>custom molded rubber parts</strong> to your
              drawings and specifications using compression, transfer, and injection molding. This guide covers the
              molding processes, dimensional tolerances, and materials so you can specify a part that is both
              manufacturable and cost-effective.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MOLDING PROCESSES</p>
              <h2 className="section__title">Compression, transfer &amp; injection</h2>
            </div>
            <ul className="app-list">
              {processes.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="industry-col__p">
              Dimensional tolerances follow the RMA classes — see our{' '}
              <Link to="/rma-tolerance-chart" className="inline-link">RMA tolerance chart</Link> to specify the right
              class (A1, A2, A3) for your part.
            </p>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">PARTS WE MOLD</p>
              <h2 className="section__title">What we manufacture</h2>
            </div>
            <ul className="app-list">
              {parts.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">COMMONLY USED ELASTOMER COMPOUNDS</p>
            </div>
            <div className="materials-chip-grid">
              {compounds.map((c) => (
                <div key={c} className="material-chip">
                  <strong>{c}</strong>
                </div>
              ))}
            </div>
            <p className="industry-col__p">
              <strong>*</strong> Nitrile: Buna-N o NBR, <strong>FKM</strong>: Generic compound of Viton – a registered
              trademark of Chemours Company, <strong>PTFE</strong>: Generic compound of Teflon – a registered trademark
              of Chemours Company.
            </p>
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
            <h2>Need a custom molded part?</h2>
            <p className="cta-band__desc">
              Send your drawing and target volume — our engineers recommend the process and tolerances.
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
