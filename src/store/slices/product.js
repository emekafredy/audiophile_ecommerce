import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: {
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
  },
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
    setProduct: (state, action) => {
      return {
        ...state,
        product: action.payload,
      };
    },
  },
});

export const { setProducts, setProduct } = productSlice.actions;

export const getProductsState = (state) => {
  return state.product;
};

export default productSlice.reducer;
