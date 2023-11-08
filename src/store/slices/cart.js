import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToCart,
  removeItemFromCart,
  removeAllFromCart,
} from '../../crud/cart';
import { renderSuccessMessage } from '../../helpers';

const initialState = {
  cart: [],
};

const add = (action) => {
  const { data, message } = addItemToCart(action.payload);
  renderSuccessMessage(message);

  return data;
};

const remove = (action) => {
  const { data, message } = removeItemFromCart(action.payload);
  renderSuccessMessage(message);

  return data;
};

const removeAll = () => {
  const { data, message } = removeAllFromCart();
  renderSuccessMessage(message);

  return data;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      return {
        ...state,
        cart: action.payload,
      };
    },
    addToCart: (state, action) => {
      const updatedCart = add(action);

      return {
        ...state,
        cart: updatedCart,
      };
    },
    removeFromCart: (state, action) => {
      const updatedCart = remove(action);

      return {
        ...state,
        cart: updatedCart,
      };
    },
    removeCart: (state, action) => {
      const updatedCart = removeAll(action);

      return {
        ...state,
        cart: updatedCart,
      };
    },
  },
});

export const { setCart, addToCart, removeFromCart, removeCart } =
  cartSlice.actions;

export const getCartState = (state) => {
  return state.cart;
};

export default cartSlice.reducer;
