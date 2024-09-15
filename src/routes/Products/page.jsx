import NavBar from "/src/layouts/NavBar";
import { Helmet } from "react-helmet"
import Footer from "/src/layouts/Footer";
import ContactUs from "/src/routes/Contact/_components/ContactUs";
import PriceTable from "/src/components/custom/pricelists/PriceTable.jsx";
import ScrollingBar from "/src/layouts/ScrollingBar"



function ProductsList() {

  return (
    <>
      <div>
      <Helmet>
        <title>Produkty</title>
        <meta name="description" content="W naszej ofercie znajduje się wiele popularnych produktów rolniczych, mleczarskich oraz indeksów. Handlujemy również półproduktami oraz indeksami. Na chwilę obecną prowadzimy tylko indywidualną obsługę. Skontaktuj się z nami." />
        <link rel='canonical' href='/Trade'></link>
      </Helmet>
        <NavBar />
        <PriceTable />
        <Footer />
        <ScrollingBar />
      </div>
    </>
  )
}

export default ProductsList