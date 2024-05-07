import { useNavigate } from 'react-router-dom';
import product from '/src/assets/product.svg';
import product1 from '/src/assets/product1.svg';
import product2 from '/src/assets/product2.svg';
import product3 from '/src/assets/product3.svg';
import product4 from '/src/assets/product4.svg';
import product5 from '/src/assets/product5.svg';
import product6 from '/src/assets/product6.svg';
import product7 from '/src/assets/product7.svg';
import product8 from '/src/assets/product8.svg';

const ProductItem = ({ name, type, price, image }) => {
  const navigate = useNavigate();

  let productImage;
  switch(image) {
    case 'product1':
      productImage = product1;
      break;
    case 'product2':
      productImage = product2;
      break;
    case 'product3':
      productImage = product3;
      break;
    case 'product4':
      productImage = product4;
        break;
    case 'product5':
      productImage = product5;
        break;    
    case 'product6':
      productImage = product6;
      break;
    case 'product7':
      productImage = product7;
      break;
    case 'product8':
      productImage = product8;
        break;
    default:
      productImage = product; // default image if none matches
  }

  return (
    <div className='flex flex-col gap-4' onClick={() => navigate('../Trade')}>
      <img src={productImage} alt='product' />
       {/* use productImage here */}
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
