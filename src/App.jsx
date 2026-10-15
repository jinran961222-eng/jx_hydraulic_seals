import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Knowledge from './pages/Knowledge.jsx'
import Elastomers from './pages/Elastomers.jsx'
import Aerospace from './pages/Aerospace.jsx'

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
    </Routes>
  )
}
