import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'

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

     
        <Header onOpenNewTransactionModal ={handleOpenNewTransactionModal}/>
        <Dashboard />

      <Modal 
        isOpen={isNewModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
        
      </Modal>

        <GlobalStyle />
    
      

</>
  );
}


