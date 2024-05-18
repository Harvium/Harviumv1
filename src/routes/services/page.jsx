// Services main page

import NavBar from "/src/layouts/NavBar";
import Footer from "/src/layouts/Footer";
import ServicesDescription2 from "./servicesDescription/ServicesDescription2";
import ServicesDescription from "./servicesDescription/ServicesDescription";

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
