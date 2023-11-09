import { orderData } from '../helpers';

export const getResponse = (status, data, success) => {
  return {
    status,
    data,
    success,
  };
};

export const updateExistingItemInCart = (
  item,
  prod,
  cart,
  newQuantity,
) => {
  const updatedItem = {
    ...item,
    quantity: newQuantity,
    totalPrice: prod.price * newQuantity,
  };

  const itemIndex = cart.findIndex(
    (i) => i.slug === updatedItem.slug,
  );

  const updatedCart = orderData(itemIndex, cart, updatedItem);

  return updatedCart;
};

export const saveAndSendResponse = (data, message) => {
  localStorage.setItem('cart', JSON.stringify(data));

  return { data, message };
};

export const emptyProductState = {
  image: {
    desktop: '',
    tablet: '',
    mobile: '',
  },
  name: '',
  description: '',
  slug: '',
  new: false,
  quantity: 0,
  features: '',
  includes: [],
  gallery: {
    first: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
    second: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
    third: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
  },
  others: [],
};
