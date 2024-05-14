import ContactPage from '/src/routes/ContactPage.jsx';
import HomePage from '/src/routes/HomePage';
import ProductsList from '/src/routes/ProductsList';
import About from '/src/routes/About.jsx';
import Services from '/src/routes/services/Services.jsx';
import TermsOfUse from '/src/routes/TermsOfUse';
import ProductPage from '/src/routes/Products/ProductsPage';
import ProductDetailPage from '/src/routes/Products/ProductDetailPage';
import PrecisionFarming from '/src/routes/PrecisionFarming';
import ScrollToTop from '/src/components/animations/ScrollToTop';
import FAQ from '/src/routes/FAQ';
import Cookies from '/src/routes/Cookies';


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
