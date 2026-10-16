import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Knowledge from './pages/Knowledge.jsx'
import Elastomers from './pages/Elastomers.jsx'
import Aerospace from './pages/Aerospace.jsx'
import Contact from './pages/Contact.jsx'
import Orings from './pages/Orings.jsx'
import Oilseals from './pages/Oilseals.jsx'
import Extruded from './pages/Extruded.jsx'
import Inflatable from './pages/Inflatable.jsx'
import Diecut from './pages/Diecut.jsx'
import Diaphragms from './pages/Diaphragms.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/elastomers" element={<Elastomers />} />
      <Route path="/industries/aerospace" element={<Aerospace />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/o-rings" element={<Orings />} />
      <Route path="/products/oil-seals" element={<Oilseals />} />
      <Route path="/products/extruded-rubber" element={<Extruded />} />
      <Route path="/products/inflatable-seals" element={<Inflatable />} />
      <Route path="/products/die-cut-gaskets" element={<Diecut />} />
      <Route path="/products/rubber-diaphragms" element={<Diaphragms />} />
    </Routes>
  )
}
