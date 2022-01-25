import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {NewTransactionModal} from './components/NewTransactionModal';
import Modal from 'react-modal'
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {

  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewModalTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {         
        setIsNewModalTransactionOpen(false);
    }


  return (
<>
      <TransactionsProvider>
     
        <Header onOpenNewTransactionModal ={handleOpenNewTransactionModal}/>
        <Dashboard />

        <NewTransactionModal  
          isOpen={isNewModalTransactionOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
    
        </TransactionsProvider>

</>
  );
}


