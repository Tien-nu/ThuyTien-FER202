//src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import paymentsReducer from "./paymentSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    payments: paymentsReducer,
  },
});

export default store;