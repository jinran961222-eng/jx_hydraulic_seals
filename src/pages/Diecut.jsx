import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '6', label: 'configurations' },
  { num: '6+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Oscillating-head CNC knife cutting for tooling-free custom shapes',
  'Steel-rule / clicker die cutting for higher-volume repeatable runs',
  'Drag-knife and router cutting for thicker or reinforced stock',
  'Any size, shape or thickness — with recesses, rebates and grooves',
  'Solid or sponge / closed-cell rubber substrates',
  'Fabric-reinforced constructions (polyester, nylon, Nomex, Dacron, Kevlar)',
  'PSA / adhesive backing for peel-and-stick mounting',
  'Design support from concept through final manufacturing run',
]

const products = [
  { name: 'Knife-Cut Flat Gaskets', desc: 'Oscillating/drag-knife cut gaskets for low-to-medium volume, no tooling cost.' },
  { name: 'Die-Cut Gaskets', desc: 'Steel-rule/clicker die cut gaskets for higher-volume repeatable parts.' },
  { name: 'Flat Rubber Gaskets', desc: 'General-purpose flat sealing gaskets in any elastomer and thickness.' },
  { name: 'Mixed Rings & Knife-Cut Gaskets', desc: 'Ring-and-gasket combinations cut to mixed profiles.' },
  { name: 'Custom Oscillating Knife-Cut Gaskets', desc: 'CNC oscillating-head cut for complex shapes and tooling-free prototyping.' },
  { name: 'Flat O-Rings', desc: 'Flat/washer-style O-ring gaskets cut to bore and OD spec.' },
]

const galleryImages = [
  'https://i.postimg.cc/Y0XW3r6M/arc-epdm-gaskets-seals.jpg',
  'https://i.postimg.cc/4Ndt3cG1/arc-precision-orings-static-seals.jpg',
  'https://i.postimg.cc/x1LdjjXy/diecut.jpg',
  'https://i.postimg.cc/tCxqDRN0/Flat-Rubber-Gaskets0422.jpg',
]

const materials = [
  { name: 'Silicone', desc: 'Wide temp, FDA/medical, weather/ozone' },
  { name: 'EPDM', desc: 'Water, steam, UV & ozone for HVAC' },
  { name: 'NBR / Nitrile', desc: 'Oil, fuel & hydraulic-fluid resistance' },
  { name: 'FKM / Viton', desc: 'High-temp & aggressive-chemical' },
  { name: 'Neoprene', desc: 'Balanced weather, oil & flame' },
  { name: 'SBR', desc: 'Cost-effective abrasion resistance' },
]

const industries = [
  'Aerospace', 'Marine', 'Power Generation', 'HVAC/R',
  'Bulk Material Handling', 'Chemical Manufacturing', 'Semiconductor', 'Automotive', 'Medical',
]

const applications = [
  'Flange and enclosure sealing gaskets for chemical-processing equipment',
  'Access-panel and hatch gaskets for marine vessels',
  'HVAC/R unit and ductwork sealing gaskets',
  'Semiconductor tool and cleanroom equipment gaskets',
  'Aerospace panel and housing gaskets in fluorosilicone',
  'Bulk-material handling chute and conveyor sealing gaskets',
  'Electrical enclosure and junction-box gaskets',
  'Custom flat O-rings and mixed-ring gaskets for pumps and valves',
]

