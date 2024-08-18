import NavBar from "/src/layouts/NavBar";
import { Helmet } from "react-helmet"
import Footer from "/src/layouts/Footer";
import Cont3 from "/src/routes/PrecisionFarming/_components/Cont3.jsx";
import Cont4 from "/src/routes/PrecisionFarming/_components/Cont4.jsx";
import Cont5 from "/src/routes/PrecisionFarming/_components/Cont5.jsx";
import Cont5b from "/src/routes/PrecisionFarming/_components/Cont5b.jsx";
import Cont6 from "/src/routes/PrecisionFarming/_components/Cont6.jsx";
import Map from "/src/routes/PrecisionFarming/_components/Map.jsx";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ScrollingBar from "/src/layouts/ScrollingBar"

function PrecisionFarming() {

  return (
    <>
      <div>
      <Helmet>
        <title>PrecisionFarming</title>
        <meta name="description" content="Zapewniamy przyjazny dla każdego dostęp do danych z satelitów Sentinel 2 i innych, które są nieocenionnym narzędziem w rękach rolników, handlowców produktów rolnych oraz innych uczestników agrobiznesu." />
        <link rel='canonical' href='/PrecisionFarming'></link>
      </Helmet>
        <NavBar />
        <Cont3 />
        <Cont4 />
        <Cont5 />
       
        <Cont6 /> 
        <Footer />
        <ScrollingBar />
      </div>
    </>
  )
}

export default PrecisionFarming

// test1
