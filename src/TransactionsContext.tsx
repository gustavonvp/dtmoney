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

  interface TransactionsProviderProps {
      children: ReactNode;
  }

  export const TransactionsContext = createContext<Transaction []>([]);

export function TransactionsProvider({children}: TransactionsProviderProps) {
 const data = useContext(TransactionsContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  console.log(data);

  useEffect(() => {
    api('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);


  return (
        <TransactionsContext.Provider value={transactions}>
            {children}

        </TransactionsContext.Provider>
  );
}