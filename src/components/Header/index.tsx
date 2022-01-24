import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import {Container, Content } from './styles' ;
import Modal from 'react-modal';


export function Header() {
    const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewModalTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {         
        setIsNewModalTransactionOpen(false);
    }

    return (
        <Container> 
            <Content>
           <img src={logoImg} alt="dt money" />
           <button type="button" onClick={handleOpenNewTransactionModal}>
               Nova transação
           </button>

                <Modal isOpen={isNewModalTransactionOpen} onRequestClose={handleCloseNewTransactionModal}>
                    <h2>Cadastrar Transação</h2>
                </Modal>

            </Content>
        </Container>
    )
}