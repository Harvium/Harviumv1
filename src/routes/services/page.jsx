// Services main page

import NavBar from "/src/layouts/NavBar";
import Footer from "/src/layouts/Footer";
import { Helmet } from "react-helmet"
import ServicesDescription2 from "./servicesDescription/ServicesDescription2";
import ServicesDescription from "./servicesDescription/ServicesDescription";
import ScrollingBar from "/src/layouts/ScrollingBar"

const Services = () => {
  return (
    <>
    <Helmet>
        <title>Usługi</title>
        <meta name="description" content="Oferujemy kompleksową obsługę przedsiębiorstw rolniczych, spożywczych, handlowych i przemysłowych. Budujemy najbardziej zaawansowaną platformę na świecie do handlu produktami rolniczymi i przemysłowymi. Dostarczamy dane, monitorujemy ceny oraz tworzymy rynek." />
        <link rel='canonical' href='/Services'></link>
      </Helmet>
      <NavBar />
        <div className='bg-darkGrey font-inter text-white text-center font-bold'>
            <ServicesDescription2 />
            <ServicesDescription />
           
        </div>
      <Footer />
      <ScrollingBar />
    </>
  )
}
export default Services
