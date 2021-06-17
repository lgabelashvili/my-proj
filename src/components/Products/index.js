import { useParams } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';

const Products = () => {
  const { productsName, id } = useParams();
  console.log(productsName, id);
  return (
    <>
      {id ? <ProductDetails /> : <ProductsList />}
    </>
  );
};

export default Products;
