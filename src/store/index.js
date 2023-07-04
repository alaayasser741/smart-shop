/* eslint linebreak-style: ["error", "windows"] */
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { },
});
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import books from "./bookSlice";
// import auth from "./authSlice";
// import report from "./reportSlice";

// const store = configureStore({
//   reducer: { books, auth, report },
// });
// export default store;
