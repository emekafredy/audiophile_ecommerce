import { toast } from 'react-toastify';

export const getScreenSize = (screenSize) => {
  if (screenSize <= 570) {
    return 'mobile';
  }

  if (screenSize > 570 && screenSize < 968) {
    return 'tablet';
  }

  return 'desktop';
};

export const setActiveLinkColor = (title, category, prodCategory) => {
  if (category && prodCategory === title) {
    return 'text-orange-200';
  }
  if (
    (category === undefined ||
      category === null ||
      category === '') &&
    title === 'home'
  ) {
    return 'text-orange-200';
  }

  return 'text-white-100';
};

export const formatAndSeparateNumber = (num) => {
  const str = num?.toString() || '';
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const productInCart = (cart, productSlug) => {
  const product = cart.find((item) => item.slug === productSlug);
  return product;
};

export const totalInCart = (cart, prop) => {
  return cart.reduce((acc, item) => {
    return acc + item[prop];
  }, 0);
};

export const orderData = (index, data, updatedData) => {
  const currentData = [...data];
  let modified = currentData[index];
  modified = updatedData;
  currentData[index] = modified;

  return currentData;
};

export const calculateFees = (cart) => {
  const total = totalInCart(cart, 'totalPrice');
  const totalPrice = formatAndSeparateNumber(total);
  const shipping = 50;
  const vat = formatAndSeparateNumber(total * 0.2);
  const grandTotal = formatAndSeparateNumber(
    total + total * 0.2 + 50,
  );

  return {
    totalPrice,
    shipping,
    vat,
    grandTotal,
  };
};

export const renderErrorMessage = (error) => {
  toast.error(error.message);
};

export const renderSuccessMessage = (message) => {
  toast.success(message);
};

export const renderInfoMessage = (message) => {
  toast.info(message);
};
