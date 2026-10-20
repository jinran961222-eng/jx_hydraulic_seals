import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import usePageSEO from '../hooks/usePageSEO.js'

const whoStats = [
  { value: '20', suffix: '+', label: 'Years manufacturing rubber' },
  { value: '300', suffix: '+', label: 'Oil & gas customers' },
  { value: '12', suffix: '+', label: 'Elastomer families mixed in-house' },
]

const howSteps = [
  { num: '01', title: 'Application & material analysis',
    desc: 'We start from service conditions — media, temperature, pressure, cycle life — and translate them into a compound and design target.' },
  { num: '02', title: 'Compound & in-house mixing',
    desc: 'We formulate and mix from 12+ elastomer families to tune fluorine content, durometer and cure chemistry to your application.' },
  { num: '03', title: 'Die & tooling design',
    desc: 'Tooling is engineered in-house with DFM review to control geometry, cut scrap and hit tolerance from the first run.' },
  { num: '04', title: 'Prototyping & validation',
    desc: 'Samples are produced and tested against spec before commitment, so approvals don’t stall at PPAP or first article.' },
  { num: '05', title: 'Production & QC',
    desc: 'Scaled production with bonding, trimming, post-cure and documented inspection under our certified quality system.' },
]

const industryGroups = [
  { title: 'Energy & heavy industry', items: ['Oil & Gas', 'Renewable Energy', 'Marine'] },
  { title: 'Mobility & transport', items: ['Automotive', 'Rail & Transit', 'Aerospace', 'Defense'] },
  { title: 'Regulated & field service', items: ['Pharmaceutical', 'Agriculture'] },
]

const materials = [
  'EPDM', 'Silicone', 'Fluorosilicone', 'FKM / Viton', 'NBR / Nitrile', 'HNBR',
  'FFKM / Kalrez', 'Neoprene', 'SBR', 'TPV / Santoprene', 'AFLAS', 'PTFE',
]

const whyItems = [
  { title: 'Compound control, not sourcing',
    desc: 'We mix 12+ elastomer families in-house, tuning chemistry to your part instead of specifying around an off-the-shelf grade.' },
  { title: 'Certified for strict qualification',
    desc: 'ISO 9001:2015 and IATF 16949:2016 in place — we clear automotive and safety-critical supplier audits without a workaround.' },
  { title: 'Proven where sealing is hardest',
    desc: '300+ oil & gas customers rely on our parts in high-pressure, high-chemical, high-temperature service.' },
  { title: 'A domestic supply chain that answers',
    desc: 'Made in China, with compounding and tooling under one roof — so you get tighter control, short communication loops and responsiveness a distant supplier can’t match.' },
]

const drivers = {
  vision: [
    'Be the custom rubber partner engineers call first when the application is demanding and the part has to perform.',
  ],
  mission: [
    'Solve sealing and elastomer problems end to end — material analysis to validated production.',
    'Put compound and tooling expertise under one roof, on a supply chain customers can rely on.',
  ],
  values: [
    'Engineering-led decisions, grounded in material science.',
    'Made to spec — never a generic substitute.',
    'Certifiable, traceable quality by default.',
    'Straight answers on lead time and feasibility.',
  ],
}

const aboutBlocks = [
  {
    title: 'Two Decades of Custom Rubber Manufacturing',
    paragraphs: [
      'Chinese Rubber Corp is a full-service custom manufacturer of superior rubber products, meeting the volume and customization needs of a broad customer base for more than two decades. Our tradition is to keep turnaround among the shortest in the industry while never compromising quality. Our engineers verify specified quality through tolerances on dimensions and on the desired properties of finished products, delivering made-to-print components on time, at competitive prices, and just when they are needed.',
    ],
  },
  {
    title: 'Product Portfolio',
    paragraphs: [
      'Backed by years of expertise in natural and synthetic elastomer compounds, we offer a rich portfolio of custom rubber components manufactured to your specification, including rubber gaskets, seals, O-rings, hoses, grommets, bellows, plugs, and caps. We compound in a wide range of materials such as EPDM, Silicone, Fluorosilicone, FKM (Viton), NBR (Nitrile, Buna-N), HNBR, Neoprene, and SBR, among many others. From product ideation, material suitability analysis, and product and die design through rubber compounding, color matching, prototyping, manufacturing, post-production fabrication, and quality testing, our engineers ensure precision at every step for a high-quality final product.',
    ],
  },
  {
    title: 'Adaptability and Expert Guidance',
    paragraphs: [
      'We are always ready to recommend the compounds and properties best suited to your technical, mechanical, electrical, and chemical requirements. Each manufacturing process is optimized around the specific design and specification to yield the best-performing rubber components for worry-free operation. Because our success depends on our customers’ success, we do more than build and deliver the right part at the right time; we help you make the right decisions. Our engineers stay involved across the full workflow, from ideation and material analysis to product design, die design, compounding, color matching, prototyping, manufacturing, post-production fabrication, and quality testing, to consistently deliver molded and extruded rubber products that meet expectations. Whether you need seals, gaskets, O-rings, diaphragms, sleeves, extruded strips, cords, or profiles, we welcome the chance to quote or advise on your project.',
    ],
  },
  {
    title: 'Right People, Right Values, Right Management',
    paragraphs: [
      'Our core team is made up of dynamic, experienced, and committed individuals who have worked together for over two decades to establish Chinese Rubber Corp as a leader in rubber components manufacturing. Guided by a clear vision, mission, and set of values, our management leverages deep industry knowledge and modern technology to deliver exceptional, long-lasting rubber components that clients rely on and vouch for. Get in touch to discuss how we can serve as your preferred custom rubber component manufacturer.',
    ],
  },
]

