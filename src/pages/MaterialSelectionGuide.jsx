import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const materials = [
  {
    name: 'Ethylene-Propylene (EPDM)',
    body: [
      'This is a terpolymer of ethylene, propylene and a diene monomer. It has outstanding resistance to oxygen, ozone, and sunlight. Its resistance to polar materials such as phosphate esters, many ketones and alcohol. It has good electrical properties, low temperature flexibility, excellent heat, water and steam resistance. Its resistance to petroleum products is poor. Useful temperature range is -58° F to +300° F (-50° C to +150° C).',
      'EPDM rubber is co-polymer of ethylene and propylene, it combines with terpolymer of ethylene, propylene, and a third monomer (usually a diolefin) to permit vulcanization with sulfur. Ethylene Propylene Rubber possesses excellent resistance to ozone, sunlight, and weathering. EPDM has excellent flexibility at low temperature and has excellent chemical resistance, and very electrical insulation properties.',
    ],
    sections: [
      { title: 'Common Uses Of EPDM Material', bullets: ['Automotive braking and cooling system', 'Automotive Gaskets', 'Appliances washers, belt, grommet, O-Rings', 'Electrical insulation', 'Solar panel heat collector'] },
      { title: 'Production Type of EPDM', bullets: [] },
      { title: 'Advantages of EPDM', bullets: [] },
    ],
    extra: [
      'EPDM parts can be produced in sulfur cure or peroxide cure. We choose curing as per customers application by keeping temperature, durometer, elongation, tensile strength, and compression sets of material in mind. Standard EPDM material are usually produce from sulfur cure in order to get excellent flexibility. Peroxide cured is recommended when high temperature resistances and low compression rate is required.',
      'EPDM rubber compound performs very good in alcohols, automotive brake fluids, ketone, dilute acid and alkali, silicone oil and grease, steam to 350+F water.',
    ],
  },
  {
    name: 'Natural Rubber (NR)',
    body: [
      'As the name would indicate, this elastomer occurs naturally and comes from the latex of certain trees and plants. After the latex is processed, it becomes an elastomer with excellent mechanical properties. It has excellent tensile, elongation, tear resistance and resilience. It has good abrasion resistance and excellent low temperature flexibility. Without special additives, it has poor resistance to ozone, oxygen, sunlight and heat. It has poor resistance to solvents and petroleum products. Useful temperature range is -67° F to +180° F (-55° C to +82° C).',
    ],
  },
  {
    name: 'Viton Rubber (FKM)',
    body: [
      'Fluoroelastomers or Fluorocarbons (FKM), also known as Viton®, are highly fluorinated polymers that are suitable for continuous use at elevated temperatures. Various grades are available, including copolymer and terpolymers. The most common grades consist of tetrafluoroethylene, hexafluoropropylene, and vinylidene fluoride. Fluoroelastomer compounds are widely used in the chemical, automotive, aerospace, and energy industry. They are used for hoses, diaphragms, accumulator bladders, gaskets, O-rings & seals, all operating in especially harsh environments. The typical service temperature of FKMs is between -20°C (-5°F) and +230°C (+445°F). They can, however, withstand temperatures up to 300°C for a short period of time. However, at high service temperatures FKMs are weak, so that the design must prevent any high loads.',
    ],
  },
  {
    name: 'Nitrile / Buna-N (NBR)',
    body: [
      'This is a copolymer of acrylonitrile and butadiene. It has excellent physical properties, however its claim to fame is based on its resistance to water, petroleum products and fuels. When compounded properly, it has good low temperature properties as well as good heat resistance. It does not have good ozone, oxygen or sunlight resistance without the addition of special additives. Useful temperature range is -40° F to +275° F (-40° C to +135° C).',
    ],
  },
  {
    name: 'Neoprene / Chloroprene (CR)',
    body: [
      'This elastomer is made by the polymerization of Chloroprene. It has excellent physical properties. It is moderately resistant to petroleum products, sunlight, ozone and heat. It is flame resistant and will not support combustion. Useful temperature range is -40° F to +275° F (-40° C to +135° C).',
    ],
  },
  {
    name: 'Hypalon (CSM)',
    body: [
      'This elastomer is made by the polymerization of Chloroprene. It has excellent physical properties. It is moderately resistant to petroleum products, sunlight, ozone and heat. It is flame resistant and will not support combustion. Useful temperature range is -40° F to +275° F (-40° C to +135° C).',
    ],
  },
  {
    name: 'Styrene Butadiene (SBR) (Buna-S) (GRS)',
    body: [
      'This is a copolymer of styrene and butadiene. It has similar properties to natural rubber. Its resistance to solvents and petroleum products is about the same as natural rubber. Water resistance is better. Without special additives, it is vulnerable to ozone, oxygen and sunlight. Useful temperature range is -67° F to +180° F (-55° C to +82° C).',
    ],
  },
  {
    name: 'Silicone',
    body: [
      'Silicone is made from sand and alkyl or aryl halides. It is predominately inorganic material. It has outstanding resistance to temperature extremes. It has excellent vibration damping, and reasonable physical properties such as tensile and elongation. Tear and abrasion resistance are generally poor. Useful temperature range is -148° F to +600° F (-100° C to +315° C).',
    ],
  },
  {
    name: 'PTFE (Polytetrafluoroethylene)',
    body: [
      'This is a synthetic fluoropolymer of tetrafluoroethylene and is known for being one of the most versatile plastics available. It is made by the free-radical polymerisation of many tetrafluoroethene molecules, and is suitable for a wide range of applications in industries as diverse as aerospace, the food and drink industry, pharmaceuticals and telecoms. PTFE is commonly known as Teflon™ (owned by Chemours) and offers remarkable nonstick properties in cookware applications such as kitchen pans and baking trays. PTFE is produced by AFT Fluorotec in rods or tubes of any size, or filled with glass, carbon, stainless steel or many other materials to increase wear resistance and strength, whatever your project or build, we are sure to have a material that will work for you.',
    ],
  },
  {
    name: 'FFKM (DuPont™ Kalrez®)',
    body: [
      'FFKM are one of the most expensive elastomers. Typical applications include core sleeves, gaskets, O-rings in chemical processing equipment for applications where the parts are exposed to harsh environments and high temperatures. Some grades are suitable for continuous use at 325°C (620°F), with chemical resistance being almost universal and unrivaled by any other elastomer. Applications – Chemical and hydrocarbon processing, semiconductor manufacturing, aerospace engines, FDA-compliant food, pharmaceuticals and beverages.',
    ],
  },
  {
    name: 'Hydrogenated acrylonitrile butadiene rubber (HNBR)',
    body: [
      'A unique elastomer. It can be produced from conventional nitrile rubber by hydrogenation of the unsaturated bonds in the butadiene units of the polymer. The properties of hydrogenated nitrile rubber (HNBR) depend upon the acrylonitrile content and the degree of hydrogenation of the butadiene copolymer. HNBRs have better oil and chemical resistance than nitrile rubbers & can also withstand much higher temperatures. Like NBR, this type of elastomer has excellent resistance to oils and fuels but it also has excellent resistance to many chemicals, heat (steam / hot water) & ozone. The mechanical properties like tensile & tear strength, elongation, & abrasion resistance are also excellent. Furthermore, HNBRs have good dynamic behavior at elevated temperatures. Disadvantages include higher cost & limited resistance to aromatic oils & polar organic solvents, poor electrical properties, & poor flame resistance. The typical working temperature range is -25°C to +160°C (-40°F to +320°F). Special grades that are sulfur or peroxide cured have improved dynamic applications but also have a lower maximum application temperature. As with nitrile, many properties can be influenced by varying the acrylonitrile content in the rubber. High-nitrile HNBR elastomers have better resistance to mineral oils, whereas peroxide/sulfur cured HNBRs have the best compression set and heat resistance.',
    ],
  },
  {
    name: 'AFLAS',
    body: [
      'AFLAS is a unique fluoroelastomer that has superior amine resistance & electrical insulation compared to conventional fluoroelastomers. It is highly suitable for critical applications where exceptional reliability is required. The molecular structure of AFLAS® gives it outstanding heat-resistance allowing it to be used continuously at 200°C. Its exceptional heat-resistance even enables it to withstand temperatures of 250°C. It has extremely low aromatizing properties compared to other rubber materials. It can be considered extremely effective for use in gaskets and packing on piping components for production lines, where lingering or transferred smells are a concern.',
    ],
  },
]

