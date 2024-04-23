import NavBar from "../custom/NavBar";
import Footer from "../custom/Footer";
import ContactUs from "./Contact/ContactUs";
import PriceTable from "../custom/PriceTable";



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