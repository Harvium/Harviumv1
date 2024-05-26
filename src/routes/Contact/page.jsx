// Contact page
import { Helmet } from "react-helmet"
import React from 'react'
import NavBar from "/src/layouts/NavBar"
import ContactUs from "./_components/ContactUs"
import ContactFooter from "./_components/ContactFooter"
import Footer from "/src/layouts/Footer"

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt</title>
        <meta name="description" content="Poszukujesz najlepszej ceny na rynku? Potrzebujesz indywidualnej obsługi ? Skorzystaj z formularza, a my zatroszczymy się o profesjonalną obsługę Twojego zgłoszenia." />
        <link rel='canonical' href='/Contact'></link>
      </Helmet>
      <NavBar />
      <ContactUs />
      <ContactFooter />
      <Footer />
    </>
  )
}
