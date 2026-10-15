import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">JX Hydraulic Seals</span>
            <span>American Rubber Corp · Chesterfield, IN, USA</span>
          </div>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <a href="#products">Products</a>
            <a href="#materials">Knowledge</a>
            <a href="#materials">Elastomers</a>
            <a href="#industries">Industries</a>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>
        <p className="footer__copy">
          Tel: <a href="tel:+13175488455">+1 (317) 548-8455</a> ·{' '}
          <a href="mailto:info@americanrubbercorp.com">info@americanrubbercorp.com</a>
        </p>
        <p className="footer__copy">
          © {new Date().getFullYear()} American Rubber Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
