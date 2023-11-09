import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../crud/products';
import { setProduct } from '../store/slices/product';

function useFetchProduct() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data } = await getProduct(slug);

      await dispatch(setProduct(data));
      setLoading(false);
    };

    fetchProduct();
  }, [slug, dispatch]);

  return { loading, slug };
}

export default useFetchProduct;
