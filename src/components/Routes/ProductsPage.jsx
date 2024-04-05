import NavBar from '../custom/NavBar';
import Footer from '../custom/Footer';
import ProductTable from '../sub-components/ProductTable';
import ProductItem from '../sub-components/ProductItem';

import { products, productUsers } from './ProductData.js';

const ProductPage = () => {
  return (
    <>
      <NavBar />

      <div className='bg-background-primary'>
        <div className='flex flex-col justify-center px-5 md:px-16 py-16 md:py-28 text-white text-center'>
          <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
            Handluj
          </h2>
          <p className='text-2xl mt-2 non-italic'>
            Odkryj świat możliwości handlowych dzięki naszej intuicyjnej
            platformie.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center px-5 md:px-16 py-16 md:py-28 text-white text-center gap-20'>
          <div className='flex flex-col justify-center gap-4'>
            <p className='text-2xl mt-2 non-italic'>Odkryj</p>
            <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
              Kategorie
            </h2>
            <p className='text-2xl mt-2 non-italic'>
              Poznaj szeroką gamę produktów dostępnych do handlu
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-16'>
            {products.map((product) => (
              <ProductItem
                name={product.name}
                type={product.type}
                price={product.price}
                key={product.id}
              />
            ))}
          </div>

          <button className='border border-black py-3 px-6'>View all</button>
        </div>

        <div className='py-28 px-16 hidden md:flex'>
          <ProductTable data={productUsers} />
        </div>

        <div className='flex flex-col px-5 md:px-16 py-16 md:py-28 gap-20'>
          <div className='flex flex-col justify-center items-start gap-4 text-white'>
            <p className='text-base font-normal non-italic'>Connect</p>
            <div className='flex flex-col gap-6'>
              <h2 className='lg:text-5xl text-4xl font-bold'>
                Niezwykle intuicyjne
              </h2>
              <p className='text-lg non-italic'>
                Znajdź kupujących i sprzedających w pobliżu za pomocą naszej
                interaktywnej mapy.
              </p>
            </div>
          </div>

          <div>
            <img src='src/assets/map.png' alt='map' />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
