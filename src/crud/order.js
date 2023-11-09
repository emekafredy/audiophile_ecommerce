import { getResponse } from '.';
import { calculateFees } from '../helpers';

export const createOrder = (cart, saveDetails, paymentData) => {
  const { grandTotal } = calculateFees(cart);
  const order = {
    items: cart,
    grandTotal,
  };

  if (saveDetails) {
    localStorage.setItem(
      'paymentDetails',
      JSON.stringify(paymentData),
    );
  } else {
    localStorage.removeItem('paymentDetails');
  }

  return { data: order, message: 'Order successful' };
};

export const getPaymentData = () => {
  const emptyState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payMethod: 'e-money',
    eNum: '',
    pin: '',
  };

  try {
    const payData = JSON.parse(
      localStorage.getItem('paymentDetails'),
    );

    if (payData) {
      return getResponse(200, payData, true);
    }
    return getResponse(200, emptyState, true);
  } catch (err) {
    return getResponse(500, emptyState, false);
  }
};
