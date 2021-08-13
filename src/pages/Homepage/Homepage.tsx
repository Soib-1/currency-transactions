import * as Styles from "./Homepage.styles";
import { euro2pln } from "./../../shared/API";
import useAxios from "axios-hooks";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./../../store/index";
import { RootState } from "../../store/reducers";
import { Container, Grid } from "@material-ui/core";
import Transaction from "./../../components/Transaction";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsInfo from "../../components/TransactionsInfo/index";
import { CircularProgress } from "@material-ui/core";

const Homepage = () => {
  const exRate = useSelector((state: RootState) => state.exchange);
  const transactions = useSelector((state: RootState) => state.transaction);

  const dispatch = useDispatch();

  const { changeRate } = bindActionCreators(actions, dispatch);

  const [{ data, loading, error }] = useAxios(euro2pln);
  if (loading) return <CircularProgress />;
  if (error) return <p>Error</p>;

  exRate === "-" && changeRate(data.result);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid container justifyContent="center" sm={3}>
          <TransactionsInfo />
        </Grid>
        <Grid container justifyContent="center" sm={6}>
          <TransactionForm />
        </Grid>
        <Grid container justifyContent="center" sm={3}>
          <Styles.Transactions overflow="scroll">
            {transactions.map((transaction) => (
              <Transaction transaction={transaction} />
            ))}
          </Styles.Transactions>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
