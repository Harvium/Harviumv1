import React from 'react'
import { Helmet } from "react-helmet"
import NavBar from '/src/layouts/NavBar.jsx'
import FAQ1 from './_components/FAQ'
import Footer from '/src/layouts/Footer.jsx'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="W tej sekcji znajdziesz najczęściej zadawane pytania przez naszych klientów. Jeśli jednak, któraś z odpowiedzi nie rozwiązuje Twoich wątpliwości to skontaktuj się z nami." />
        <link rel='canonical' href='/FAQ'></link>
      </Helmet>
      <NavBar />
      <FAQ1 />
      <Footer />
    </>
  )
}
