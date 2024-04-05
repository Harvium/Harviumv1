import React from 'react'

export default function ListaUlug() {
  return (
    <div className="bg-background-primary flex flex-col justify-center gap-20 px-6">
        <div className="flex flex-col justify-center px-4 text-white pt-16 text-center">
            <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>Usługi</h2>
            <p className='text-2xl mt-2 non-italic'>Dokładnie tutaj będzie opis naszych usług</p>
        </div>
        <div className='flex flex-row justify-center gap-16 mb-10 mx-5 flex-wrap'>
          <div className='flex flex-col text-white text-center items-center w-80'>
            <img src='src/assets/Ikonaplatforma.png' className='w-[75px] h-[75px]'></img>
            <h2 className='text-xl font-semibold mt-1 mb-1 w-64 h-14'>Platforma handlowa</h2>
            <p className='text-lg font-light'>Budujemy najbardziej zaawansowaną platformę do handlu produktami spożywczymi i przemysłowymi na świecie</p>
          </div>
          <div className='flex flex-col text-white text-center items-center w-80'>
            <img src='src/assets/Ikonarynek.png' className='w-[75px] h-[75px]'></img>
            <h2 className='text-xl font-semibold mt-1 mb-1 w-64 h-14'>Tworzymy rynek</h2>
            <p className='text-lg font-light'>Łączymy dostawców z potencjalnymi rynkami zbytu</p>
          </div>
          <div className='flex flex-col text-white text-center items-center w-80'>
            <img src='src/assets/Ikonadane.png' className='w-[75px] h-[75px]'></img>
            <h2 className='text-xl font-semibold mt-1 mb-1 w-64 h-14'>Przetwarzamy dane</h2>
            <p className='text-lg font-light'>Dzięki nam szybciej zauważysz nadchodzące trendy oraz uzyskasz dostęp do rzetelnych informacji</p>
          </div>
          <div className='flex flex-col text-white text-center items-center w-80'>
            <img src='src/assets/Ikonaceny.png' className='w-[75px] h-[75px]'></img>
            <h2 className='text-xl font-semibold mt-1 mb-1 w-64 h-14'>Monitorujemy ceny</h2>
            <p className='text-lg font-light'>Tworzymy monitoring cen produktów rolnych i przemysłowych na rynku europejskim</p>
          </div>
          <div className='flex flex-col text-white text-center items-center w-80'>
            <img src='src/assets/Ikonaszybka.png' className='w-[75px] h-[75px]'></img>
            <h2 className='text-xl font-semibold mt-1 mb-1 w-64 h-14'>Szybka i profesjonalna obsługa klienta</h2>
            <p className='text-lg font-light'>Dział Obsługi Klienta jest dostępny 24/7. Możesz się z nami skontaktować telefonicznie oraz mailowo</p>
          </div>
        </div>
    </div>
  )
}
