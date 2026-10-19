export default function CtaBand() {
  return (
    <section className="cta-band cta-band--home">
      <div className="container">
        <div className="cta-cards">
          <div className="cta-card">
            <p className="cta-card__eyebrow">20 YEARS OF RISING TO THE CHALLENGE</p>
            <h2 className="cta-card__title">The parts other shops called impossible</h2>
            <p className="cta-card__desc">
              For 20 years, engineers have brought us unusual geometries, punishing chemistries and
              sealing challenges without an off-the-shelf answer. More than once, the solution didn't
              exist yet — so we built the capability to make it. If it can be engineered in rubber,
              we'll find the way to build it.
            </p>
          </div>

          <div className="cta-card cta-card--action">
            <div className="cta-card__text">
              <h3 className="cta-card__heading">Have a print or a problem? Let's engineer it.</h3>
              <p className="cta-card__sub">
                Send us your specification, drawing or application — our engineers will help you get
                to the right part.
              </p>
            </div>
            <a href="#contact" className="btn btn--yellow">Request a Quote →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
