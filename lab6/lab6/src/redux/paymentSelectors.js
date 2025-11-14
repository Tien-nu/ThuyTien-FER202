//src/redux/paymentSelectors.js

import { createSelector } from "reselect";

const payState = (state) => state.payments.list;

export const selectTotalAmount = createSelector(
  [payState],
  (payments) =>
    payments.reduce((sum, p) => sum + Number(p.amount), 0)
);