import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const materials = [
  { name: 'EPDM', range: '-58°F to +302°F', chem: 'Ethylene Propylene Diene Monomer',
    desc: 'The go-to for weather, ozone, steam and brake-fluid service, but not petroleum oils.' },
  { name: 'Silicone (VMQ)', range: '-67°F to +392°F', chem: 'Silicone Elastomer',
    desc: 'The widest temperature range in a flexible elastomer, plus clean and inert grades.' },
  { name: 'Fluorosilicone (FVMQ)', range: '-67°F to +350°F', chem: 'Fluorosilicone Elastomer',
    desc: 'Silicone’s temperature range with added fuel and oil resistance — the aerospace fuel-system elastomer.' },
  { name: 'FKM (Viton)', range: '-4°F to +400°F', chem: 'Fluoroelastomer',
    desc: 'The industry standard for high-heat, oil, fuel and chemical resistance in a true elastomer.' },
  { name: 'NBR (Nitrile)', range: '-40°F to +250°F', chem: 'Acrylonitrile-Butadiene Rubber',
    desc: 'The workhorse oil and fuel seal — best value for hydraulics and petroleum service.' },
  { name: 'HNBR', range: '-40°F to +300°F', chem: 'Hydrogenated Nitrile Rubber',
    desc: 'Nitrile’s oil resistance with much higher heat, strength and abrasion life.' },
  { name: 'FFKM (Kalrez)', range: '+5°F to +500°F', chem: 'Perfluoroelastomer',
    desc: 'Near-universal chemical resistance plus extreme heat — for the harshest sealing environments.' },
  { name: 'Neoprene (CR)', range: '-40°F to +250°F', chem: 'Chloroprene Rubber',
    desc: 'A balanced all-rounder with good weather, moderate oil and excellent marine/refrigerant compatibility.' },
  { name: 'SBR', range: '-40°F to +212°F', chem: 'Styrene-Butadiene Rubber',
    desc: 'Low-cost, abrasion-resistant general-purpose rubber for non-oil, indoor service.' },
  { name: 'TPV (Santoprene)', range: '-76°F to +275°F', chem: 'Thermoplastic Vulcanizate',
    desc: 'Rubber-like sealing in a recyclable, moldable thermoplastic — ideal for weatherseals and overmolding.' },
  { name: 'AFLAS (TFE-P)', range: '+14°F to +446°F', chem: 'Tetrafluoroethylene-Propylene Elastomer',
    desc: 'The oilfield/steam specialist — outstanding resistance to bases, amines, H₂S and steam.' },
  { name: 'PTFE', range: '-328°F to +500°F', chem: 'Polytetrafluoroethylene (thermoplastic fluoropolymer)',
    desc: 'Virtually universal chemical inertness and the widest temperature range — a rigid fluoropolymer, not a true elastomer.' },
]

