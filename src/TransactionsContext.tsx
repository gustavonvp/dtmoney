import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from './services/api';
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

//   interface TransactionInput {
//       title: string;
//       amount: number;
//       type: string;
//       category: string;

//   }

  type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

  //type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

  interface TransactionsProviderProps {
      children: ReactNode;
  }

  interface TransactionsContextData {
      transactions: Transaction[];
      createTransaction: (transaction: TransactionInput) => void;
  }

  export const TransactionsContext = createContext<TransactionsContextData>(
      {} as TransactionsContextData
      );

export function TransactionsProvider({children}: TransactionsProviderProps) {
 const data = useContext(TransactionsContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  console.log(data);

  useEffect(() => {
    api('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  }


  return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}

        </TransactionsContext.Provider>
  );
}