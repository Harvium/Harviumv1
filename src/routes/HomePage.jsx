import NavBar from "/src/layouts/NavBar";
import { Helmet } from "react-helmet"
import Presentation from "./Home/Content/Presentation";
import PriceTable from "/src/components/custom/pricelists/PriceTable";
import Footer from "/src/layouts/Footer";
import Cont0 from "./Home/Content/Cont0";
import Cont2 from "./Home/Content/Cont2";
import ScrollingBar from "/src/layouts/ScrollingBar"

// Not used import - import Oferta from "./Other/Notused/Offer";
import ContactUs from "./Contact/_components/ContactUs";

function App() {

  return (
    <>
      <Helmet>
        <title>Harvium</title>
        <meta name="description" content="Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie. Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie." />
        <link rel='canonical' href='/'></link>
      </Helmet>
      <div>
        <NavBar />
        <Cont0 />
        <Presentation />
        <Cont2 />
       
        <PriceTable />
        <ContactUs />
        <Footer />
        <ScrollingBar />
      </div>
    </>
  )
}

export default App