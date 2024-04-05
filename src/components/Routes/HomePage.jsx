import NavBar from "../custom/NavBar";
import Header from "../custom/Header";
import Presentation from "../custom/Presentation";
import Services from "../custom/Services";
import PriceTable from "../custom/PriceTable";
import Footer from "../custom/Footer";
import Oferta from "../custom/Oferta";
import ListaUlug from "../custom/ListaUlug";
import ContactUs from "../custom/ContactUs";

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Header />
        <Presentation />
        <ListaUlug />
        <PriceTable />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default App