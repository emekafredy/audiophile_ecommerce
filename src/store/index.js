import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product';

const store = configureStore({
  reducer: { product },
});

export default store;
