const materials = [
  'EPDM', 'Silicone', 'Fluorosilicone', 'FKM / Viton', 'NBR / Nitrile', 'HNBR',
  'FFKM / Kalrez', 'Neoprene', 'SBR', 'TPV / Santoprene', 'AFLAS', 'PTFE',
]

export default function MaterialBench() {
  return (
    <section className="section section--soft" id="materials">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">MATERIAL BENCH</p>
          <h2 className="section__title">Material science is our starting point</h2>
          <p className="section__subtitle">
            12+ elastomer families compounded in-house — matched to your temperature, pressure,
            chemical and wear demands before a mold is ever cut. Pick a material for full
            properties and specs.
          </p>
        </div>

        <div className="materials__chips">
          {materials.map((m) => (
            <span key={m} className="chip">{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
