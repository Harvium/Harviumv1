import React from 'react'
import NavBar from "/src/layouts/NavBar";
import Footer from "/src/layouts/Footer";
import { Helmet } from "react-helmet"
import TermsOfUse1 from './_components/TermsOfUse1'

export default function TermsOfUse() {
  return (
    <div>
      <Helmet>
        <title>Terms of Use</title>
        <meta name="description" content="W przejrzysty sposób przedstawiamy zasady naszej działalności." />
        <link rel='canonical' href='/TermsOfUse'></link>
      </Helmet>
      <NavBar />
      <TermsOfUse1 />
      <Footer />
    </div>
  )
}
