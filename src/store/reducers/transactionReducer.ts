import { PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "./../../types/types";

const reducer = (
  state = [] as Array<ITransaction>,
  action: PayloadAction<ITransaction>
) => {
  switch (action.type) {
    case "newTransaction":
      console.log(state, action.payload);
      return state.concat(action.payload);
    default:
      console.log(action.payload);
      return state;
  }
};

export default reducer;
