import NavBar from '../custom/NavBar.jsx'
import Footer from '../custom/Footer.jsx'
import ServicesDescription2 from "@/components/Routes/services/servicesDescription/ServicesDescription0.jsx";
import ServicesDescription from "/src/components/Routes/services/servicesDescription/ServicesDescription.jsx";

const Services = () => {
  return (
    <>
      <NavBar />
        <div className='bg-darkGrey font-inter text-white text-center font-bold'>
            <ServicesDescription2 />
            <ServicesDescription />
           
        </div>
      <Footer />
    </>
  )
}
export default Services
