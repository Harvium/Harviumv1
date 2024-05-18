import NavBar from "/src/components/custom/NavBar";
import Footer from "/src/components/custom/Footer";
import Cont3 from "/src/routes/PrecisionFarming/Cont3.jsx";
import Cont4 from "/src/routes/PrecisionFarming/Cont4.jsx";
import Cont5 from "/src/routes/PrecisionFarming/Cont5.jsx";
import Cont5b from "/src/routes/PrecisionFarming/Cont5b.jsx";
import Cont6 from "/src/routes/PrecisionFarming/Cont6.jsx";
import Map from "/src/routes/PrecisionFarming/Map.jsx";
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
