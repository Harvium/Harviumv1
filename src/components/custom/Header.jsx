import React from 'react'

export default function Header() {
  return (
    <header className="bg-background-primary flex lg:flex-row flex-col gap-6 items-center gap-4 sm:gap-20 text-white lg:px-14 px-0 py-16 ">
      <div className=" animate-slidein flex lg:flex-row flex-col justify-between gap-6 mb-4 sm:mb-0 w-full">
        <div className='flex flex-col justify-center px-10'>
            <h1 className=" lg:text-6xl text-4xl font-bold items-start gap-6 ">Handluj z nami</h1>
            <p className='text-xl mt-2 non-italic font-bold'>Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie. <br/> Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie.</p>
        <div className='flex flex-row'>
            <button className="flex flex-row items-center bg-black text-white px-6 py-2 rounded mt-4 mr-4"><p>Kup teraz</p><img src='src/assets/arrow.png' className='scale-50'></img></button>
            <button className="bg-transparent border-2 border-black text-white px-4 py-2 rounded mt-4 ml-2">Skontaktuj się z nami</button>
        </div>
      </div>
      <div className='lg:pr-[100px] pl-[100px] md:pl-0'>
        <img src="./src/assets/zboze.png" className='h-auto w-96'></img>
      </div>
      </div>
  
    </header>
  )
}
