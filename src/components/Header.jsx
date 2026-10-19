import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState('')
  const [openFlyout, setOpenFlyout] = useState('')
  const ref = useRef(null)
  const { pathname } = useLocation()

  // Determine which top-level nav section the current route belongs to.
  // Note: size charts / guides live under /products/... in the URL but are
  // grouped under the Knowledge dropdown in the nav, so they must map here too.
  const active =
    pathname === '/' ? 'home'
    : pathname.startsWith('/elastomers') ? 'elastomers'
    : pathname.startsWith('/industries') ? 'industries'
    : pathname === '/about' ? 'about'
    : pathname === '/contact' ? 'contact'
    : pathname === '/knowledge'
      || pathname === '/material-selection-guide'
      || pathname === '/chemical-compatibility'
      || pathname === '/rma-tolerance-chart'
      || pathname === '/certifications'
      || pathname.includes('/custom-molding-guide')
      || pathname.includes('/oil-seal-size-chart')
      || pathname.includes('/diaphragm-design-guide')
      || pathname.startsWith('/products/standard-o-rings') ? 'knowledge'
    : pathname.startsWith('/products') || pathname === '/rubber-sheets-native' ? 'products'
    : ''

  const cur = (key) => `nav__link${active === key ? ' nav__link--cur' : ''}`

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset
      // Hysteresis: collapse past 100px, only expand again below 40px.
      // This dead zone stops the sticky header from flickering at the threshold.
      setScrolled((cur) => {
        if (!cur && y > 100) return true
        if (cur && y < 40) return false
        return cur
      })
    }
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
            Tel: <a href="tel:+8618831866682">+86 188 3186 6682</a> &nbsp;·&nbsp;{' '}
            <a href="mailto:junweizhang0011@gmail.com">junweizhang0011@gmail.com</a>
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
          <Link to="/" className={cur('home')}>Home</Link>

          <div className="item"
            onMouseEnter={() => setOpenMenu('products')}
            onMouseLeave={() => setOpenMenu('')}>
            <Link to="/products" className={cur('products')} onClick={() => toggleMenu('products')}>
              Products <span className="chev">▾</span>
            </Link>
            <div className={`menu menu--wide ${openMenu === 'products' ? 'is-open' : ''}`}>
              <div className="pgroup"
                onMouseEnter={() => setOpenFlyout('o-rings')}
                onMouseLeave={() => setOpenFlyout('')}>
                <Link to="/products/o-rings" className="pgroup__head">
                  O-Rings <span className="pchev">›</span>
                </Link>
                <div className={`pflyout ${openFlyout === 'o-rings' ? 'is-open' : ''}`}>
                  <Link to="/products/o-rings">Custom O-Rings</Link>
                  <Link to="/products/standard-o-rings">Standard O-Rings</Link>
                </div>
              </div>
              <Link to="/products/oil-seals">Oil Seals</Link>
              <Link to="/products/rubber-diaphragms">Rubber Diaphragms</Link>
              <Link to="/products/extruded-rubber">Extruded Rubber</Link>
              <Link to="/products/custom-rubber-molded-parts">Rubber Molded Parts</Link>
              <Link to="/products/inflatable-seals">Inflatable Seals</Link>
              <Link to="/products/ptfe-products">PTFE Products</Link>
              <Link to="/products/die-cut-gaskets">Die-Cut Gaskets</Link>
              <Link to="/rubber-sheets-native">Rubber Sheets &amp; Fabrics</Link>
            </div>
          </div>

          <div className="item"
            onMouseEnter={() => setOpenMenu('knowledge')}
            onMouseLeave={() => setOpenMenu('')}>
            <Link to="/knowledge" className={cur('knowledge')} onClick={() => toggleMenu('knowledge')}>
              Knowledge <span className="chev">▾</span>
            </Link>
            <div className={`menu menu--kmenu ${openMenu === 'knowledge' ? 'is-open' : ''}`}>
              <div className="kcol">
                <div className="kgroup">
                  <span className="kgh">Calculators</span>
                  <Link to="/products/standard-o-rings/metric-o-ring-tolerances-calculator">Metric O-Ring Size Calculator</Link>
                </div>
                <div className="kgroup">
                  <span className="kgh">Guides &amp; reference</span>
                  <Link to="/material-selection-guide">Material Selection Guide</Link>
                  <Link to="/chemical-compatibility">Chemical Compatibility</Link>
                  <Link to="/rma-tolerance-chart">RMA Tolerance Chart</Link>
                  <Link to="/products/custom-rubber-molded-parts/custom-molding-guide">Custom Molding Guide</Link>
                  <Link to="/products/oil-seals/oil-seal-size-chart">Oil Seal Size Chart</Link>
                  <Link to="/products/rubber-diaphragms/diaphragm-design-guide">Diaphragm Design Guide</Link>
                </div>
              </div>
              <div className="kcol">
                <div className="kgroup">
                  <span className="kgh">O-Ring size charts</span>
                  <Link to="/products/standard-o-rings/as568-o-ring-size-chart">AS568 O-Ring Size Chart</Link>
                  <Link to="/products/standard-o-rings/metric-o-ring-size-cross-reference-table">Metric Size Cross-Reference</Link>
                  <Link to="/products/standard-o-rings/iso-3601-metric-o-rings">ISO 3601 Metric</Link>
                  <Link to="/products/standard-o-rings/iso-6149-metric-o-rings-size-chart">ISO 6149 Metric</Link>
                  <Link to="/products/standard-o-rings/bs-1806-metric-sizes">BS 1806 Metric</Link>
                  <Link to="/products/standard-o-rings/bs-4518-metric-o-rings">BS 4518 Metric</Link>
                  <Link to="/products/standard-o-rings/din-3771-metric-o-rings">DIN 3771 Metric</Link>
                  <Link to="/products/standard-o-rings/jis-b-2401-metric-o-rings">JIS B 2401 Metric</Link>
                  <Link to="/products/standard-o-rings/nf-t-47-501-metric-o-rings">NF T 47-501 Metric</Link>
                  <Link to="/products/standard-o-rings/sms-1586-metric-o-rings">SMS 1586 Metric</Link>
                  <Link to="/products/standard-o-rings/generic-metric-o-rings">Generic Metric O-Rings</Link>
                </div>
              </div>
              <div className="kcol">
                <div className="kgroup">
                  <span className="kgh">Catalogs</span>
                  <a href="/wp-content/uploads/2023/08/ARC_Pneumatic_Seals_Catalog_08102023.pdf" target="_blank" rel="noreferrer">Pneumatic Seals Catalog</a>
                  <a href="/wp-content/uploads/2023/08/ARC_Rotary_and_Oil_Seals_Catalog_08102023.pdf" target="_blank" rel="noreferrer">Rotary &amp; Oil Seals Catalog</a>
                  <a href="/wp-content/uploads/2021/12/ARC_brochure_2022.pdf" target="_blank" rel="noreferrer">Company Brochure</a>
                </div>
                <div className="kgroup">
                  <span className="kgh">Certifications</span>
                  <Link to="/certifications">ISO &amp; IATF Certificates</Link>
                  <Link to="/knowledge">All Knowledge &amp; Tools</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item"
            onMouseEnter={() => setOpenMenu('elastomers')}
            onMouseLeave={() => setOpenMenu('')}>
            <Link to="/elastomers" className={cur('elastomers')} onClick={() => toggleMenu('elastomers')}>
              Elastomers <span className="chev">▾</span>
            </Link>
            <div className={`menu ${openMenu === 'elastomers' ? 'is-open' : ''}`}>
              <Link to="/elastomers/epdm">EPDM</Link>
              <Link to="/elastomers/silicone">Silicone</Link>
              <Link to="/elastomers/fluorosilicone">Fluorosilicone</Link>
              <Link to="/elastomers/fkm-viton">FKM / Viton</Link>
              <Link to="/elastomers/nbr-nitrile">NBR / Nitrile</Link>
              <Link to="/elastomers/hnbr">HNBR</Link>
              <Link to="/elastomers/ffkm-kalrez">FFKM / Kalrez</Link>
              <Link to="/elastomers/neoprene">Neoprene</Link>
              <Link to="/elastomers/sbr">SBR</Link>
              <Link to="/elastomers/tpv-santoprene">TPV / Santoprene</Link>
              <Link to="/elastomers/aflas">AFLAS</Link>
              <Link to="/elastomers/ptfe">PTFE</Link>
            </div>
          </div>

          <div className="item"
            onMouseEnter={() => setOpenMenu('industries')}
            onMouseLeave={() => setOpenMenu('')}>
            <a href="#industries" className={cur('industries')} onClick={() => toggleMenu('industries')}>
              Industries <span className="chev">▾</span>
            </a>
            <div className={`menu menu--wide ${openMenu === 'industries' ? 'is-open' : ''}`}>
              <Link to="/industries/aerospace">Aerospace</Link>
              <Link to="/industries/automotive">Automotive</Link>
              <Link to="/industries/oil-gas">Oil &amp; Gas</Link>
              <Link to="/industries/medical-pharma">Medical &amp; Pharma</Link>
              <Link to="/industries/food-dairy">Food &amp; Dairy</Link>
              <Link to="/industries/marine">Marine</Link>
              <Link to="/industries/defense">Defense</Link>
              <Link to="/industries/agriculture">Agriculture</Link>
              <Link to="/industries/railways">Railways</Link>
              <Link to="/industries/renewable-energy">Renewable Energy</Link>
            </div>
          </div>

          <Link to="/about" className={cur('about')}>About Us</Link>
          <Link to="/contact" className={cur('contact')}>Contact Us</Link>

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
