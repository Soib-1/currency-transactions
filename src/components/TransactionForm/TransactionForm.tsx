import * as Styles from "./TransactionForm.styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { bindActionCreators } from "redux";
import { actions } from "../../store";
import useAxios from "axios-hooks";
import { euro2pln } from "../../shared/API";
import { Grid, InputAdornment } from "@material-ui/core";

const TransactionForm = () => {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const exRate = useSelector((state: RootState) => state.exchange);

  const dispatch = useDispatch();

  const { changeRate, newTransaction, updateTransaction } = bindActionCreators(
    actions,
    dispatch
  );

  const [{ data, loading, error }] = useAxios(euro2pln);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  exRate === "-" && changeRate(data.result);
  return (
    <Styles.FormBackground elevation={3}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Styles.GridItem item xs={12} sm={12}>
          <Styles.Title>Transactions System</Styles.Title>
        </Styles.GridItem>
        <Styles.GridItem
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          xs={12}
          sm={12}
        >
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
            xs={3}
            sm={3}
          >
            <Styles.SButton
              variant="outlined"
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
              Current Rate
            </Styles.SButton>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Styles.InputName htmlFor="exchange-rate">
              Exchange rate
            </Styles.InputName>
            <Styles.InputField
              id="exchange-rate"
              type="number"
              startAdornment={
                <InputAdornment position="end">{"1 € ="}&nbsp;</InputAdornment>
              }
              endAdornment={
                <InputAdornment position="start">{"PLN"}</InputAdornment>
              }
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
          </Grid>
        </Styles.GridItem>
        <Styles.GridItem
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          xs={12}
          sm={12}
        >
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
            xs={3}
            sm={3}
          >
            <Styles.TextLabel>Transaction Name</Styles.TextLabel>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Styles.InputName htmlFor="transaction-name">Name</Styles.InputName>
            <Styles.InputField
              id="transaction-name"
              type="string"
              onChange={(e) => setTransactionName(e.target.value)}
            />
          </Grid>
        </Styles.GridItem>
        <Styles.GridItem
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          xs={12}
          sm={12}
        >
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
            xs={3}
            sm={3}
          >
            <Styles.TextLabel>Transaction Amount</Styles.TextLabel>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Styles.InputName htmlFor="exchange-rate">Amount</Styles.InputName>
            <Styles.InputField
              id="exchange-rate"
              endAdornment={
                <InputAdornment position="start">{"€"}</InputAdornment>
              }
              type="number"
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
          </Grid>
        </Styles.GridItem>
        <Styles.GridItem item xs={12} sm={12}>
          <Styles.SButton
            variant="outlined"
            onClick={() => {
              newTransaction({
                transaction_id:
                  Math.floor(Math.random() * (100000 - 23333)) + 23333 + "",
                name:
                  transactionName !== ""
                    ? transactionName
                    : "Unnamed Transaction",
                amount: prepareAmount(transactionAmount, "1"),
                exchangedAmount: prepareAmount(transactionAmount, exRate),
                exchangeRate: exRate,
              });
            }}
          >
            New Transaction
          </Styles.SButton>
        </Styles.GridItem>
      </Grid>
    </Styles.FormBackground>
  );
};

const prepareAmount = (amount: string, rate: string) => {
  amount.replace(",", ".");
  return (+amount * +rate).toFixed(2) + "";
};

export default TransactionForm;
