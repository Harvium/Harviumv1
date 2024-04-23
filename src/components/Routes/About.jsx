import React from 'react'
import NavBar from '../custom/NavBar'
import Footer from '../custom/Footer'
import ServiceMap from "@/components/Routes/About us/serviceMap/serviceMap.jsx";
import kimjestesmyImg from '/src/assets/kimjestesmy.png';


export default function About() {
  return (
    <>
    <NavBar />
    <section className='bg-background-primary'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src={kimjestesmyImg}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-2xl font-bold sm:text-4xl text-white">Kim jesteśmy?</h2>

        <p className="mt-4 text-white">
        Jesteśmy firmą handlową, która specjalizuje się w realizacji transakcji  z branży rolniczej, spożywczej oraz surowcowej.  Mamy wszystko czego twój biznes potrzebuje do zawierania bezpiecznych i zyskownych transakcji.
        </p>
        <h2 className="text-2xl font-bold sm:text-4xl text-white">Czym się zajmujemy?</h2>

        <p className="mt-4 text-white">
        Naszą misją jest tworzenie miejsca w którym popyt spotyka podaż. Obecnie zajmujemy się obsługą transakcji dla naszych klientów. Budujemy również sieć zweryfikowanych dostawców  oraz nabywców, dla stworzenia bezpiecznego, płynnego rynku. Jeżeli chciałbyś sprzedać bądź kupić towar w hurtowych ilościach to nie mogłeś lepiej trafić :)

        </p>
        
      </div>
    </div>
  </div>
</section>

    <ServiceMap />
    <Footer />
    </>
  )
}