import NavBar from "/src/layouts/NavBar";
import Presentation from "./Home/Content/Presentation";
import PriceTable from "/src/components/custom/pricelists/PriceTable";
import Footer from "/src/layouts/Footer";
import Cont0 from "./Home/Content/Cont0";
import Cont2 from "./Home/Content/Cont2";
// Not used import - import Oferta from "./Other/Notused/Offer";
import ContactUs from "./Contact/_components/ContactUs";

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Cont0 />
        <Presentation />
        <Cont2 />
        <PriceTable />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default App