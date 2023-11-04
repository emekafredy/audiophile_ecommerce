import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { setProducts } =
  productSlice.actions;

export const getProductsState = (state) => {
  return state.product;
};

export default productSlice.reducer;
