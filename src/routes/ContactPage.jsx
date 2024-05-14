import React from 'react'
import NavBar from 'src/components/custom/NavBar'
import ContactUs from './Contact/ContactUs'
import ContactFooter from './Contact/ContactFooter'
import Footer from '../custom/Footer'

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
