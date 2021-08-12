import * as Types from "./Transaction.types";
import * as Styles from "./Transaction.styles";
import { bindActionCreators } from "redux";
import { actions } from "../../store";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, Button, Grid } from "@material-ui/core";

const Transaction = ({ transaction }: Types.Props) => {
  const dispatch = useDispatch();

  const { deleteTransaction } = bindActionCreators(actions, dispatch);
  return (
    <Styles.TransactionBox>
      <Styles.SBox>
        <Styles.SGrid spacing={5}>
          <Grid item xs={12}>
            <Styles.TransactionTitle>
              {transaction.name}
            </Styles.TransactionTitle>
          </Grid>
          <Grid item xs={12}>
            <Styles.TransactionText>
              {transaction.amount + " PLN"}
            </Styles.TransactionText>
          </Grid>
          <Grid item xs={12}>
            <Styles.TransactionText>
              {transaction.exchangedAmount + " €"}
            </Styles.TransactionText>
          </Grid>
          <Grid item xs={12}>
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
