import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from '../crud/cart';
import { setCart } from '../store/slices/cart';

function useFetchCart() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      const data = await getCart();

      await dispatch(setCart(data.data));
      setLoading(false);
    };

    fetchCart();
  }, [dispatch]);

  return { loading };
}

export default useFetchCart;
