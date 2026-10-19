import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    eyebrow: 'Built to your print, not a catalog',
    title: 'Rubber components engineered to spec',
    desc: 'Molded, extruded and bonded parts designed around your application, tolerance and environment.',
    img: 'IMG-01',
  },
  {
    eyebrow: '12+ elastomer families, compounded in-house',
    title: 'The right compound for the job',
    desc: 'We formulate and mix elastomers ourselves — so material, not availability, drives the design.',
    img: 'IMG-02',
  },
  {
    eyebrow: 'ISO 9001:2015 · IATF 16949:2016 certified',
    title: 'Bring us the hard sealing problem',
    desc: '20 years of solving what others pass on — including capabilities we built because a customer asked.',
    img: 'IMG-03',
  },
]

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)

  const go = useCallback((n) => setIdx((n + slides.length) % slides.length), [])

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__slide">
            <p className="hero__eyebrow">{slides[idx].eyebrow}</p>
            <h1 className="hero__title">{slides[idx].title}</h1>
            <p className="hero__desc">{slides[idx].desc}</p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
              <a href="#products" className="btn btn--ghost">See capabilities</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__nav">
        {slides.map((s, i) => (
          <button
            key={s.img}
            className={`hero__dot ${i === idx ? 'is-active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  )
}
