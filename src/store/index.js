import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product';
import cart from './slices/cart';

const store = configureStore({
  reducer: { product, cart },
});

export default store;
