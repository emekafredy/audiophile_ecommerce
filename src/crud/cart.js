import {
  getResponse,
  updateExistingItemInCart,
  saveAndSendResponse,
} from '.';
import { productInCart } from '../helpers';

export const getCart = async () => {
  try {
    if (
      !localStorage.cart ||
      JSON.parse(localStorage.cart).length === 0
    ) {
      return getResponse(204, [], true);
    }

    const result = await JSON.parse(localStorage.cart);
    return getResponse(200, result, true);
  } catch (err) {
    return getResponse(500, [], false);
  }
};

export const addItemToCart = (prod) => {
  const lastIndex = prod.name.lastIndexOf(' ');
  const prodName = prod.name.substring(0, lastIndex);

  const itemToAdd = {
    name: prodName,
    unitPrice: prod.price,
    totalPrice: prod.price,
    quantity: 1,
    maxQuantity: prod.quantity,
    slug: prod.slug,
  };

  const cart = localStorage.cart && JSON.parse(localStorage.cart);

  try {
    if (cart && cart.length > 0) {
      const item = productInCart(cart, prod.slug);

      if (item) {
        const newQuantity = item.quantity + 1;
        const updatedCart = updateExistingItemInCart(
          item,
          prod,
          cart,
          newQuantity,
        );

        return saveAndSendResponse(updatedCart, 'Cart item updated');
      }

      const updatedCart = [...cart, itemToAdd];
      return saveAndSendResponse(updatedCart, 'Item added to cart');
    }

    const addedCart = [itemToAdd];
    return saveAndSendResponse(addedCart, 'Item added to cart');
  } catch (err) {
    return { data: [], message: 'An error occurred' };
  }
};

export const removeItemFromCart = (prod) => {
  const cart = localStorage.cart && JSON.parse(localStorage.cart);

  try {
    if (!cart) return { data: [], message: 'Cart not found' };

    const item = productInCart(cart, prod.slug);

    if (item) {
      if (item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        const updatedCart = updateExistingItemInCart(
          item,
          prod,
          cart,
          newQuantity,
        );

        return saveAndSendResponse(updatedCart, 'Item count updated');
      }

      const updatedCart = cart.filter((i) => i.slug !== prod.slug);
      return saveAndSendResponse(
        updatedCart,
        'Item removed from cart',
      );
    }

    return { data: [], message: 'Item not found in cart' };
  } catch (err) {
    return { data: [], message: 'An error occurred' };
  }
};

export const removeAllFromCart = () => {
  const cart = localStorage.cart && JSON.parse(localStorage.cart);

  try {
    if (!cart) return { data: [], message: 'Cart not found' };

    localStorage.removeItem('cart');
    return { data: [], message: 'Removed all cart items' };
  } catch (err) {
    return { data: [], message: 'An error occurred' };
  }
};
