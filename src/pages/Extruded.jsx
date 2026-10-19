import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '8', label: 'configurations' },
  { num: '6+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Custom profile design and tooling from your CAD (PDF, STEP, IGES, DWG)',
  'Solid and sponge (cellular) rubber extrusion',
  'Splicing and vulcanizing into continuous closed-loop gaskets',
  'Prototype through mid-volume production runs',
  'Wide profile library: D, T, L, U-channel, cord, hose and fully custom',
  'Cut-to-length, notching and fabrication of extruded lengths',
  'Material selection and durometer tuning to application',
  'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
]

const products = [
  { name: 'Custom Extruded Profiles', desc: 'Bespoke cross-sections extruded to your drawing.' },
  { name: 'Rubber Cords', desc: 'Solid round cord stock in custom diameters and materials.' },
  { name: 'Spliced & Vulcanized Gaskets', desc: 'Extruded profile joined into continuous closed-loop gaskets.' },
  { name: 'Door & Window Seals', desc: 'Weather and compression seals for openings.' },
  { name: 'U-Channels', desc: 'U-shaped edge-protection and sealing profiles.' },
  { name: 'D-Strips (D-Section)', desc: 'D-profile seals for low-pressure rotary shafts; an O-ring alternative.' },
  { name: 'Sponge Rubber Profiles', desc: 'Closed/open-cell sponge for low-closure-force sealing and cushioning.' },
  { name: 'T- & L-Seals', desc: 'T-section and L-section profiles for all-round and single-direction sealing.' },
]

const galleryImages = [
  'https://i.postimg.cc/wxFLHVCT/arc-extruded-profiles-grommets.jpg',
  'https://i.postimg.cc/Y0XW3r6M/arc-epdm-gaskets-seals.jpg',
  'https://i.postimg.cc/FKBFDY89/Rubber-Hose.webp',
  'https://i.postimg.cc/mgVg1XSt/Rubber-Extrusion-Profile.jpg',
  'https://i.postimg.cc/prvwZx2J/Spliced-Vulcanized-Gaskets.jpg',
]

const materials = [
  { name: 'EPDM', desc: 'Weather, ozone & water (door/window)' },
  { name: 'Silicone', desc: 'High/low temp and food-contact profiles' },
  { name: 'FKM / Viton', desc: 'Chemical & high-heat extrusions' },
  { name: 'NBR / Nitrile', desc: 'Oil- and fuel-resistant cords/profiles' },
  { name: 'Neoprene', desc: 'Weather- & refrigerant-resistant seals' },
  { name: 'TPV / Santoprene', desc: 'Recyclable thermoplastic auto seals' },
]

const industries = [
  'Automotive', 'Aerospace', 'Rail', 'Food & Beverage',
  'Telecom', 'Industrial OEM', 'Construction', 'Marine',
]

const applications = [
  'Automotive door and window weatherstrip seals in EPDM',
  'Rail enclosure and cabinet gaskets, spliced and vulcanized to size',
  'Food & beverage equipment door seals in FDA silicone',
  'Sponge profiles for low-closure-force cabinet and hatch sealing',
  'U-channel edge trim protecting sheet-metal panel edges',
  'Custom D-strip shaft seals in low-pressure rotary applications',
  'Telecom and industrial enclosure environmental sealing',
  'Continuous cord stock cut and joined for custom gaskets',
]

const refTools = [
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
  { name: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes.' },
]

const inDepth = [
  {
    title: 'Custom Extruded Rubber Profiles and Gaskets',
    paragraphs: [
      'Extruded rubber profiles play a crucial role in countless applications across a wide range of sectors. They are rubber components produced by forcing a heated, softened rubber compound through a shaped die, yielding long, continuous sections with a consistent cross-section. This process makes it possible to produce complex shapes with high precision and efficiency, which is what makes extruded rubber so valuable for industrial use. Because every application is different, Chinese Rubber Corp works with you to customize parts to your exact specification. As a Made in China, engineering-led manufacturer with 20 years of experience, we produce runs of extruded rubber parts that range from simple rubber tubing to complex extrusions, cut to length or supplied in continuous reels.',
    ],
  },
  {
    title: 'Types of Custom Extrusion',
    paragraphs: [
      'Whether your project calls for straightforward tubing or an intricate custom profile, we design and manufacture the extrusion to your print. Parts can be supplied cut to length for assembly or delivered in continuous reels for high-volume production, always made-to-spec rather than stocked.',
    ],
  },
  {
    title: 'The Right Materials for Your Extruded Rubber Products',
    paragraphs: [
      'Your choice of rubber compound has a major impact on the success of your parts. We work with a wide variety of materials to meet your temperature, weather, and technical specifications, and our engineers can review your application to recommend the compounds that best fit your performance needs and budget. Materials we extrude include:',
    ],
    bullets: [
      'Silicone (VMQ)',
      'EPDM (Ethylene Propylene Diene Monomer)',
      'Viton (FKM)',
      'Neoprene (Chloroprene)',
      'Nitrile (NBR)',
      'SBR (Styrene Butadiene Rubber)',
      'PTFE (Polytetrafluoroethylene)',
      'TPE (Thermoplastic Elastomer)',
    ],
  },
]

export default function Extruded() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Extruded Rubber</h1>
              <p className="hero__desc">
                We extrude rubber to your exact profile — continuous seals, cords, channels and
                complex custom cross-sections drawn to your print. From CAD file to spliced,
                vulcanized part, engineering-led and Made in China.
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
                  <h2 className="section__title">Your cross-section, extruded to spec</h2>
                </div>
                <p className="industry-col__p">
                  ARC designs and manufactures custom extruded rubber profiles across a wide range
                  of shapes — solid and sponge — in elastomers matched to your environment. We
                  produce continuous lengths, cut parts and spliced/vulcanized closed loops, plus
                  standard forms like cords, U-channels, D-strips and door/window seals. Our team
                  works from your CAD (PDF, STEP, IGES, DWG) through custom tooling to prototype and
                  mid-volume production. Automotive-grade quality systems and made-to-print
                  discipline mean the profile you spec is the profile you get.
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
              <h2 className="section__title">Extruded profiles we build</h2>
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
              <h2 className="section__title">Extruded Rubber we've built</h2>
            </div>
            <div className="gallery-4col">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt="Extruded rubber" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
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
            <h2>Need an extruded profile?</h2>
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