const related = [
  { label: 'Elastomers', to: '/elastomers' },
  { label: 'Chemical Compatibility', to: '/chemical-compatibility' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Rubber Diaphragms', to: '/products/rubber-diaphragms' },
]

export default function MaterialSelectionGuide() {
  return (
    <>
      <Header />
      <main>
        <section className="calc-hero">
          <div className="container">
            <p className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span> <Link to="/knowledge">Knowledge</Link> <span>›</span>{' '}
              <span className="current">Material Selection Guide</span>
            </p>
            <p className="calc-hero__eyebrow">Material Guide</p>
            <h1 className="calc-hero__title">Material Selection Guide</h1>
            <p className="calc-hero__desc">
              Elastomers is essentially another word for rubber. Elastomers have a variety of properties such as
              hardness, tensile strength, and elongation.
            </p>
            <div className="calc-hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote</a>
              <Link to="/elastomers" className="btn btn--ghost">Elastomer Materials →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">ELASTOMERS THAT WE OFFER</p>
              <h2 className="section__title">Rubber material selection guide</h2>
            </div>
            <div className="about__body">
              {materials.map((m) => (
                <div key={m.name} className="about__block">
                  <h3>{m.name}</h3>
                  {m.body.map((p, i) => <p key={i}>{p}</p>)}
                  {m.sections && m.sections.map((s) => (
                    <div key={s.title} className="about__group">
                      <h4>{s.title}</h4>
                      {s.bullets.length > 0 && (
                        <ul className="about__bullets">
                          {s.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                  {m.extra && m.extra.map((p, i) => <p key={`e${i}`}>{p}</p>)}
                </div>
              ))}
            </div>
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
            <h2>Not sure which compound fits your application?</h2>
            <p className="cta-band__desc">
              Send your media, temperature and service conditions — our engineers confirm the right elastomer.
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
