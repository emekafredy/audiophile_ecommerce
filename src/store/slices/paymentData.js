import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentData: {
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
  },
};

export const paymentDataSlice = createSlice({
  name: 'paymentData',
  initialState,
  reducers: {
    setPaymentData: (state, action) => {
      return {
        ...state,
        paymentData: action.payload,
      };
    },
  },
});

export const { setPaymentData } = paymentDataSlice.actions;

export const getPaymentDataState = (state) => {
  return state.paymentData;
};

export default paymentDataSlice.reducer;
