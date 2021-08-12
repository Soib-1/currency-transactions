import { PayloadAction } from "@reduxjs/toolkit";

const reducer = (state = "-", action: PayloadAction<string>) => {
  switch (action.type) {
    case "changeRate":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
