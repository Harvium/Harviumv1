// About us page

import React from 'react'
import NavBar from '../custom/NavBar'
import Footer from '../custom/Footer'
import ServiceMap from "@/components/Routes/About us/serviceMap/serviceMap.jsx";
import Aboutus from "@/components/Routes/About us/Aboutus.jsx";


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