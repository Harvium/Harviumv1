// About us page

import React from 'react'
import NavBar from "/src/layouts/NavBar"
import Footer from "/src/layouts/Footer"
import ServiceMap from "./_components/serviceMap";
import Aboutus from "./_components/Aboutus";


export default function About() {
  return (
    <>
    <NavBar />
    <Aboutus />
    <ServiceMap />
    <Footer />
    </>
  )
}