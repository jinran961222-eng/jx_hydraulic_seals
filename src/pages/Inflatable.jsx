import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const stats = [
  { num: '20+', label: 'years to spec' },
  { num: '8', label: 'configurations' },
  { num: '5+', label: 'elastomer options' },
  { num: 'ISO · IATF', label: '9001 + 16949' },
]

const approvals = ['PPAP', 'FAI', 'First-article inspection', 'Material certifications']

const capabilities = [
  'Pressure-actuated inflate/deflate for zero-force door and hatch closure',
  'Radially inward and radially outward sealing directions',
  'Non-reinforced and fabric-reinforced (cotton, polyester, nylon, Nomex, Dacron, Kevlar)',
  'Customizable integral valve and inlet-tube placement',
  'Extrusion-and-join for endless seals; full molding on continuous and mandrel',
  'Corner-molded and vulcanized-joint constructions for airtight loops',
  'Engineered to inflation height, deflation gap, pressure and temperature',
  'Metal-to-rubber bonding and single/multi-bladder mechanisms',
]

const products = [
  { name: 'Non-Reinforced Seals', desc: 'All-elastomer seals for lower-pressure, higher-stretch applications.' },
  { name: 'Fabric-Reinforced Seals', desc: 'Fabric-embedded seals for higher operating pressures and dimensional control.' },
  { name: 'Footless Seals', desc: 'No special base — mounted via PSA backing or pre-machined grooves.' },
  { name: 'Fasten-In Seals', desc: 'Flexible base feature fastened at regular intervals.' },
  { name: 'Snap-In Seals', desc: 'Tapered side profile that snaps into reverse-tapered slots.' },
  { name: 'Bonded-Bottom Seals', desc: 'Any profile with pressure-sensitive adhesive applied to the base.' },
  { name: 'Slot-Fit Seals', desc: 'Fully retract within the slot when deflated for flush clearance.' },
  { name: 'Clamping Bladders', desc: 'Inflatable bladders for holding, gripping and expanding mandrels.' },
]

const galleryImages = [
  'https://i.postimg.cc/ZqV40W45/Inflatable-Seal-(1).jpg',
  'https://i.postimg.cc/W3zjZs1X/Inflatable-seal-valve.jpg',
  'https://i.postimg.cc/HWt4nH72/Air-Inflatable-seals.jpg',
  'https://i.postimg.cc/d1PmkV6v/aerospace.png',
  'https://i.postimg.cc/3JJjD6Xp/anchor.png',
  'https://i.postimg.cc/N0fLNq0Y/power-generation.png',
  'https://i.postimg.cc/Rhv7dp2D/air-conditioning.png',
  'https://i.postimg.cc/QCMBV2Rf/delivery-box.png',
]

const materials = [
  { name: 'Silicone', desc: 'FDA/platinum-cured for pharma & cleanroom' },
  { name: 'EPDM', desc: 'Steam, water & ozone for autoclave doors' },
  { name: 'NBR / Nitrile', desc: 'Oil & hydrocarbon for industrial/marine' },
  { name: 'FKM / Viton', desc: 'High-temp & chemical resistance' },
  { name: 'Neoprene', desc: 'Weather, moderate oil & flame' },
]

const industries = [
  'Aerospace', 'Marine', 'Power Generation', 'HVAC/R',
  'Bulk Material Handling', 'Chemical Processing', 'Semiconductor', 'Pharmaceutical',
]

const applications = [
  'Cleanroom door sealing for contamination-proof closure',
  'Semiconductor door and load-lock sealing',
  'Marine vessel door and hatch sealing against sea water and hydrocarbons',
  'Autoclave and pressure-vessel door seals in EPDM/silicone',
  'Hazard-area door sealing',
  'Clamping bladders for gripping and expanding mandrels',
  'Automated packing suction/gripping and powder handling',
  'Industrial-mixer corner-molded seals for airtight sealing',
]

const refTools = [
  { name: 'Material Selection Guide', desc: 'Match the right elastomer to your temperature and chemistry.' },
  { name: 'Chemical Compatibility', desc: 'Elastomer resistance ratings across hundreds of media.' },
  { name: 'RMA Tolerance Chart', desc: 'Standard molding and extrusion tolerance classes.' },
]

