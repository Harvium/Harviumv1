import NavBar from "/src/layouts/NavBar";
import Footer from "/src/layouts/Footer";
import Cont3 from "/src/routes/PrecisionFarming/_components/Cont3.jsx";
import Cont4 from "/src/routes/PrecisionFarming/_components/Cont4.jsx";
import Cont5 from "/src/routes/PrecisionFarming/_components/Cont5.jsx";
import Cont5b from "/src/routes/PrecisionFarming/_components/Cont5b.jsx";
import Cont6 from "/src/routes/PrecisionFarming/_components/Cont6.jsx";
import Map from "/src/routes/PrecisionFarming/_components/Map.jsx";
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
