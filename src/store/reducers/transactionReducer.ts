import { PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "./../../types/types";

const reducer = (
  state = [] as Array<ITransaction>,
  action: PayloadAction<ITransaction>
) => {
  switch (action.type) {
    case "newTransaction":
      return state.concat(action.payload);
    case "deleteTransaction":
      return state.filter(
        (_, index) =>
          index !==
          state.findIndex(
            (transaction) =>
              transaction.transaction_id === action.payload.transaction_id
          )
      );
    case "updateTransaction":
      state.forEach((transaction, index, transactionArray) => {
        let rateDifference =
          +action.payload.exchangeRate / +transaction.exchangeRate;

        transactionArray[index].exchangedAmount =
          (+transaction.exchangedAmount * rateDifference).toFixed(2) + "";
        transactionArray[index].exchangeRate = action.payload.exchangeRate;
        console.log(
          rateDifference,
          ": ",
          action.payload.exchangeRate,
          ":",
          transaction.exchangeRate
        );
      });
      return state;
    default:
      return state;
  }
};

export default reducer;
