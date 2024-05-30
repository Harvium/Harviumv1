import ButtonTrade from '/src/components/custom/Buttons/ButtonTrade';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const Cont0 = () => {
  useEffect(() => {
    const options = {
      strings: ['Platforma handlowa.', 'Najlepsze ceny.', 'Wsparcie dla rolników.', 'Rolnictwo precyzyjne.', 'Transparentność rynków.','Niezależne wiadomości.', 'Dla Ciebie.'],
      typeSpeed: 100,
      backDelay: 2000,
    };
    const typed = new Typed('.element', options);
    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative flex items-center h-screen bg-center bg-cover bg-background-primary">
      <div className="absolute inset-0 bg-opacity-70"></div>
      <div className="container mx-auto z-10">
        <div className="flex justify-center">
          <div className="lg:w-1/2">
            <div className="text-white text-center">
              <h1 className='text-4xl font-bold mb-0 mt-3'>Har<span className="text-yellow-500">v</span>ium</h1>
              <h2 className="text-5xl font-light leading-tight text-transform capitalize mb-0 mt-3"><span className="element font-bold"></span></h2>
              <div className="mt-4 flex justify-center">
                <Link to="/Trade" className="md:hidden">
                  <ButtonTrade>Handluj</ButtonTrade>
                </Link>
              </div>
              <h3 className="hidden md:block">Dowiedz się więcej</h3>
              <div className="mt-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer mx-auto" onClick={scrollToNextSection}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cont0;
