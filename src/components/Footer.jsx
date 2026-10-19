import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">JX Hydraulic Seals</span>
            {/* <span>Chinese Rubber Corp · Hengshui, Hebei, China</span> */}
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
          Tel: <a href="tel:+8618831866682">+86 188 3186 6682</a> ·{' '}
          <a href="mailto:junweizhang0011@gmail.com">junweizhang0011@gmail.com</a>
        </p>
        <p className="footer__copy">
          © {new Date().getFullYear()} Chinese Rubber Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
