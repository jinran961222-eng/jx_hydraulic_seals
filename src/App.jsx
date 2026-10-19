import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Knowledge from './pages/Knowledge.jsx'
import Elastomers from './pages/Elastomers.jsx'
import Aerospace from './pages/Aerospace.jsx'
import Contact from './pages/Contact.jsx'
import Orings from './pages/Orings.jsx'
import StandardOrings from './pages/StandardOrings.jsx'
import Oilseals from './pages/Oilseals.jsx'
import Extruded from './pages/Extruded.jsx'
import Inflatable from './pages/Inflatable.jsx'
import Diecut from './pages/Diecut.jsx'
import Diaphragms from './pages/Diaphragms.jsx'
import Molded from './pages/Molded.jsx'
import Pffe from './pages/Pffe.jsx'
import RubberSheets from './pages/RubberSheets.jsx'
import MetricToleranceCalculator from './pages/MetricToleranceCalculator.jsx'
import MaterialSelectionGuide from './pages/MaterialSelectionGuide.jsx'
import CustomMoldingGuide from './pages/CustomMoldingGuide.jsx'
import DiaphragmDesignGuide from './pages/DiaphragmDesignGuide.jsx'
import OilSealSizeChart from './pages/OilSealSizeChart.jsx'
import RmaToleranceChart from './pages/RmaToleranceChart.jsx'
import Certifications from './pages/Certifications.jsx'
import ChemicalCompatibility from './pages/ChemicalCompatibility.jsx'
import As568SizeChart from './pages/As568SizeChart.jsx'
import Iso3601 from './pages/Iso3601.jsx'
import Epdm from './pages/Epdm.jsx'
import { Silicone, Fluorosilicone, Fkm, Nbr, Hnbr, Ffkm, Neoprene, Sbr, Tpv, Aflas, Ptfe } from './pages/ElastomersAll.jsx'
import { Automotive, OilGas, MedicalPharma, FoodDairy, Marine, Defense, Agriculture, Railways, RenewableEnergy } from './pages/IndustriesAll.jsx'
import { Bs1806, Bs4518, Din3771, Nft47501, Sms1586, Iso6149, Generic, CrossReference, Jis2401 } from './pages/SizeCharts.jsx'

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
      <Route path="/industries/automotive" element={<Automotive />} />
      <Route path="/industries/oil-gas" element={<OilGas />} />
      <Route path="/industries/medical-pharma" element={<MedicalPharma />} />
      <Route path="/industries/food-dairy" element={<FoodDairy />} />
      <Route path="/industries/marine" element={<Marine />} />
      <Route path="/industries/defense" element={<Defense />} />
      <Route path="/industries/agriculture" element={<Agriculture />} />
      <Route path="/industries/railways" element={<Railways />} />
      <Route path="/industries/renewable-energy" element={<RenewableEnergy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/o-rings" element={<Orings />} />
      <Route path="/products/standard-o-rings" element={<StandardOrings />} />
      <Route path="/products/oil-seals" element={<Oilseals />} />
      <Route path="/products/extruded-rubber" element={<Extruded />} />
      <Route path="/products/inflatable-seals" element={<Inflatable />} />
      <Route path="/products/die-cut-gaskets" element={<Diecut />} />
      <Route path="/products/rubber-diaphragms" element={<Diaphragms />} />
      <Route path="/products/custom-rubber-molded-parts" element={<Molded />} />
      <Route path="/products/ptfe-products" element={<Pffe />} />
      <Route path="/rubber-sheets-native" element={<RubberSheets />} />
      <Route path="/products/standard-o-rings/metric-o-ring-tolerances-calculator" element={<MetricToleranceCalculator />} />
      <Route path="/material-selection-guide" element={<MaterialSelectionGuide />} />
      <Route path="/chemical-compatibility" element={<ChemicalCompatibility />} />
      <Route path="/products/standard-o-rings/as568-o-ring-size-chart" element={<As568SizeChart />} />
      <Route path="/elastomers/epdm" element={<Epdm />} />
      <Route path="/elastomers/silicone" element={<Silicone />} />
      <Route path="/elastomers/fluorosilicone" element={<Fluorosilicone />} />
      <Route path="/elastomers/fkm-viton" element={<Fkm />} />
      <Route path="/elastomers/nbr-nitrile" element={<Nbr />} />
      <Route path="/elastomers/hnbr" element={<Hnbr />} />
      <Route path="/elastomers/ffkm-kalrez" element={<Ffkm />} />
      <Route path="/elastomers/neoprene" element={<Neoprene />} />
      <Route path="/elastomers/sbr" element={<Sbr />} />
      <Route path="/elastomers/tpv-santoprene" element={<Tpv />} />
      <Route path="/elastomers/aflas" element={<Aflas />} />
      <Route path="/elastomers/ptfe" element={<Ptfe />} />
      <Route path="/products/standard-o-rings/iso-3601-metric-o-rings" element={<Iso3601 />} />
      <Route path="/products/standard-o-rings/metric-o-ring-size-cross-reference-table" element={<CrossReference />} />
      <Route path="/products/standard-o-rings/iso-6149-metric-o-rings-size-chart" element={<Iso6149 />} />
      <Route path="/products/standard-o-rings/bs-1806-metric-sizes" element={<Bs1806 />} />
      <Route path="/products/standard-o-rings/bs-4518-metric-o-rings" element={<Bs4518 />} />
      <Route path="/products/standard-o-rings/din-3771-metric-o-rings" element={<Din3771 />} />
      <Route path="/products/standard-o-rings/jis-b-2401-metric-o-rings" element={<Jis2401 />} />
      <Route path="/products/standard-o-rings/nf-t-47-501-metric-o-rings" element={<Nft47501 />} />
      <Route path="/products/standard-o-rings/sms-1586-metric-o-rings" element={<Sms1586 />} />
      <Route path="/products/standard-o-rings/generic-metric-o-rings" element={<Generic />} />
      <Route path="/rma-tolerance-chart" element={<RmaToleranceChart />} />
      <Route path="/products/custom-rubber-molded-parts/custom-molding-guide" element={<CustomMoldingGuide />} />
      <Route path="/products/oil-seals/oil-seal-size-chart" element={<OilSealSizeChart />} />
      <Route path="/products/rubber-diaphragms/diaphragm-design-guide" element={<DiaphragmDesignGuide />} />
      <Route path="/certifications" element={<Certifications />} />
    </Routes>
  )
}
