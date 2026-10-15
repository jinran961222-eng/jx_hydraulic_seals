import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const products = [
  { name: 'Rubber Molded Parts', img: 'IMG-14',
    desc: 'Grommets, bumpers, bonded and mil-spec parts — compression, transfer and injection molded to your drawing.' },
  { name: 'Rubber Diaphragms', img: 'IMG-15',
    desc: 'Rolling, flat, homogeneous and fabric-reinforced diaphragms for pumps, valves, actuators and regulators.' },
  { name: 'Oil Seals', img: 'IMG-16',
    desc: 'Custom and standard rotary and static shaft seals, engineered to your shaft, bore and media.' },
  { name: 'Rubber O-Rings', img: 'IMG-17',
    desc: 'AS568 and custom O-rings in any elastomer, including FFKM — sized and compounded to your service.' },
  { name: 'Extruded Rubber', img: 'IMG-18',
    desc: 'Profiles, cords, strips, U/D/P channels and edge trim, extruded to your section and tolerance.' },
  { name: 'PTFE Products', img: 'IMG-19',
    desc: 'PTFE-encapsulated O-rings, backup rings, seals and specialty low-friction components.' },
  { name: 'Inflatable Seals', img: 'IMG-20',
    desc: 'Pressure-actuated pneumatic seals for doors, hatches, cleanrooms and process equipment.' },
  { name: 'Die-Cut Gaskets', img: 'IMG-21',
    desc: 'Precision die-cut gaskets, washers and flat seals from sheet stock and coated fabrics.' },
  { name: 'Rubber Sheets & Coated Fabrics', img: 'IMG-22',
    desc: 'Sheet stock and rubber-coated fabrics in multiple compounds for gaskets, liners and barriers.' },
]

const tools = [
  { name: 'O-Ring Size Calculator',
    desc: 'Groove dimensions and tolerances for metric O-rings, instantly.' },
  { name: 'AS568 O-Ring Size Chart',
    desc: 'Standard inch O-ring sizes and cross-reference.' },
  { name: 'Custom Molding Guide',
    desc: 'Processes, tolerances and design guidance for molded parts.' },
  { name: 'Oil Seal Size Chart',
    desc: 'Shaft and bore sizing for rotary and static oil seals.' },
]

export default function Products() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <ImageSlot tag="IMG-01" ratio="cover" />
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">OUR PRODUCTS</p>
              <h1 className="hero__title">Everything you seal, from one source</h1>
              <p className="hero__desc">
                Nine product families, each custom-manufactured to your specification — prototype
                through production. Choose a family to explore, or send us your part.
              </p>
              <div className="hero__actions">
                <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Product families */}
        <section className="section">
          <div className="container">
            <div className="products-page__grid">
              {products.map((p) => (
                <article key={p.name} className="product-card product-card--lg">
                  <div className="product-card__media product-card__media--lg">
                    <ImageSlot tag={p.img} ratio="square" />
                  </div>
                  <div className="product-card__body">
                    <h2 className="product-card__name">{p.name}</h2>
                    <p className="product-card__desc">{p.desc}</p>
                    <a href="#contact" className="product-card__link">
                      Explore <span className="arrow">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering tools & references */}
        <section className="section section--soft" id="tools">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">ENGINEERING TOOLS &amp; REFERENCES</p>
            </div>
            <div className="tools__grid">
              {tools.map((t) => (
                <a key={t.name} href="#contact" className="tool-card">
                  <div className="tool-card__top">
                    <h3>{t.name}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Every part built to spec */}
        <section className="section spec-cta">
          <div className="container spec-cta__inner">
            <div>
              <h2>Every part is built to your spec</h2>
              <p>
                Nothing here ships from a shelf. Bring us a drawing, a sample, or a sealing problem
                — including one without an off-the-shelf answer — and our engineers will scope the
                compound, tooling and path to production.
              </p>
            </div>
            <div className="spec-cta__actions">
              <a href="#materials" className="btn btn--ghost btn--ghost-navy">Browse Materials</a>
              <a href="#contact" className="btn btn--ghost btn--ghost-navy">Chemical Compatibility</a>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="cta-band">
          <div className="container">
            <h2>Have a part or a problem in mind?</h2>
            <p className="cta-band__desc">
              Send your drawing or application — you’ll get a fast, engineered quote from a real
              rubber engineer.
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