export default function About() {
  usePageSEO({
    title: 'About Us | Custom Rubber Seal Manufacturer',
    description: 'Learn about JX Hydraulic Seals (Chinese Rubber Corp), a leading custom rubber seals manufacturer with 20+ years of experience. ISO 9001 & IATF 16949 certified.',
    keywords: 'about rubber seal manufacturer, chinese rubber company, custom seals manufacturer, rubber manufacturing china'
  })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero hero--about">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">CUSTOM RUBBER ENGINEERING</p>
              <h1 className="hero__title">Rubber components engineered to your specification</h1>
              <p className="hero__desc">
                We compound, tool, and mold rubber parts to your print — not from a catalog — for
                the industries where sealing failure isn’t an option.
              </p>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="section" id="who">
          <div className="container">
            <div className="about-who">
              <div className="about-who__text">
                <p className="section__eyebrow">WHO WE ARE</p>
                <h2 className="section__title">The custom rubber partner engineers call first</h2>
                <p>
                  Chinese Rubber Corp is a custom-to-spec manufacturer of molded, extruded and
                  bonded rubber components. For 20+ years we’ve built parts from the application
                  backward — engineers bring us a sealing problem, a drawing, or a compound that
                  isn’t holding up, and we take it from material analysis through validated
                  production. Nothing ships from a shelf; every part is made to a customer print and
                  requirement.
                </p>
                <p>
                  Our advantage is depth in the two disciplines that decide whether a rubber part
                  performs: compound formulation and tooling. With 12+ elastomer families mixed
                  in-house, we control the chemistry most suppliers have to buy pre-mixed — and that
                  control is what lets us hit demanding chemical, temperature and pressure specs,
                  repeatably.
                </p>
              </div>
              <aside className="about-who__stats">
                {whoStats.map((s) => (
                  <div key={s.label} className="who-stat">
                    <strong>
                      {s.value}
                      <span className="plus">{s.suffix}</span>
                    </strong>
                    <span>{s.label}</span>
                  </div>
                ))}
                <div className="who-stat who-stat--cert">
                  <strong className="who-stat__cert">ISO 9001:2015 &amp; IATF 16949:2016</strong>
                  <span>Certified rubber manufacturer</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="section section--soft" id="how">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">HOW WE WORK</p>
              <h2 className="section__title">One team, from print to production</h2>
              <p className="section__subtitle">
                One team owns your part from first drawing to final inspection — no handoffs to
                outside compounders or toolrooms.
              </p>
            </div>
            <div className="process__grid">
              {howSteps.map((s) => (
                <div key={s.num} className="process-step">
                  <div className="process-step__num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries we serve */}
        <section className="section" id="industries-serve">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">INDUSTRIES WE SERVE</p>
              <h2 className="section__title">Where a failed seal isn’t an option</h2>
              <p className="section__subtitle">
                Our components go into applications where a failed seal means downtime, a recall or
                a safety event — so validation and traceability are built in, not added on.
              </p>
            </div>
            <div className="served__grid">
              {industryGroups.map((g) => (
                <div key={g.title} className="served-group">
                  <h3>{g.title}</h3>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Material bench */}
        <section className="section section--soft" id="materials">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">MATERIAL BENCH</p>
              <h2 className="section__title">12+ elastomer families, compounded in-house</h2>
              <p className="section__subtitle">
                Material choice is driven by your service conditions — not by what a distributor
                happens to stock.
              </p>
            </div>
            <div className="materials__chips">
              {materials.map((m) => (
                <span key={m} className="chip">{m}</span>
              ))}
            </div>
            <p className="materials__note">
              For aggressive downhole chemistry, rapid gas decompression and high-temperature sour
              service we reach for <strong>FFKM / Kalrez</strong>, <strong>AFLAS</strong> and{' '}
              <strong>FKM / Viton</strong> — the compounds that hold up where standard nitrile and
              EPDM fail.
            </p>
          </div>
        </section>

        {/* Why ARC */}
        <section className="section" id="why">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">WHY ARC</p>
              <h2 className="section__title">Built for the toughest RFQs</h2>
            </div>
            <div className="why__grid">
              {whyItems.map((r) => (
                <div key={r.title} className="why-item">
                  <div className="why-item__icon">›</div>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What drives us */}
        <section className="section section--soft" id="drives">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">WHAT DRIVES US</p>
              <h2 className="section__title">Vision, mission &amp; values</h2>
            </div>
            <div className="drivers__grid">
              <div className="driver-block">
                <h3>Vision</h3>
                <ul>
                  {drivers.vision.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
              <div className="driver-block">
                <h3>Mission</h3>
                <ul>
                  {drivers.mission.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
              <div className="driver-block">
                <h3>Values</h3>
                <ul>
                  {drivers.values.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="cta-band">
          <div className="container">
            <h2>Have a print or a sealing problem? Let’s engineer it.</h2>
            <p className="cta-band__desc">
              Send us your drawing or service conditions and our engineers will scope compound,
              tooling and a path to production.
            </p>
            <a href="https://wa.me/8618831866682?text=Hello%2C%20I%27m%20interested%20in%20your%20rubber%20products.%20I%27d%20like%20to%20get%20more%20information%20and%20a%20quotation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20specifications%2C%20and%20prices%3F%20Thank%20you%21" target="_blank" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>

        {/* More about */}
        <section className="section about" id="about">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">MORE ABOUT US</p>
            </div>
            <div className="about__body">
              {aboutBlocks.map((s) => (
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
