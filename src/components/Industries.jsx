const industries = [
  'Oil & Gas', 'Automotive', 'Aerospace', 'Defense', 'Agriculture',
  'Rail & Transit', 'Marine', 'Renewable Energy', 'Pharmaceutical',
]

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">INDUSTRIES</p>
          <h2 className="section__title">Trusted across demanding industries</h2>
        </div>

        <div className="industries__list">
          {industries.map((i) => (
            <span key={i} className="industry-chip">{i}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
