import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import { useState } from 'react'
import usePageSEO from '../hooks/usePageSEO.js'

const infoItems = [
  { label: 'CALL', value: '+86 188 3186 6682' },
  { label: 'EMAIL', value: 'junweizhang0011@gmail.com' },
  { label: 'VISIT', value: 'No. 10, Jingxin Street, Dong Development Zone, Jing County, Hengshui City, Hebei Province, China' },
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
  usePageSEO({
    title: 'Contact Us | Request a Quote',
    description: 'Contact JX Hydraulic Seals for custom rubber seal quotes. Phone: +86 188 3186 6682. Email: junweizhang0011@gmail.com. Located in Hengshui, Hebei, China.',
    keywords: 'contact rubber seal manufacturer, request a quote, rubber seals china, custom seals quote'
  })

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    app: '',
    material: '',
    duro: '',
    qty: '',
    qtyunit: 'Under 100',
    color: '',
    notes: '',
    contactMethod: 'email'
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    const key = id.replace('c-', '')
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSending) return

    setIsSending(true)

    const subject = `Quote Request from ${formData.name || 'Customer'} - ${formData.company || 'N/A'}`

    const body = {
      _subject: subject,
      name: formData.name || 'N/A',
      company: formData.company || 'N/A',
      email: formData.email || 'N/A',
      phone: formData.phone || 'N/A',
      application: formData.app || 'N/A',
      material: formData.material || 'N/A',
      durometer: formData.duro || 'N/A',
      estimatedQuantity: `${formData.qty || 'N/A'} ${formData.qtyunit || ''}`,
      color: formData.color || 'N/A',
      additionalNotes: formData.notes || 'N/A',
      preferredContact: formData.contactMethod || 'email',
    }

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/junweizhang0011@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to send quote request')
      }

      const result = await response.json()

      if (result.success === 'false') {
        throw new Error('Email service rejected the request')
      }

      alert('Thank you! Your quote request has been sent.')

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        app: '',
        material: '',
        duro: '',
        qty: '',
        qtyunit: 'Under 100',
        color: '',
        notes: '',
        contactMethod: 'email'
      })

      const fileInput = document.getElementById('c-file')
      if (fileInput) {
        fileInput.value = ''
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      alert(
        'Sorry, your request could not be sent. Please try again or contact us by email.'
      )
    } finally {
      setIsSending(false)
    }
  }

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

                <form className="quote-form__grid" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="c-name">Name</label>
                    <input
                      id="c-name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-company">Company</label>
                    <input
                      id="c-company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-email">Email</label>
                    <input
                      id="c-email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-phone">Phone (optional)</label>
                    <input
                      id="c-phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field field--full">
                    <label htmlFor="c-app">What are you making, and where does it go?</label>
                    <input
                      id="c-app"
                      type="text"
                      value={formData.app}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-material">Material</label>
                    <input
                      id="c-material"
                      type="text"
                      value={formData.material}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-duro">Durometer (Shore A)</label>
                    <input
                      id="c-duro"
                      type="text"
                      value={formData.duro}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-qty">Estimated Quantity</label>
                    <input
                      id="c-qty"
                      type="text"
                      value={formData.qty}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-qtyunit">Est. Quantity Unit</label>
                    <input
                      id="c-qtyunit"
                      type="text"
                      value={formData.qtyunit}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-color">Color</label>
                    <input
                      id="c-color"
                      type="text"
                      value={formData.color}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field field--full field--file">
                    <label>
                      Attach a drawing — PDF, STEP, DWG or image (optional)
                    </label>
                    <input
                      id="c-file"
                      type="file"
                      className="file-input"
                    />
                  </div>

                  <div className="field field--full">
                    <label htmlFor="c-notes">
                      Anything else that helps us quote accurately
                    </label>
                    <textarea
                      id="c-notes"
                      rows="4"
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field field--full">
                    <div className="contact-method">
                      <span className="contact-method__label">Preferred contact</span>

                      <label className="radio">
                        <input
                          type="radio"
                          name="contact-method"
                          checked={formData.contactMethod === 'email'}
                          onChange={() =>
                            setFormData(prev => ({
                              ...prev,
                              contactMethod: 'email'
                            }))
                          }
                        /> Email
                      </label>

                      <label className="radio">
                        <input
                          type="radio"
                          name="contact-method"
                          checked={formData.contactMethod === 'phone'}
                          onChange={() =>
                            setFormData(prev => ({
                              ...prev,
                              contactMethod: 'phone'
                            }))
                          }
                        /> Phone
                      </label>
                    </div>
                  </div>

                  <div className="field field--full quote-form__foot">
                    <span className="recaptcha-note">protected by reCAPTCHA</span>
                    <button
                      type="submit"
                      className="btn btn--yellow"
                      disabled={isSending}
                    >
                      {isSending ? 'Sending...' : 'Send'}
                    </button>
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
