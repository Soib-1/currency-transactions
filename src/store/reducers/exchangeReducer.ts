import { ReducerState } from "react";
import { PayloadAction } from "@reduxjs/toolkit";

const reducer = (state = "20", action: PayloadAction<string>) => {
  switch (action.type) {
    case "changeRate":
      console.log(action.payload);
      return action.payload;
    default:
      console.log(action.payload);
      return state;
  }
};

export default reducer;
