import NavBar from "src/components/custom/NavBar";
import Footer from "@/layouts/Footer";
import ContactUs from "./Contact/_components/ContactUs";
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