const aboutBlocks = [
  {
    title: 'What Elastomers Are and How They Behave',
    paragraphs: [
      'Elastomers (rubbers) are highly elastic polymers. They are lightly cross-linked and amorphous, with a glass transition temperature well below room temperature, and can be pictured as a single very large molecule of macroscopic size. The intermolecular forces between the polymer chains are relatively weak, so while the crosslinks completely suppress irreversible flow, the chains remain very flexible above the glass transition and even a small force produces a large deformation. As a result, elastomers have a low Young’s modulus and very high elongation at break compared with other polymers. The term elastomer is often used interchangeably with rubber, though rubber is generally preferred when referring to vulcanized materials.',
      'Elastomers fall into three broad groups: diene, non-diene, and thermoplastic elastomers. Diene elastomers are polymerized from monomers containing two sequential double bonds; typical examples are polyisoprene, polybutadiene, and polychloroprene. Non-diene elastomers, including butyl rubber (polyisobutylene), polysiloxanes (silicone rubber), polyurethane (spandex), and fluoro-elastomers, have no double bonds in the structure, so crosslinking requires methods other than vulcanization, such as adding trifunctional monomers (condensation polymers), adding divinyl monomers (free-radical polymerization), or copolymerizing with small amounts of diene monomers like butadiene. Thermoplastic elastomers such as SIS and SBS block copolymers and certain urethanes contain rigid (hard) and soft (rubbery) repeat units; when cooled from the melt below the glass transition temperature, the hard blocks phase-separate into rigid domains that act as physical crosslinks for the elastomeric blocks.',
      'As a custom-to-spec, made-to-print manufacturer, American Rubber Corp produces elastomeric parts by one of three methods: injection molding, transfer molding, or compression molding. The right process depends on the shape and size of the part, the required tolerance, the production quantity, the type of elastomer, and raw-material cost. Selecting the right elastomer for an application means weighing many of the same factors: mechanical and physical service requirements, chemical exposure, operating temperature, service life, part manufacturability, and both raw-material and manufacturing cost. Elastomers offer a wide range of properties, including hardness, tensile strength, and elongation, and our engineers help match the compound to your requirement.',
    ],
  },
  {
    title: 'Heat Resistance',
    paragraphs: [
      'Elastomer performance becomes less predictable near the limits of its service temperature range. As temperature drops, elastomers become harder and less flexible; at the glass transition temperature they lose their rubber-like properties entirely, and at the brittle point they may crack. These low-temperature changes are usually physical and fully reversible, unless the part is under large tension below the brittle or glass transition temperature, which can cause damage. High temperatures near or above the service limit are different: elastomers often undergo irreversible chemical changes, such as chain scission of the polymer backbone or additional crosslinking, making the part much softer or more rigid and reducing its resistance to compression set. The maximum service temperature varies widely by material. Silicone and fluorocarbon elastomers offer the highest continuous service temperatures, exceeding 400 degrees F (230 degrees C), followed by polyacrylic and hydrogenated nitrile elastomers at 320 to 350 degrees F (160 to 180 degrees C), while more common elastomers such as Neoprene and Nitrile operate between 210 and 250 degrees F (100 to 120 degrees C).',
    ],
  },
  {
    title: 'Fluid Compatibility and Oil Resistance',
    paragraphs: [
      'An elastomer that is incompatible with the fluid it contacts can swell strongly and deteriorate rapidly, or break down completely. Chemical concentration, operating temperature, and pressure all affect compatibility, so when in doubt the elastomer should be evaluated in functional tests before use. Because many applications involve hydrocarbon oils, sealing elastomers are classified by heat and oil resistance; in the ASTM D2000 system, elastomers are ranked by heat resistance (type) and oil resistance (class). Fluorosilicone and fluorocarbon elastomers have excellent oil resistance at elevated temperatures (above 200 degrees C). Other elastomers with good oil but only medium heat resistance include NBR, ACM, and HNBR; with ACM and HNBR the operating temperature in hydrocarbon oils should not exceed 150 degrees C, and with NBR 100 degrees C. Silicone and Neoprene have only medium oil resistance, though silicone can run at far higher temperatures than Neoprene. Poor oil resistance can be expected from EPDM, SBR, butyl (IIR, CIIR, BIIR), and natural-rubber-based elastomers (NR, IR).',
    ],
  },
  {
    title: 'Abrasion and Tear Resistance',
    paragraphs: [
      'Abrasion resistance is an important selection criterion for dynamic seal and tire applications, while good tear resistance matters for mechanical applications where the part must resist nicking, cutting, and tearing. Elastomers such as hydrogenated nitrile (HNBR), polyester (AU) and polyether urethanes (EU), isoprene rubber (NR/IR), styrene-butadiene rubber (SBR), and tetrafluoroethylene-propylene copolymers have inherent abrasion resistance, whereas silicone (VMQ), butyl (IIR), and perfluoroelastomers (FFKM) have poor abrasion resistance. In many cases abrasion and tear resistance can be enhanced by compounding with internal lubricants such as Teflon or molybdenum disulfide. Nitrile and acrylic elastomers have fair abrasion resistance, and carboxylated nitrile (XNBR) offers noticeably better abrasion resistance. Most elastomers with good abrasion resistance also have good tear resistance, and those with poor abrasion resistance usually have poor tear resistance; silicone and fluorosilicone, for example, are suitable only for static applications because of their poor tear and abrasion resistance.',
    ],
  },
  {
    title: 'Cost and Material Selection',
    paragraphs: [
      'Cost is one of the most important selection criteria. When more than one elastomer meets all other requirements for an application, price usually decides the choice. Prices vary widely because of differences in raw material, compounding, and processing costs. The most economical elastomers are styrene-butadiene (SBR), followed by natural rubber (NR), isoprene (IR), neoprene (CR), and nitrile (NBR). EPDM, urethane, silicone, polyacrylate (ACM), butyl (IIR), and hydrogenated nitrile (HNBR) are somewhat more expensive but often still an economical choice. The most expensive elastomers are fluorocarbons (FKM copolymers), perfluorocarbons (FFKM), and fluorosilicones (FVMQ), which are usually chosen only when no other elastomer can meet the requirements. Our engineering-led team can help you balance these trade-offs and specify the right compound for your application.',
    ],
  },
]

export default function Elastomers() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <ImageSlot tag="IMG-01" ratio="cover" />
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">MATERIALS</p>
              <h1 className="hero__title">Any elastomer your application demands</h1>
              <p className="hero__desc">
                Twelve elastomer families, compounded in-house — matched to your temperature,
                chemistry and mechanical requirements. Pick a material to see properties, industry
                applications and a technical spec, or tell us your service conditions and we’ll
                recommend the right compound.
              </p>
            </div>
          </div>
        </section>

        {/* Material cards */}
        <section className="section">
          <div className="container">
            <div className="elastomers__grid">
              {materials.map((m) => (
                <div key={m.name} className="elastomer-card">
                  <div className="elastomer-card__head">
                    <h3>{m.name}</h3>
                    <span className="elastomer-card__range">{m.range}</span>
                  </div>
                  <p className="elastomer-card__chem">{m.chem}</p>
                  <p className="elastomer-card__desc">{m.desc}</p>
                  <a href="#contact" className="product-card__link">
                    View material <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Have an application in mind?</h2>
            <p className="cta-band__desc">
              Send your service conditions or drawing — we’ll confirm the right elastomer and a
              path to production.
            </p>
            <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </section>

        {/* More about elastomers */}
        <section className="section about" id="about">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="section__eyebrow">MORE ABOUT ELASTOMERS</p>
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
