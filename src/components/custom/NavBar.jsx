import React from 'react'
// import { Button } from '../ui/button'

export default function NavBar() {
  return (
    <>
     <nav className="flex flex-col border-b-2 border-[#302242] sm:flex-row justify-between h-auto sm:h-20 bg-[#080E2D]">
      <div className="flex items-center justify-center  text-white mb-4 sm:mb-0">
     <a href="/"><img src='./src/assets/Harvium-Logo.png' className="object-contain h-20 w-[150px] lg:pl-5 pl-0 lg:pt-0 pt-4"></img></a>
    </div>
    <div className="flex-grow flex flex-col sm:flex-row items-center justify-between">
    <div className="flex justify-center text-center flex-grow mb-4 sm:mb-0">
      <div className="flex flex-col lg:pl-5 sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
        <a href="Handluj" className="text-white hover:text-yellow-300">
          Handluj
        </a>
        <a href="Uslugi" className="text-white hover:text-yellow-300">
          Usługi
        </a>
        <a href="About" className="text-white hover:text-yellow-300">
          O nas
        </a>
        <a href="Products" className="text-white hover:text-yellow-300">
          Produkty
        </a>
        <a href="Contact" className="text-white hover:text-yellow-300">
          Kontakt
        </a>
      </div>
    </div>
    <div className="flex lg:flex-row flex-col gap-2 items-center justify-center pb-5 lg:pb-0 lg:pr-5">
      <button className="transition ease-in-out duration-200 delay-50 md:w-28 w-80 text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        Logowanie
      </button>
      <button className="transition ease-in-out duration-200 delay-50 md:w-28 w-80 text-sm px-4 py-2 border bg-black rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        Załóż konto
      </button>
    </div>
  </div>
  </nav>
    </>

  )
}