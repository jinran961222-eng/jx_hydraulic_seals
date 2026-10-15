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

export default function Home() {
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
