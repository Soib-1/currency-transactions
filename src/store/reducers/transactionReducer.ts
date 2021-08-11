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
        (value, index) =>
          index !==
          state.findIndex(
            (transaction) =>
              transaction.transaction_id === action.payload.transaction_id
          )
      );
    default:
      return state;
  }
};

export default reducer;
