const steps = [
  { num: '01', title: 'Application & material analysis',
    desc: 'We define the operating environment and the right elastomer.' },
  { num: '02', title: 'Compound development',
    desc: 'Formulated and mixed in-house to your requirements.' },
  { num: '03', title: 'Tooling',
    desc: 'Molds designed and owned for repeatable results.' },
  { num: '04', title: 'Prototype & validation',
    desc: 'Sample, test and refine before committing to volume.' },
  { num: '05', title: 'Production & QC',
    desc: 'Certified processes and inspection on every run.' },
]

export default function HowItWorks() {
  return (
    <section className="section section--soft" id="process">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">HOW IT WORKS</p>
          <h2 className="section__title">From application to production, one team</h2>
        </div>

        <div className="process__grid">
          {steps.map((s) => (
            <div key={s.num} className="process-step">
              <div className="process-step__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
