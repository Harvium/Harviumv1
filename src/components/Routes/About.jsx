import React from 'react'
import NavBar from '../custom/NavBar'
import Footer from '../custom/Footer'
import ServiceMap from "@/components/Routes/About us/serviceMap/serviceMap.jsx";
import kimjestesmyImg from '/src/assets/kimjestesmy.png';

export default function About() {
  return (
    <>
    <NavBar />
    <div className="bg-background-primary min-h-[850px] flex md:flex-row flex-col">
        <div className="flex flex-col md:w-3/5 md:px-4 text-white">
          <div className='flex flex-col mx-2 md:ml-10 mt-10'>
            <h1 className='lg:text-5xl text-4xl font-bold items-center mt-14 md:gap-6'>O nas</h1>
            <div>
              <h2 className='text-3xl mt-10 font-semibold '>Kim jesteśmy?</h2>
              <p className='text-2xl mt-2 md:ml-3 non-italic'>Jesteśmy firmą handlową, która specjalizuje się w realizacji transakcji 
              z branży rolniczej, spożywczej oraz surowcowej.  Mamy wszystko czego twój biznes potrzebuje do zawierania bezpiecznych
               i zyskownych transakcji. </p>
            </div>
            <div>
              <h2 className='text-3xl mt-10 font-semibold'>Czym dokładnie się zajmujemy?</h2>
              <p className='text-2xl mt-2 md:ml-3 non-italic'>Naszą misją jest tworzenie miejsca w którym popyt spotyka podaż. 
              Obecnie zajmujemy się obsługą transakcji dla naszych klientów. Budujemy również sieć zweryfikowanych dostawców 
              oraz nabywców, dla stworzenia bezpiecznego, płynnego rynku. Jeżeli chciałbyś sprzedać bądź kupić towar w 
              hurtowych ilościach to nie mogłeś lepiej trafić :) </p>
            </div>

          </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src={kimjestesmyImg} className='scale-75'></img>
        </div>  
    </div>
    <ServiceMap />
    <Footer />
    </>
  )
}