import ContactPage from './components/Routes/ContactPage';
import HomePage from './components/Routes/HomePage';
import ProductsList from './components/Routes/ProductsList';
import About from './components/Routes/About';
import Services from './components/Routes/services';
import TermsOfUse from './components/Routes/TermsOfUse';
import ProductPage from './components/Routes/Products/ProductsPage';
import ProductDetailPage from './components/Routes/Products/ProductDetailPage';
import PrecisionFarming from './components/Routes/PrecisionFarming';
import ScrollToTop from './components/animations/ScrollToTop';
import FAQ from './components/Routes/FAQ';
import Cookies from './components/Routes/Cookies';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path = "/" element={<HomePage />}></Route>
        <Route  path = "Trade" element={<ProductsList />}></Route>
        <Route  path = "ProductsList" element={<ProductsList />}></Route>
        <Route  path = "Services" element={<Services />}></Route>
        <Route  path = "About" element={<About />}></Route>
        <Route  path = "Contact" element={<ContactPage />}></Route>
        <Route  path = "TermsOfUse" element={<TermsOfUse />}></Route>
        <Route  path = "Products" element={<ProductPage />}></Route>
        <Route  path = "ProductDetailPage" element={<ProductDetailPage />}></Route>
        <Route  path = "PrecisionFarming" element={<PrecisionFarming />}></Route>
        <Route  path = "FAQ" element={<FAQ />}></Route>
        <Route  path = "Cookies" element={<Cookies />}></Route>
      </Routes>
    </Router>
  )
}

export default App
