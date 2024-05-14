import NavBar from "src/components/custom/NavBar";
import Presentation from "./Home/Content/Presentation";
import PriceTable from "src/components/custom/PriceTable";
import Footer from "src/components/custom/Footer";
import Cont0 from "./Home/Content/Cont0";
import Cont2 from "./Home/Content/Cont2";
import Oferta from "./Other/Notused/Offer";
import ContactUs from "./Contact/ContactUs";

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