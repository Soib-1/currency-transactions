import * as Types from "./Homepage.types";
import * as Styles from "./Homepage.styles";
import { euro2pln } from "./../../shared/API";
import useAxios from "axios-hooks";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./../../store/index";
import { RootState } from "../../store/reducers";

const Homepage = ({}: Types.Props) => {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const exRate = useSelector((state: RootState) => state.exchange);
  const transactions = useSelector((state: RootState) => state.transaction);
  const dispatch = useDispatch();

  const { changeRate, newTransaction } = bindActionCreators(actions, dispatch);

  const [{ data, loading, error }] = useAxios(euro2pln);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(transactions);
  return (
    <>
      <button onClick={() => changeRate(data.result)}>Use API rate</button>
      <input
        type="number"
        step="0.01"
        value={exRate}
        onChange={(e) => changeRate(e.target.value)}
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
        type="string"
        onChange={(e) => setTransactionAmount(e.target.value)}
      />
      <br />
      <button
        onClick={() =>
          newTransaction({
            name: transactionName,
            amount: transactionAmount,
          })
        }
      >
        The RED button
      </button>
      <p>
        {transactions.map((transaction) => (
          <p>{transaction.name + ": " + transaction.amount}</p>
        ))}
      </p>
    </>
  );
};

export default Homepage;
