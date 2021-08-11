import { Dispatch } from "react";
import { ITransaction } from "../../types/types";

export const changeRate = (rate: string) => {
  return (dispatch: Dispatch<Object>) => {
    dispatch({
      type: "changeRate",
      payload: rate,
    });
  };
};

export const newTransaction = (transaction: ITransaction) => {
  return (dispatch: Dispatch<Object>) => {
    dispatch({
      type: "newTransaction",
      payload: transaction,
    });
  };
};
