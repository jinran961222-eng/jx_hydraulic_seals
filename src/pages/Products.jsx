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

        {/* More about our products */}
        <section className="section about" id="more-products">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">MORE ABOUT OUR PRODUCTS</p>
            </div>
            <div className="about__body">
              <div className="about__block">
                <h3 className="about__h2">
                  ARC: Your Source for Diverse, High-Performance Rubber Components and Extruded
                  Profiles
                </h3>
                <p>
                  With years of expertise in natural and synthetic elastomer compounds, American
                  Rubber Corp (ARC) manufactures a wide variety of rubber gaskets, seals, O-rings,
                  extruded rubber cords, extruded rubber profiles, custom profiles, hoses, grommets,
                  bellows, plugs, diaphragms, and caps. Every part is custom-to-spec and made to your
                  print, engineered and compounded in-house rather than pulled from stock. Our team
                  has been crafting superior rubber solutions for two decades, and our engineers work
                  with you from material selection through manufacturing to solve sealing problems
                  others can’t.
                </p>
              </div>

              <div className="about__block">
                <h3>The Elastomers We Work With</h3>
                <p>
                  We compound and manufacture components from a broad range of natural and synthetic
                  elastomers and thermoplastics, selecting the right material for your technical,
                  mechanical, electrical, and chemical requirements:
                </p>
                <ul className="about__list">
                  <li>EPDM</li>
                  <li>Silicone</li>
                  <li>Fluorosilicone</li>
                  <li>FKM (Viton)</li>
                  <li>NBR (Nitrile, Buna-N)</li>
                  <li>HNBR</li>
                  <li>Neoprene</li>
                  <li>SBR</li>
                  <li>Kalrez</li>
                  <li>Santoprene (TPV)</li>
                  <li>PTFE (Polytetrafluoroethylene), a synthetic fluoropolymer of tetrafluoroethylene</li>
                </ul>
              </div>

              <div className="about__block">
                <h3>Unmatched Variety, Customization, and Expertise</h3>
                <p>
                  Every application is different, which is why we work with you to customize parts
                  for your particular needs. Whether you require rubber gaskets, seals, O-rings,
                  cords, profiles, hoses, diaphragms, or specialized components, we design and
                  manufacture to your specification. Rubber diaphragms, for example, are versatile,
                  flexible sealing components used across many industries, and we produce them
                  alongside our full range of molded and extruded products.
                </p>
                <p>
                  Our expertise spans material selection, tooling and die design, molding, and
                  extrusion, backed by two decades of engineering-led manufacturing in the USA. We
                  support you with uncompromising standards for quality and precision, and our
                  engineers help you specify the compounds and properties that best fit your
                  performance needs and budget. As a custom manufacturer, we do not sell from stock
                  or online; instead, we build the exact rubber solution your application requires
                  and stand behind it as your trusted manufacturing partner.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
