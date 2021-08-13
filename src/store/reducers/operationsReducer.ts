import { PayloadAction } from "@reduxjs/toolkit";
import { ITransaction, ITransactionOperations } from "../../types/types";

const reducer = (
  state = {
    maxTransaction: {
      name: "No data",
      amount: "0.00",
      exchangedAmount: "0.00",
    } as ITransaction,
    getSumOfTransactions: 0.0,
  } as ITransactionOperations,
  action: PayloadAction<ITransaction[]>
) => {
  switch (action.type) {
    case "recalculateOperations":
      console.log(state, action);
      let temp_amount = -1;
      let temp_idx = 0;
      state.getSumOfTransactions = 0;
      if (action.payload.length > 0) {
        action.payload.forEach((transaction, index) => {
          state.getSumOfTransactions += +transaction.amount;
          if (temp_amount < +transaction.amount) {
            temp_amount = +transaction.amount;
            temp_idx = index;
          }
        });
        state.maxTransaction = action.payload[temp_idx];
      }

      return state;
    default:
      return state;
  }
};

export default reducer;
