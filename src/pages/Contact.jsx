import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const infoItems = [
  { label: 'CALL', value: '+86 188 3186 6682' },
  { label: 'EMAIL', value: 'junweizhang0011@gmail.com' },
  { label: 'VISIT', value: '1136 Dilts Street, Chesterfield, IN 46017' },
  { label: 'HOURS', value: 'Mon-Fri, 9:00 AM – 5:00 PM ET' },
  { label: 'CERTIFIED', value: 'ISO 9001:2015 & IATF 16949:2016' },
]

const includeList = [
  'Your drawing, sketch or a sample part',
  'Service conditions — media, temperature, pressure, cycle life',
  'Quantity and timeline',
  'Target compound or material, if known',
]

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <p className="hero__eyebrow">CONTACT US</p>
              <h1 className="hero__title">Let’s engineer your part</h1>
              <p className="hero__desc">
                Send a drawing or describe the application — a real rubber engineer will scope
                compound, tooling and a path to production, usually within one business day.
              </p>
            </div>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="section">
          <div className="container">
            <div className="contact-split">
              {/* Left info column */}
              <div className="contact-info">
                <ul className="contact-info__list">
                  {infoItems.map((it) => (
                    <li key={it.label}>
                      <span className="contact-info__label">{it.label}</span>
                      <span className="contact-info__value">{it.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="contact-info__include">
                  <h3>What to include for a fast quote</h3>
                  <ul>
                    {includeList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right form */}
              <div className="quote-form">
                <h2 className="quote-form__title">Request a Quote</h2>
                <p className="quote-form__desc">
                  Send your drawing or describe the part — a real rubber engineer replies, usually
                  within one business day.
                </p>
                <form className="quote-form__grid" onSubmit={(e) => e.preventDefault()}>
                  <div className="field">
                    <label htmlFor="c-name">Name</label>
                    <input id="c-name" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-company">Company</label>
                    <input id="c-company" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" type="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-phone">Phone (optional)</label>
                    <input id="c-phone" type="text" />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="c-app">What are you making, and where does it go?</label>
                    <input id="c-app" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-material">Material</label>
                    <input id="c-material" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-duro">Durometer (Shore A)</label>
                    <input id="c-duro" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-qty">Estimated Quantity</label>
                    <input id="c-qty" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-qtyunit">Est. Quantity Unit</label>
                    <input id="c-qtyunit" type="text" defaultValue="Under 100" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-color">Color</label>
                    <input id="c-color" type="text" />
                  </div>
                  <div className="field field--full field--file">
                    <label>Attach a drawing — PDF, STEP, DWG or image (optional)</label>
                    <input id="c-file" type="file" className="file-input" />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="c-notes">Anything else that helps us quote accurately</label>
                    <textarea id="c-notes" rows="4" />
                  </div>
                  <div className="field field--full">
                    <div className="contact-method">
                      <span className="contact-method__label">Preferred contact</span>
                      <label className="radio">
                        <input type="radio" name="contact-method" defaultChecked /> Email
                      </label>
                      <label className="radio">
                        <input type="radio" name="contact-method" /> Phone
                      </label>
                    </div>
                  </div>
                  <div className="field field--full quote-form__foot">
                    <span className="recaptcha-note">protected by reCAPTCHA</span>
                    <button type="submit" className="btn btn--yellow">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
