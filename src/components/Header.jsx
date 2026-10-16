import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState('')
  const [openFlyout, setOpenFlyout] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenMenu('')
        setOpenFlyout('')
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const toggleMenu = (name) => setOpenMenu((cur) => (cur === name ? '' : name))
  const toggleFlyout = (name) => setOpenFlyout((cur) => (cur === name ? '' : name))

  return (
    <header ref={ref} className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <div>
            Tel: <a href="tel:+13175488455">+1 (317) 548-8455</a> &nbsp;·&nbsp;{' '}
            <a href="mailto:info@americanrubbercorp.com">info@americanrubbercorp.com</a>
          </div>
          <div>
            <span className="cert">ISO 9001:2015</span> &amp;{' '}
            <span className="cert">IATF 16949:2016</span> &nbsp;·&nbsp; Chesterfield, IN, USA
          </div>
        </div>
      </div>

      <div className="header__inner container">
        <Link to="/" className="brand">
          <span className="brand__mark">JX</span>
          <span className="brand__text">
            <strong>JX Hydraulic Seals</strong>
            <small>American Rubber Corp</small>
          </span>
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          <Link to="/" className="nav__link nav__link--cur">Home</Link>

          <div className="item">
            <Link to="/products" className="nav__link" onClick={() => toggleMenu('products')}>
              Products <span className="chev">▾</span>
            </Link>
            <div className={`menu menu--wide ${openMenu === 'products' ? 'is-open' : ''}`}>
              <div className="pgroup">
                <Link to="/products/o-rings" className="pgroup__head">
                  O-Rings <span className="pchev">›</span>
                </Link>
                <div className={`pflyout ${openFlyout === 'o-rings' ? 'is-open' : ''}`}
                  onMouseEnter={() => setOpenFlyout('o-rings')}
                  onMouseLeave={() => setOpenFlyout('')}>
                  <a href="#products">Custom O-Rings</a>
                  <a href="#products">Standard O-Rings</a>
                </div>
              </div>
              <Link to="/products/oil-seals">Oil Seals</Link>
              <a href="#products">Rubber Diaphragms</a>
              <a href="#products">Extruded Rubber</a>
              <a href="#products">Rubber Molded Parts</a>
              <a href="#products">Inflatable Seals</a>
              <a href="#products">PTFE Products</a>
              <a href="#products">Die-Cut Gaskets</a>
              <a href="#products">Rubber Sheets &amp; Fabrics</a>
            </div>
          </div>

          <div className="item">
            <Link to="/knowledge" className="nav__link" onClick={() => toggleMenu('knowledge')}>
              Knowledge <span className="chev">▾</span>
            </Link>
            <div className={`menu menu--kmenu ${openMenu === 'knowledge' ? 'is-open' : ''}`}>
              <div className="kcol">
                <div className="kgroup">
                  <span className="kgh">Calculators</span>
                  <a href="#contact">Metric O-Ring Size Calculator</a>
                </div>
                <div className="kgroup">
                  <span className="kgh">Guides &amp; reference</span>
                  <a href="#contact">Material Selection Guide</a>
                  <a href="#contact">Chemical Compatibility</a>
                  <a href="#contact">RMA Tolerance Chart</a>
                  <a href="#contact">Custom Molding Guide</a>
                  <a href="#contact">Oil Seal Size Chart</a>
                  <a href="#contact">Diaphragm Design Guide</a>
                </div>
              </div>
              <div className="kcol">
                <div className="kgroup">
                  <span className="kgh">O-Ring size charts</span>
                  <a href="#contact">AS568 O-Ring Size Chart</a>
                  <a href="#contact">Metric Size Cross-Reference</a>
                  <a href="#contact">ISO 3601 Metric</a>
                  <a href="#contact">ISO 6149 Metric</a>
                  <a href="#contact">BS 1806 Metric</a>
                  <a href="#contact">BS 4518 Metric</a>
                  <a href="#contact">DIN 3771 Metric</a>
                  <a href="#contact">JIS B 2401 Metric</a>
                  <a href="#contact">NF T 47-501 Metric</a>
                  <a href="#contact">SMS 1586 Metric</a>
                  <a href="#contact">Generic Metric O-Rings</a>
                </div>
              </div>
              <div className="kcol">
                <div className="kgroup">
                  <span className="kgh">Catalogs</span>
                  <a href="#contact">Pneumatic Seals Catalog</a>
                  <a href="#contact">Rotary &amp; Oil Seals Catalog</a>
                  <a href="#contact">Company Brochure</a>
                </div>
                <div className="kgroup">
                  <span className="kgh">Certifications</span>
                  <a href="#contact">ISO &amp; IATF Certificates</a>
                  <a href="#contact">All Knowledge &amp; Tools</a>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <Link to="/elastomers" className="nav__link" onClick={() => toggleMenu('elastomers')}>
              Elastomers <span className="chev">▾</span>
            </Link>
            <div className={`menu ${openMenu === 'elastomers' ? 'is-open' : ''}`}>
              <a href="#materials">EPDM</a>
              <a href="#materials">Silicone</a>
              <a href="#materials">Fluorosilicone</a>
              <a href="#materials">FKM / Viton</a>
              <a href="#materials">NBR / Nitrile</a>
              <a href="#materials">HNBR</a>
              <a href="#materials">FFKM / Kalrez</a>
              <a href="#materials">Neoprene</a>
              <a href="#materials">SBR</a>
              <a href="#materials">TPV / Santoprene</a>
              <a href="#materials">AFLAS</a>
              <a href="#materials">PTFE</a>
            </div>
          </div>

          <div className="item">
            <a href="#industries" className="nav__link" onClick={() => toggleMenu('industries')}>
              Industries <span className="chev">▾</span>
            </a>
            <div className={`menu menu--wide ${openMenu === 'industries' ? 'is-open' : ''}`}>
              <Link to="/industries/aerospace">Aerospace</Link>
              <a href="#industries">Automotive</a>
              <a href="#industries">Oil &amp; Gas</a>
              <a href="#industries">Medical &amp; Pharma</a>
              <a href="#industries">Food &amp; Dairy</a>
              <a href="#industries">Marine</a>
              <a href="#industries">Defense</a>
              <a href="#industries">Agriculture</a>
              <a href="#industries">Railways</a>
              <a href="#industries">Renewable Energy</a>
            </div>
          </div>

          <Link to="/about" className="nav__link">About Us</Link>
          <Link to="/contact" className="nav__link">Contact Us</Link>

          <Link to="/" className="nav__cta" onClick={() => setOpen(false)}>
            Request a Quote →
          </Link>
        </nav>

        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
