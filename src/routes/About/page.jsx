// About us page

import React from 'react'
import NavBar from "/src/layouts/NavBar"
import Footer from "/src/layouts/Footer"
import ServiceMap from "./_components/serviceMap";
import { Helmet } from "react-helmet"
import Aboutus from "./_components/Aboutus";
import ScrollingBar from "/src/layouts/ScrollingBar"
import MarketShare from './_components/MarketShare';
import WhatWeDo from './_components/WhatWeDo';
import Timeline from './_components/Timeline';
import { Team } from './_components/Team';

export default function About() {
  return (
    <>
    <Helmet>
        <title>O nas</title>
        <meta name="description" content="Naszą misją jest tworzenie miejsca w którym popyt spotyka podaż na równych warunkach. Dostarczamy bieżące informacje, edukujemy i wprowadzamy innowacyjne rozwiązania. Obecnie zajmujemy się także obsługą transakcji dla naszych klientów i budujemy sieć zweryfikowanych dostawców oraz nabywców, dla stworzenia bezpiecznego i płynnego rynku." />
        <link rel='canonical' href='/About'></link>
    </Helmet>
    <NavBar />
    <WhatWeDo />
    <Aboutus />

    <MarketShare />
    <Timeline />
    <ServiceMap />
    <Footer />
    <ScrollingBar />
    </>
  )
}