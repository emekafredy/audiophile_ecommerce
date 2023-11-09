import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPaymentData } from '../crud/order';
import { setPaymentData } from '../store/slices/paymentData';

function useFetchPaymentData() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPaymentData = async () => {
      setLoading(true);
      const data = await getPaymentData();

      await dispatch(setPaymentData(data.data));
      setLoading(false);
    };

    fetchPaymentData();
  }, [dispatch]);

  return { loading };
}

export default useFetchPaymentData;
