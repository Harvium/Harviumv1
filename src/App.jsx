import ContactPage from './components/Routes/ContactPage';
import HomePage from './components/Routes/HomePage';
import ProductsList from './components/Routes/ProductsList';
import About from './components/Routes/About';
import Services from './components/Routes/services';
import TermsOfUse from './components/Routes/TermsOfUse';
import ProductPage from './components/Routes/Products/ProductsPage';
import ProductDetailPage from './components/Routes/Products/ProductDetailPage';
import PrecisionFarming from './components/Routes/PrecisionFarming';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<HomePage />}></Route>
        <Route exact path = "Trade" element={<ProductsList />}></Route>
        <Route exact path = "ProductsList" element={<ProductsList />}></Route>
        <Route exact path = "Services" element={<Services />}></Route>
        <Route exact path = "About" element={<About />}></Route>
        <Route exact path = "Contact" element={<ContactPage />}></Route>
        <Route exact path = "TermsOfUse" element={<TermsOfUse />}></Route>
        <Route exact path = "Products" element={<ProductPage />}></Route>
        <Route exact path = "ProductDetailPage" element={<ProductDetailPage />}></Route>
        <Route exact path = "PrecisionFarming" element={<PrecisionFarming />}></Route>
      </Routes>
    </Router>
  )
}

export default App
