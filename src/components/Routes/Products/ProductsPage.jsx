import NavBar from '../../custom/NavBar';
import Footer from '../../custom/Footer';
import ProductTable from '../../sub-components/ProductTable';
import ProductItem from '../../sub-components/ProductItem';
import Reveal from "@/components/animations/reveal/reveal.jsx";
import Reveal2 from "@/components/animations/reveal/reveal2.jsx";
import { products, productUsers } from './ProductData.js';

const ProductPage = () => {
  return (
    <>
      <NavBar />

      <div className='bg-background-primary'>
        <div className='flex flex-col justify-center px-5 md:px-16 py-16 md:py-28 text-white text-center'>
          <h2 className='lg:text-3xl text-4xl font-bold items-center gap-6'>
            Handluj
          </h2>
          <Reveal>
          <p className='text-2xl mt-2 non-italic'>
            Odkryj świat możliwości handlowych z nami.
          </p>
          </Reveal>
        </div>
        <Reveal2>
        <div className='flex flex-col justify-center items-center px-5 md:px-16 py-16 md:py-28 text-white text-center gap-20'>
          <div className='flex flex-col justify-center '>
            <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
              Kategorie produktów
            </h2>
            <p className='text-2xl mt-2 non-italic'>
              Poznaj obecną gamę produktów dostępnych do handlu
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-16'>
            {products.map((product) => (
              <ProductItem
                name={product.name}
                key={product.id}
              />
            ))}
          </div>
          <a
                href="Contact"
                className="inline-flex items-center rounded-full bg-purple-900 px-20 py-4 text-medium font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                View all

              </a>
        </div>
        </Reveal2>
          <Reveal>
        <div className='flex flex-col px-5 md:px-16 py-16 md:py-28 gap-20'>
          <div className='flex flex-col justify-center items-start gap-4 text-white'>
            
            <div className='flex flex-col gap-6'>
              <h2 className='lg:text-5xl text-4xl font-bold'>
                Nie widzisz określonego produktu?
              </h2>
              <a href="Contact" className='text-lg non-italic'>
                Skontaktuj się z nami. Jesteśmy dla Ciebie.
              </a>
              <a
                href="Contact"
                className="inline-flex items-center rounded-full bg-purple-900 px-20 py-4 text-medium font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Kontakt

              </a>
            </div>
          </div>
          
{/*
          <div>
            <img src='src/assets/map.png' alt='map' />
          </div>
          */}
        </div>
        </Reveal>
      </div>
          

      <Footer />
    </>
  );
};

export default ProductPage;