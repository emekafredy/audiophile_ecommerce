import { useState } from 'react';
import { validateCheckout } from '../validations/checkout';

function useCheckoutForm(options, paymentData, setPaymentData) {
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (e) => {
    const { value } = e.target;
    setPaymentData({
      ...paymentData,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;

    const newErrors = {};
    const valid = validateCheckout(
      validations,
      paymentData,
      newErrors,
    );

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentData({
      ...paymentData,
      payMethod: method,
    });
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    handlePaymentMethodChange,
  };
}

export default useCheckoutForm;
