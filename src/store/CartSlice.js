/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('cartItems') !== null
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const totalPrice = localStorage.getItem('totalPrice') !== null
  ? localStorage.getItem('totalPrice') : 0;

const SaveItems = (item) => {
  localStorage.setItem('cartItems', JSON.stringify(item));
};
const totalPriceFun = (data) => {
  let total = 0;
  data.map((item) => { total += (item.price * item.QTY); });
  localStorage.setItem('totalPrice', total);
  return total;
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartData: items, totalAmount: totalPrice },
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
      SaveItems(state.cartData.map((item) => item));
    },
    removeFromCart: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cartData = state.cartData.filter(
        (pro) => pro.id !== action.payload,
      );
      SaveItems(state.cartData.map((item) => item));
    },
    increment: (state, action) => {
      const ProductItemId = action.payload;
      const productItem = state.cartData.find(
        (prod) => prod.id === ProductItemId,
      );
      if (productItem) {
        productItem.QTY += 1;
      }
      SaveItems(state.cartData.map((item) => item));
    },
    decrement: (state, action) => {
      const ProductItemId = action.payload;
      const productItem = state.cartData.find(
        (prod) => prod.id === ProductItemId,
      );
      if (productItem && productItem.QTY > 1) {
        productItem.QTY -= 1;
      }
      SaveItems(state.cartData.map((item) => item));
      totalPriceFun(state.cartData);
    },
    calcTotalAmount: (state) => {
      totalPriceFun(state.cartData);
      state.totalAmount = totalPriceFun(state.cartData);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart, removeFromCart, increment, decrement, calcTotalAmount,
} = cartSlice.actions;
