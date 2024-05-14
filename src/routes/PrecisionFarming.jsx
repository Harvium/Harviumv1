import NavBar from "../custom/NavBar";
import Footer from "../custom/Footer";
import Cont3 from "../Routes/PrecisionFarming/Cont3.jsx";
import Cont4 from "../Routes/PrecisionFarming/Cont4.jsx";
import Cont5 from "../Routes/PrecisionFarming/Cont5.jsx";
import Cont5b from "../Routes/PrecisionFarming/Cont5b.jsx";
import Cont6 from "../Routes/PrecisionFarming/Cont6.jsx";
import Map from "../Routes/PrecisionFarming/Map.jsx";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function PrecisionFarming() {

  return (
    <>
      <div>
        <NavBar />
        <Cont3 />
        <Cont4 />
        <Cont5 />
        <Cont5b />
        <Cont6 /> 
        <Footer />
      </div>
    </>
  )
}

export default PrecisionFarming

// test1
