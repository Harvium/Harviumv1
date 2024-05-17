import NavBar from 'src/components/custom/NavBar.jsx'
import Footer from '@/layouts/Footer.jsx'
import ServicesDescription2 from "descriptions/ServicesDescription2.jsx";
import ServicesDescription from "descriptions/ServicesDescription.jsx";

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
