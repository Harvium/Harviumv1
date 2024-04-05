import NavBar from '../../custom/NavBar.jsx'
import Footer from '../../custom/Footer.jsx'
import OurServices from "@/components/Routes/services/ourServices/ourServices.jsx";
import ServicesDescription from "@/components/Routes/services/servicesDescription/servicesDescription.jsx";
import ServiceMap from "@/components/Routes/services/serviceMap/serviceMap.jsx";

const Services = () => {
  return (
    <>
      <NavBar />
        <div className='bg-darkGrey font-inter text-white text-center font-bold'>
            <OurServices />
            <ServicesDescription />
            <ServiceMap />
        </div>
      <Footer />
    </>
  )
}
export default Services
