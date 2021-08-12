import { Dispatch } from "react";
import { ITransaction, ITransactionOperations } from "../../types/types";

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

export const deleteTransaction = (transaction: ITransaction) => {
  return (dispatch: Dispatch<Object>) => {
    dispatch({
      type: "deleteTransaction",
      payload: transaction,
    });
  };
};

export const updateTransaction = (transaction: ITransaction) => {
  return (dispatch: Dispatch<Object>) => {
    dispatch({
      type: "updateTransaction",
      payload: transaction,
    });
  };
};

export const recalculateOperations = (transactions: ITransaction[]) => {
  return (dispatch: Dispatch<Object>) => {
    dispatch({
      type: "recalculateOperations",
      payload: transactions,
    });
  };
};
