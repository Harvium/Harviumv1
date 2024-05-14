import NavBar from "src/components/custom/NavBar";
import Footer from "src/components/custom/Footer";
import ContactUs from "./Contact/ContactUs";
import PriceTable from "src/components/custom/PriceTable";



function ProductsList() {

  return (
    <>
      <div>
        <NavBar />
        <PriceTable />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default ProductsList