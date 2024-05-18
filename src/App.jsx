import ContactPage from "./routes/Contact/page";
import HomePage from "./routes/HomePage";
import Trade from './routes/Products/page';
import About from './routes/About/page';
import Services from './routes/Services/page.jsx';
import TermsOfUse from './routes/TermsOfUse/page';
import ProductPage from './routes/Products/page';
 // This is legacy import import ProductDetailPage from './routes/Products/ProductDetailPage';
import PrecisionFarming from './routes/PrecisionFarming/page';
import ScrollToTop from '/src/components/animations/ScrollToTop';
import FAQ from './routes/FAQ/page';
import Cookies from './routes/Cookies/page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path = "/" element={<HomePage />}></Route>
        <Route  path = "Trade" element={<Trade />}></Route>
        <Route  path = "Services" element={<Services />}></Route>
        <Route  path = "About" element={<About />}></Route>
        <Route  path = "Contact" element={<ContactPage />}></Route>
        <Route  path = "TermsOfUse" element={<TermsOfUse />}></Route>
        <Route  path = "Products" element={<ProductPage />}></Route>
        <Route  path = "PrecisionFarming" element={<PrecisionFarming />}></Route>
        <Route  path = "FAQ" element={<FAQ />}></Route>
        <Route  path = "Cookies" element={<Cookies />}></Route>
      </Routes>
    </Router>
  )
}

export default App
