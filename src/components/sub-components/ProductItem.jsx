import { useNavigate } from 'react-router-dom';
import product from '/src/assets/product.svg';
import product2 from '/src/assets/product2.svg';

const ProductItem = ({ name, type, price, image }) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-4' onClick={() => navigate('../Contact')}>
      <img src={image} alt='product' />

      <div className='flex flex-col gap-2'>
        <div>
          <p className='text-xl font-bold mt-2 non-italic'>{name}</p>
          <p className='non-italic'>{type}</p>
        </div>

        <p className='text-xl font-bold mt-2 non-italic'>{price}</p>
      </div>

      <button className='rounded-full border border-black py-2 px-5 bg-white text-black font-bold'>Sprawdź</button>
    </div>
  );
};

export default ProductItem;
