import * as Types from "./Homepage.types";
import * as Styles from "./Homepage.styles";
import { euro2pln } from "./../../shared/API";
import useAxios from "axios-hooks";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./../../store/index";
import { RootState } from "../../store/reducers";
import { Box, Container } from "@material-ui/core";
import Transaction from "./../../components/Transaction";

const Homepage = ({}: Types.Props) => {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const exRate = useSelector((state: RootState) => state.exchange);
  const transactions = useSelector((state: RootState) => state.transaction);
  const operationsResults = useSelector((state: RootState) => state.operations);

  const dispatch = useDispatch();

  const {
    changeRate,
    newTransaction,
    deleteTransaction,
    updateTransaction,
    recalculateOperations,
  } = bindActionCreators(actions, dispatch);

  const [{ data, loading, error }] = useAxios(euro2pln);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  exRate === "-" && changeRate(data.result);

  return (
    <Container>
      <button
        onClick={() => {
          changeRate(data.result);
          updateTransaction({
            transaction_id: "update",
            name: "update",
            amount: "0",
            exchangedAmount: "0",
            exchangeRate: data.result,
          });
        }}
      >
        Use API rate
      </button>
      <input
        type="number"
        step="0.01"
        value={exRate}
        onChange={(e) => {
          changeRate(e.target.value);
          e.target.value !== "" &&
            e.target.value !== "0" &&
            updateTransaction({
              transaction_id: "update",
              name: "update",
              amount: "0",
              exchangedAmount: "0",
              exchangeRate: e.target.value,
            });
        }}
      />
      <p>{"Current exchange rate: " + exRate}</p>
      <br />
      <p>Transaction name</p>
      <input
        type="string"
        onChange={(e) => setTransactionName(e.target.value)}
      />
      <p>Transaction amount</p>
      <input
        type="number"
        onChange={(e) => setTransactionAmount(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          newTransaction({
            transaction_id:
              Math.floor(Math.random() * (100000 - 23333)) + 23333 + "",
            name: transactionName,
            amount: prepareAmount(transactionAmount, "1"),
            exchangedAmount: prepareAmount(transactionAmount, exRate),
            exchangeRate: exRate,
          });
          recalculateOperations(transactions);
        }}
      >
        New Transaction
      </button>
      <Styles.Transactions>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </Styles.Transactions>
      <p>{"Sum: " + operationsResults.getSumOfTransactions}</p>
      <p>
        {"Name: " +
          operationsResults.maxTransaction.name +
          " EURO: " +
          operationsResults.maxTransaction.exchangedAmount +
          " EURO: " +
          operationsResults.maxTransaction.amount}
      </p>
    </Container>
  );
};

const prepareAmount = (amount: string, rate: string) => {
  amount.replace(",", ".");
  return (+amount * +rate).toFixed(2) + "";
};

export default Homepage;
