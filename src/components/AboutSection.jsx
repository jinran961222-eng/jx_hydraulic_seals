const sections = [
  {
    title: 'A Fully In-House Custom Rubber Components Manufacturer',
    paragraphs: [
      'American Rubber Corp is an engineering-led manufacturer of custom rubber components, built to your design and specifications. We control every step of the process in-house, from compounding and mixing to extrusion and molding, so quality is engineered into the part rather than inspected in at the end. As a single-source partner, we guide each project through material selection, design, prototyping, and full production of custom rubber components made to print, never pulled from stock.',
      'Our optimized, ISO 9001:2015 certified processes deliver high-performance rubber parts for smooth, reliable operation in demanding applications. We consult with you to identify the right compounds and properties for your technical, mechanical, electrical, and chemical requirements, producing economical sealing, tubing and hose, and rubber parts precisely tailored to the job.',
    ],
  },
  {
    title: 'Precision Engineered to Perform',
    paragraphs: [
      'Every component we build is made to specification to hold up in the field: durable and heat-resistant, available in a range of sizes and colors, and formulated to maintain optimal performance in demanding service. Our parts provide superior protection against environmental contaminants, deliver long-lasting reliability and chemical resistance, and are built for maximum strength and pressure tolerance.',
    ],
  },
  {
    title: 'What Sets ARC Apart',
    paragraphs: [
      'We are among a small group of rubber manufacturers that stay genuinely customer-oriented, compounding, mixing, extruding, and molding rubber components and parts to your design and specifications. The result is a rare combination of quality, scale, competitive pricing, and industry-best turnaround.',
    ],
    list: [
      'Short turnaround time: one of the shortest lead times in the industry, so your project keeps moving without delay.',
      'Customer oriented: every solution is tailored to your unique application demands.',
      'Quality process: quality is built into every stage of manufacturing, with no compromise.',
      'Customization: custom rubber parts manufactured to your spec to meet real application requirements.',
      'Support throughout: our engineers stay engaged from first inquiry through final production run.',
      'Design and material consultation: we help with material selection and design, not just fabrication.',
    ],
  },
  {
    title: 'A Trusted Partner for Custom Rubber Solutions',
    paragraphs: [
      'We specialize in manufacturing custom rubber parts designed around the unique needs of each client. Our commitment to quality, precision, and customer satisfaction, delivered with short turnaround times, is what earns long-term partnerships. Reach out for any rubber component need, including seal, gasket, and O-ring design and engineering consultation.',
    ],
  },
]

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">MORE ABOUT US</p>
        </div>

        <div className="about__body">
          {sections.map((s) => (
            <div key={s.title} className="about__block">
              <h3>{s.title}</h3>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.list && (
                <ul className="about__list">
                  {s.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
