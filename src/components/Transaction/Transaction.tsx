import * as Types from "./Transaction.types";
import * as Styles from "./Transaction.styles";
import { bindActionCreators } from "redux";
import { actions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { RootState } from "../../store/reducers";

const Transaction = ({ transaction }: Types.Props) => {
  const dispatch = useDispatch();

  const transactions = useSelector((state: RootState) => state.transaction);
  const { deleteTransaction } = bindActionCreators(actions, dispatch);

  return (
    <Styles.TransactionBox>
      <Styles.SBox elevation={3}>
        <Styles.SGrid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={12}>
            <Styles.TransactionTitle>
              {transaction.name}
            </Styles.TransactionTitle>
          </Grid>
          <Grid item sm={8} xs={8}>
            <Styles.TransactionText>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
              >
                <Grid item xs={8} sm={8}>
                  {transaction.amount}
                </Grid>
                <Grid item xs={2} sm={2}>
                  {" €"}
                </Grid>
              </Grid>
            </Styles.TransactionText>
            <Styles.TransactionText>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
              >
                <Grid item xs={8} sm={8}>
                  {transaction.exchangedAmount}
                </Grid>
                <Grid item xs={2} sm={2}>
                  {" PLN"}
                </Grid>
              </Grid>
            </Styles.TransactionText>
          </Grid>
          <Grid item sm={3}>
            {" "}
            <Button
              onClick={() => {
                deleteTransaction(transaction);
              }}
            >
              <Styles.Trash />
            </Button>
          </Grid>
        </Styles.SGrid>
      </Styles.SBox>
    </Styles.TransactionBox>
  );
};

export default Transaction;
