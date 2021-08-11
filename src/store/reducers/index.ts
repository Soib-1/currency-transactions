import { combineReducers } from "@reduxjs/toolkit";
import exchangeReducer from "./exchangeReducer";
import transactionReducer from "./transactionReducer";

export const reducers = combineReducers({
  exchange: exchangeReducer,
  transaction: transactionReducer,
});

export type RootState = ReturnType<typeof reducers>;
