import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product';
import cart from './slices/cart';
import paymentData from './slices/paymentData';

const store = configureStore({
  reducer: { product, cart, paymentData },
});

export default store;
