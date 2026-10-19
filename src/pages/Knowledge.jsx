import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const sizeCharts = [
  'AS568 O-Ring Size Chart',
  'Metric Size Cross-Reference',
  'ISO 3601 Metric O-Rings',
  'ISO 6149 Metric O-Rings',
  'BS 1806 Metric Sizes',
  'BS 4518 Metric O-Rings',
  'DIN 3771 Metric O-Rings',
  'JIS B 2401 Metric O-Rings',
  'NF T 47-501 Metric O-Rings',
  'SMS 1586 Metric O-Rings',
  'Generic Metric O-Rings',
]

const guides = [
  { name: 'Material Selection Guide',
    desc: 'Choose the right elastomer for your temperature, chemistry and mechanical demands.' },
  { name: 'Chemical Compatibility',
    desc: 'Elastomer resistance ratings across hundreds of chemicals and media.' },
  { name: 'RMA Tolerance Chart',
    desc: 'Standard rubber manufacturing tolerance classes for molded and extruded parts.' },
  { name: 'Custom Molding Guide',
    desc: 'Processes, tolerances and design guidance for custom rubber molding.' },
  { name: 'Oil Seal Size Chart',
    desc: 'Shaft/bore sizing and cross-reference for rotary and static oil seals.' },
  { name: 'Diaphragm Design Guide',
    desc: 'Types, materials and design considerations for rubber diaphragms.' },
]

const catalogs = [
  { name: 'Pneumatic Seals Catalog', meta: '10-page PDF · opens in new tab' },
  { name: 'Rotary & Oil Seals Catalog', meta: '12-page PDF · opens in new tab' },
  { name: 'Company Brochure 2022', meta: '10-page PDF · opens in new tab' },
]

const brochureTags = [
  'Custom Rubber Extrusion', 'Rubber Molded Parts', 'Rubber O Rings',
  'Gaskets', 'Seals', 'PTFE Products',
]

const toolSections = [
  {
    title: 'Engineering Tools to Help You Specify the Right Part',
    paragraphs: [
      "ARC's knowledge resources are built to support engineers and buyers through the specification stage of a custom rubber component, before a single part is made to print. Rather than gating information, we make practical sizing, material, and compatibility references openly available so you can define the right seal or gasket for your application with confidence.",
    ],
  },
  {
    title: 'O-Ring Size Calculator',
    paragraphs: [
      'Our O-Ring Size Calculator helps you quickly and accurately determine the dimensions your application requires. Whether you are replacing an existing O-ring or specifying a new one, the tool guides you through inner diameter, outer diameter, and cross-sectional thickness. Enter your measurements and it returns precise sizing information to help ensure a proper fit.',
    ],
  },
  {
    title: 'Chemical Compatibility and Material Selection',
    paragraphs: [
      'Our Chemical Compatibility Table helps you choose the right material for a sealing solution by showing how various elastomers perform against a wide range of chemicals, supporting optimal performance and service life. Whether you are handling harsh chemicals or a demanding industrial application, it makes narrowing down a suitable compound straightforward. For deeper reference, you can also consult the RMA Tolerance Chart and the Material Selection Guide.',
    ],
  },
  {
    title: 'Catalogs, Brochures, and Technical Reading',
    paragraphs: [
      'Beyond the interactive tools, we provide reference material for common sealing categories, including rotary and oil seals and pneumatic seals, along with downloadable PDF brochures and technical blog articles. These resources round out the picture so you can move from concept to a well-specified custom part. When you are ready, reach out for a quote or for guidance from our team as your preferred rubber component manufacturer.',
    ],
  },
]

export default function Knowledge() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">KNOWLEDGE &amp; TOOLS</p>
              <h1 className="hero__title">Specs, charts and calculators for engineers</h1>
              <p className="hero__desc">
                The references our engineers use every day — O-ring size standards, an interactive
                calculator, tolerance and compatibility data, and design guides. Free to use, no
                gate.
              </p>
            </div>
          </div>
        </section>

        {/* Calculators & tools */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">CALCULATORS &amp; TOOLS</p>
              <h2 className="section__title">Size it in seconds</h2>
            </div>
            <div className="calc-card">
              <h3>Metric O-Ring Size Calculator</h3>
              <p>
                Interactive tool — enter a size and get metric O-ring groove dimensions and
                tolerances instantly.
              </p>
              <a href="#contact" className="product-card__link">
                Open calculator <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* O-Ring size charts & standards */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">O-RING SIZE CHARTS &amp; STANDARDS</p>
              <h2 className="section__title">Every standard, one place</h2>
            </div>
            <div className="charts__grid">
              {sizeCharts.map((c) => (
                <a key={c} href="#contact" className="chart-link">
                  {c} <span className="arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Guides & reference */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">GUIDES &amp; REFERENCE</p>
              <h2 className="section__title">Design and material references</h2>
            </div>
            <div className="tools__grid">
              {guides.map((g) => (
                <a key={g.name} href="#contact" className="tool-card">
                  <div className="tool-card__top">
                    <h3>{g.name}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{g.desc}</p>
                  <span className="tool-card__view">View</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Catalogs & downloads */}
        <section className="section section--soft" id="catalogs">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">CATALOGS &amp; DOWNLOADS</p>
              <h2 className="section__title">Free — no gate, no form</h2>
            </div>
            <div className="catalogs__grid">
              <div className="catalog-card">
                <h3>Pneumatic Seals Catalog</h3>
                <p className="catalog-card__meta">10-page PDF · opens in new tab</p>
                <a href="#contact" className="product-card__link">
                  View / download <span className="arrow">→</span>
                </a>
              </div>
              <div className="catalog-card">
                <h3>Rotary &amp; Oil Seals Catalog</h3>
                <p className="catalog-card__meta">12-page PDF · opens in new tab</p>
                <a href="#contact" className="product-card__link">
                  View / download <span className="arrow">→</span>
                </a>
              </div>
              <div className="catalog-card catalog-card--brochure">
                <div className="brochure-cover">
                  <div className="brochure-cover__title">CORPORATE<br />BROCHURE</div>
                  <ul className="brochure-cover__tags">
                    {brochureTags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="catalog-card__body">
                  <h3>Company Brochure 2022</h3>
                  <p className="catalog-card__meta">10-page PDF · opens in new tab</p>
                  <a href="#contact" className="product-card__link">
                    View / download <span className="arrow">→</span>
                  </a>
                </div>
              </div>
              <div className="catalog-card catalog-card--cert">
                <h3>Our certifications</h3>
                <p className="catalog-card__meta">
                  View our ISO 9001:2015 and IATF 16949:2016 certificates.
                </p>
                <a href="#contact" className="product-card__link">
                  View certificates <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Can’t find the spec you need?</h2>
            <p className="cta-band__desc">
              Our engineers will help you size, select and specify — send us the application.
            </p>
            <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>

        {/* About our tools */}
        <section className="section about">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">ABOUT OUR TOOLS</p>
            </div>
            <div className="about__body">
              {toolSections.map((s) => (
                <div key={s.title} className="about__block">
                  <h3>{s.title}</h3>
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
