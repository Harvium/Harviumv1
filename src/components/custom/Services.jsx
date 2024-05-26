import React from 'react'
import { Link } from 'react-router-dom';


export default function Services() {
    return (

        <div className='bg-background-primary text-white lg:px-28 px-6 py-16'>
            <h1 className='flex justify-center font-bold text-4xl mb-12'>Usługi, które oferujemy</h1>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <h2 className="text-2xl font-bold">Platforma Handlowa</h2>
                    <p className='mt-2 non-italic text-lg h-auto lg:h-40'>Budujemy najbardziej zaawansowaną platformę do handlu produktami spożywczymi i przemysłowymi na świecie</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-6'>
                    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <h2 className="text-2xl font-bold">Tworzymy rynek</h2>
                    <p className='mt-2 non-italic text-lg h-auto lg:h-40'>Łączymy dostawców z potencjalnymi rynkami zbytu, tworząc przy tym płynny i niezawodny rynek</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-6'>
                    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <h2 className="text-2xl font-bold">Przetwarzamy dane</h2>
                    <p className='mt-2 non-italic text-lg h-auto lg:h-40'>Dzięki nam szybciej zauważysz nadchodzące trendy oraz uzyskasz dostęp do rzetelnych informacji</p>
                </div>
            </div>
        </div>



    )
}