const refTools = [
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
  { name: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes.' },
]

const inDepth = [
  {
    title: 'Custom Die Cut and Knife Cut Flat Gaskets',
    paragraphs: [
      'Chinese Rubber Corporation (ARC) is a leading, Made in China manufacturer of die cut gaskets and custom oscillating knife cut gaskets (flat gaskets) produced from both solid rubber and sponge rubber. As an engineering-led manufacturer with 20 years of experience, we work with you to design, prototype, and produce large production runs of custom-shaped die cut gaskets and flat O-rings, all made to your print. Our in-house capabilities let us cut gaskets from rubber sheet materials using an oscillating-head CNC cutter and router, die cutting (clicking), and drag-knife cutting, and we can mold flat gaskets instead when the shape and application call for it.',
    ],
  },
  {
    title: 'Why Choose ARC Die Cut Gaskets',
    paragraphs: [],
    bullets: [
      'Customizable: we produce flat rubber gaskets in any size, shape, or thickness to meet your exact specification.',
      'Precise: our gasket cutting process delivers precise cuts and tight tolerances.',
      'Durable: our flat gaskets are made from high-quality rubber materials that resist wear and tear.',
      'Versatile: our knife cut rubber gaskets serve a wide range of applications, including automotive, aerospace, industrial, and medical.',
    ],
  },
  {
    title: 'Knife Cut Gasket Capabilities',
    paragraphs: [
      'Gaskets produced on our CNC machine can include recesses, rebates, and grooves depending on the application, and the machine’s interchangeable tooling lets it cut a wide range of materials, from soft, open-cell sponge to hard, reinforced solid rubber. We can create each gasket from a CAD file or a technical drawing; once the machine is set up, it produces every gasket identically, ensuring consistency and uniformity in every batch. Our dedicated engineering team works closely with you from the initial design stage through the final manufacturing run to recommend the right gasket materials and process.',
    ],
  },
  {
    title: 'Elastomer Compounds and Reinforcement Fabrics',
    paragraphs: [
      'We manufacture flat rubber gaskets from a broad range of compounds and, where added strength is required, from reinforced rubber sheets.',
    ],
    bulletGroups: [
      {
        label: 'Elastomer compounds',
        items: [
          'Silicone',
          'Fluorosilicone',
          'EPDM',
          'Butyl',
          'Nitrile (Buna-N or NBR)',
          'Neoprene/Chloroprene',
          'SBR',
          'FKM (a generic compound of Viton, a registered trademark of The Chemours Company)',
          'TPE',
          'PTFE (a generic compound of Teflon, a registered trademark of The Chemours Company)',
        ],
      },
      {
        label: 'Reinforcement fabrics',
        items: ['Cotton', 'Polyester', 'Nylon', 'Nomex', 'Dacron', 'Kevlar mesh'],
      },
    ],
  },
]

export default function Diecut() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Die-Cut Gaskets</h1>
              <p className="hero__desc">
                We engineer custom die-cut and knife-cut gaskets to your print, in any size, shape
                or thickness. Every gasket is made-to-spec from solid or sponge rubber and cut to
                tight tolerances — tooling-free prototypes through high-volume runs.
              </p>
              <div className="hero__badges">
                <span>Every part made to your spec</span>
                <span className="dot">·</span>
                <span>Made in China</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Capabilities */}
        <section className="section">
          <div className="container">
            <div className="industry-split">
              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">OVERVIEW</p>
                  <h2 className="section__title">Made to your print, cut to your tolerance</h2>
                </div>
                <p className="industry-col__p">
                  ARC manufactures flat sealing gaskets across a broad range of elastomers, cutting
                  them from sheet stock and roll goods rather than stocking a fixed catalog — so
                  parts match your exact profile, recesses, rebates and grooves. Cutting methods
                  span oscillating-head CNC knife, drag-knife, router and steel-rule/clicker die,
                  with molding used where geometry demands it. Reinforced and fabric-backed options
                  are available in polyester, nylon, Nomex, Dacron and Kevlar for higher strength
                  and dimensional stability. We support you from initial design through final
                  production run — which is why aerospace, semiconductor and heavy-industrial buyers
                  trust ARC for gaskets that seal where others leak.
                </p>
                <div className="stat-grid stat-grid--4">
                  {stats.map((s) => (
                    <div key={s.label} className="stat-box">
                      <span className="stat-box__num">{s.num}</span>
                      <span className="stat-box__label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p className="industry-approvals__eyebrow">QUALITY &amp; APPROVALS — ON REQUEST</p>
                <div className="approval-tags">
                  {approvals.map((a) => (
                    <span key={a} className="approval-tag">{a}</span>
                  ))}
                </div>
                <p className="industry-cta">
                  Have a print or a spec in mind?{' '}
                  <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="inline-link">Request a quote →</a>
                </p>
              </div>

              <div className="industry-col">
                <div className="section__head">
                  <p className="section__eyebrow">CAPABILITIES</p>
                </div>
                <ul className="cap-list">
                  {capabilities.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What we make */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHAT WE MAKE</p>
              <h2 className="section__title">Gasket types we cut</h2>
            </div>
            <div className="tools__grid">
              {products.map((p) => (
                <a key={p.name} href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="tool-card">
                  <div className="tool-card__top">
                    <h3>{p.name}</h3>
                    <span className="tool-card__arrow">→</span>
                  </div>
                  <p>{p.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">GALLERY</p>
              <h2 className="section__title">Die-Cut Gaskets we've built</h2>
            </div>
            <div className="gallery-4col">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt="Die-cut gasket" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MATERIALS WE MOLD &amp; EXTRUDE</p>
            </div>
            <div className="materials-chip-grid">
              {materials.map((m) => (
                <div key={m.name} className="material-chip">
                  <strong>{m.name}</strong>
                  <span>{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">INDUSTRIES WE SERVE</p>
            </div>
            <div className="industry-tags">
              {industries.map((ind) => (
                <span key={ind} className="industry-tag">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Where it's used */}
        <section className="section section--soft">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHERE IT’S USED</p>
              <h2 className="section__title">Typical applications</h2>
            </div>
            <ul className="app-list">
              {applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design references */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">DESIGN REFERENCES</p>
            </div>
            <div className="tools__grid">
              {refTools.map((t) => (
                <a key={t.name} href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="tool-card">
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

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Need die-cut gaskets to spec?</h2>
            <p className="cta-band__desc">
              Send your drawing, sample or service conditions — our engineers confirm the compound,
              tooling and a path to production.
            </p>
            <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>

        {/* In depth */}
        <section className="section about">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">IN DEPTH</p>
            </div>
            <div className="about__body">
              {inDepth.map((s) => (
                <div key={s.title} className="about__block">
                  <h3>{s.title}</h3>
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="about__bullets">
                      {s.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {s.bulletGroups && (
                    <>
                      {s.bulletGroups.map((g) => (
                        <div key={g.label} className="about__group">
                          <strong>{g.label}:</strong>
                          <ul className="about__bullets">
                            {g.items.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </>
                  )}
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
