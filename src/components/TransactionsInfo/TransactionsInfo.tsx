import * as Styles from "./TransactionsInfo.styles";
import { useStore } from "react-redux";
import { Grid } from "@material-ui/core";
import { ITransaction } from "../../types/types";

const getMaxValue = (transactions: ITransaction[]) => {
  let temp_amount = -1;
  let temp_idx = 0;
  let maxValue: ITransaction = {
    transaction_id: "not-asigned",
    name: "No data",
    amount: "",
    exchangedAmount: "",
    exchangeRate: "",
  };
  if (transactions.length > 0) {
    transactions.forEach((transaction, index) => {
      if (temp_amount < +transaction.amount) {
        temp_amount = +transaction.amount;
        temp_idx = index;
      }
    });
    maxValue = transactions[temp_idx];
  }

  return maxValue;
};
const getSumOfTransactions = (transactions: ITransaction[]) => {
  let sum = 0;
  transactions.length > 0 &&
    transactions.forEach((transaction) => {
      sum += +transaction.amount;
    });
  return sum;
};

const TransactionsInfo = () => {
  const store = useStore();

  const transactions: ITransaction[] = store.getState().transaction;

  const maxValue = getMaxValue(transactions);
  const sumOfTransactions = getSumOfTransactions(transactions);

  return (
    <Styles.TransactionBox>
      <Styles.SBox elevation={3}>
        <Styles.SGrid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Styles.TransactionTitle>{"Total"}</Styles.TransactionTitle>
          </Grid>
          <Grid item xs={12}>
            <Styles.TransactionText>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                  {sumOfTransactions.toFixed(2)}
                </Grid>
                <Grid item xs={3}>
                  {" €"}
                </Grid>
              </Grid>
            </Styles.TransactionText>
          </Grid>
          <Grid item xs={12}>
            <Styles.TransactionTitle>
              {"Most expensive"}
            </Styles.TransactionTitle>
          </Grid>
          <Grid item xs={12}>
            <Styles.TransactionName>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
              >
                <Grid item xs={12}>
                  {maxValue.name}
                </Grid>
              </Grid>
            </Styles.TransactionName>
            <Styles.TransactionText>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                  {maxValue.exchangedAmount}
                </Grid>
                <Grid item xs={3}>
                  {" PLN"}
                </Grid>
              </Grid>
            </Styles.TransactionText>
            <Styles.TransactionText>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                  {maxValue.amount}
                </Grid>
                <Grid item xs={3}>
                  {" €"}
                </Grid>
              </Grid>
            </Styles.TransactionText>
          </Grid>
          <Grid item sm={3}></Grid>
        </Styles.SGrid>
      </Styles.SBox>
    </Styles.TransactionBox>
  );
};

export default TransactionsInfo;
