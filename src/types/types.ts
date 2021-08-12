export interface ITransaction {
  transaction_id: string;
  name: string;
  amount: string;
  exchangedAmount: string;
  exchangeRate: string;
}

export interface ITransactionOperations {
  maxTransaction: ITransaction;
  getSumOfTransactions: number;
}