const inDepth = [
  {
    title: 'Custom Inflatable Rubber Seals with Customizable Valve and Inlet Tube',
    paragraphs: [
      'Chinese Rubber Corp is a leading, Made in China manufacturer of inflatable rubber seals with a customizable valve and inlet tube. Inflatable seals inflate to provide a contamination-proof seal across a wide range of applications and, unlike traditional elastomeric seals, can effectively seal irregular or misaligned surfaces to enhance sealing integrity. Their unique design allows them to inflate and form a tight barrier between the mounting and striking surfaces, requiring less force while ensuring a 100% seal, which makes them the ideal solution for demanding and unusual sealing applications. As an engineering-led manufacturer with 20 years of experience, we provide design consultation and material selection support, guiding you through critical parameters such as inflation height, deflation (relaxed-state) gap, operating pressure, and operating temperature. We produce non-reinforced inflatable seals, fabric-reinforced inflatable seals, and both custom and standard inflatable seals to your specification.',
    ],
  },
  {
    title: 'How Inflatable Seals Are Used and Made',
    paragraphs: [
      'Rubber inflatable seals are used throughout industry to achieve optimized, dynamic sealing or grip for hard-to-seal irregular areas, misaligned surfaces with gaps between them, and applications where rapid, repeated sealing and unsealing is a critical requirement. Across industries they are also called pneumatic gaskets or dynamic seals. We custom-design and manufacture inflatable rubber seals in a variety of profiles, either extruded and joined into an endless gasket or fully molded through continuous molding and mandrel operations. Seal geometry, operating conditions, desired pressure, and the method and interface by which the seal is installed are among the most critical factors in achieving the sealing quality and long operating life these seals can deliver.',
    ],
  },
  {
    title: 'Reinforcement and Directional Sealing',
    paragraphs: [
      'We manufacture custom-designed reinforced inflatable gaskets based on the requirements and operating details you provide. The reinforcement material is selected to match your desired operating pressure and temperature, and we offer a choice of polyester, cotton, nylon, Nomex, and Kevlar reinforcement for custom-manufactured inflatable seals. Our seals are built for radially inward as well as radially outward sealing depending on the application. Our dedicated engineering team works closely with you from the initial design stage through the final manufacturing run to recommend the right inflatable seal materials and design.',
    ],
  },
  {
    title: 'Elastomer Compounds and Reinforcement Fabrics',
    paragraphs: [],
    bulletGroups: [
      {
        label: 'Elastomer compounds',
        items: [
          'Silicone',
          'EPDM',
          'Butyl',
          'Nitrile (Buna-N or NBR)',
          'FKM (a generic compound of Viton, a registered trademark of The Chemours Company)',
          'Neoprene/Chloroprene',
          'TPE',
          'PTFE (a generic compound of Teflon, a registered trademark of The Chemours Company)',
        ],
      },
      {
        label: 'Reinforcement fabrics',
        items: ['Cotton', 'Polyester', 'Nylon', 'Nomex', 'Dacron', 'Kevlar'],
      },
    ],
  },
]

export default function Inflatable() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">PRODUCT FAMILY</p>
              <h1 className="hero__title">Inflatable Seals</h1>
              <p className="hero__desc">
                We design custom inflatable rubber seals that actuate on air pressure — inflating
                to make a 100% contamination-proof seal, then retracting on deflation for
                zero-force opening. Built for rapid, repeated sealing cycles where conventional
                seals fail.
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
                  <h2 className="section__title">Seal on demand, release on demand</h2>
                </div>
                <p className="industry-col__p">
                  ARC manufactures non-reinforced and fabric-reinforced inflatable (pneumatic)
                  seals that expand under internal air pressure to close gaps doors and lids can’t
                  close mechanically — sealing radially inward or radially outward as the
                  application requires. Seals are produced by extrusion-and-join for endless gaskets
                  and by full molding for continuous and mandrel geometries, with corner-molded and
                  reinforced constructions for airtight results. Because they actuate with pressure
                  rather than compression, inflatable seals deliver a full seal with far less closing
                  force than static elastomeric seals. We engineer each profile, mounting style and
                  compound to your pressure, temperature and cycle-life targets.
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
              <h2 className="section__title">Inflatable seal types we build</h2>
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
              <h2 className="section__title">Inflatable Seals we've built</h2>
            </div>
            <div className="gallery-4col">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt="Inflatable seal" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
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
            <h2>Need an inflatable seal designed?</h2>
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
