import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../crud/products';
import { setProducts } from '../store/slices/product';

function useFetchProductsByCategory() {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await getProductsByCategory(category);

      await dispatch(setProducts(data.data));
      setLoading(false);
    };

    getProducts();
  }, [category, dispatch]);

  return { loading, category };
}

export default useFetchProductsByCategory;
