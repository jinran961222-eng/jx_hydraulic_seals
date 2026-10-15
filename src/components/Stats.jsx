const stats = [
  { value: '20', suffix: '+', label: 'Years', sub: 'Engineering custom rubber' },
  { value: 'ISO 9001 · IATF 16949', suffix: '', label: '', sub: 'Certified quality systems' },
  { value: '300', suffix: '+', label: '', sub: 'Oil & gas customers served' },
  { value: '12', suffix: '+', label: '', sub: 'Elastomer families in-house' },
]

export default function Stats() {
  return (
    <div className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.value + s.sub} className="stat">
            <strong>
              {s.value}
              {s.suffix && <span className="plus">{s.suffix}</span>}
            </strong>
            {s.label && <em>{s.label}</em>}
            <span>{s.sub}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
