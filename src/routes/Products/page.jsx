import NavBar from "/src/layouts/NavBar";
import Footer from "/src/layouts/Footer";
import ContactUs from "/src/routes/Contact/_components/ContactUs";
import PriceTable from "/src/components/custom/pricelists/PriceTable.jsx";



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