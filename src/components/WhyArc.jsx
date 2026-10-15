const reasons = [
  { icon: '1', title: 'We build new capabilities on demand',
    desc: 'When a customer needed something we didn’t yet make, we engineered the process and delivered it.' },
  { icon: '2', title: 'In-house compounding + owned tooling',
    desc: 'We control the compound and the mold, so quality and lead time stay in our hands, not a supplier’s.' },
  { icon: '3', title: 'Full-service engineering',
    desc: 'From application analysis to production, one team owns the part end to end.' },
  { icon: '4', title: 'Certified, made-in-USA quality',
    desc: 'ISO 9001 and IATF 16949 systems backed by a domestic, resilient supply chain.' },
]

export default function WhyArc() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">WHY ARC</p>
          <h2 className="section__title">A manufacturing partner, not a parts vendor</h2>
        </div>

        <div className="why__grid">
          {reasons.map((r) => (
            <div key={r.title} className="why-item">
              <div className="why-item__icon">{r.icon}</div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
