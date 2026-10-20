import Header from '../components/Header.jsx'
import HeroSlider from '../components/HeroSlider.jsx'
import Stats from '../components/Stats.jsx'
import Products from '../components/Products.jsx'
import MaterialBench from '../components/MaterialBench.jsx'
import WhyArc from '../components/WhyArc.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Industries from '../components/Industries.jsx'
import CtaBand from '../components/CtaBand.jsx'
import AboutSection from '../components/AboutSection.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/FloatingCta.jsx'
import usePageSEO from '../hooks/usePageSEO.js'

export default function Home() {
  usePageSEO({
    title: 'Custom Rubber Seals Manufacturer',
    description: 'JX Hydraulic Seals (Chinese Rubber Corp) is a leading custom rubber seals manufacturer. We produce O-Rings, Oil Seals, Molded Rubber Parts, PTFE Seals, Gaskets, Diaphragms, Extruded Profiles & more. ISO 9001 & IATF 16949 certified. Request a quote today.',
    keywords: 'custom rubber seals, o-rings manufacturer, oil seals, molded rubber parts, ptfe seals, rubber gaskets, silicone seals, epdm seals, fkm viton seals, hydraulic seals, industrial seals, rubber manufacturer china'
  })

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Stats />
        <Products />
        <MaterialBench />
        <WhyArc />
        <HowItWorks />
        <Industries />
        <CtaBand />
        <AboutSection />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
