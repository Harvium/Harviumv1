// Contact page

import React from 'react'
import NavBar from "/src/layouts/NavBar"
import ContactUs from "./_components/ContactUs"
import ContactFooter from "./_components/ContactFooter"
import Footer from "/src/layouts/Footer"

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactUs />
      <ContactFooter />
      <Footer />
    </>
  )
}
