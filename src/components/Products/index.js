import { useParams } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';

const Products = () => {
  const { id } = useParams();
  return (
    <>
      {id ? <ProductDetails /> : <ProductsList />}
    </>
  );
};

export default Products;
