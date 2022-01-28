import { Container } from "./styles";
import outcomeImg from  "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import totalImg from "../../assets/total.svg";

import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const {transactions} = useTransactions()

    const summaryContex = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.widthdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
            deposits: 0,
            widthdraws: 0,
            total: 0,

        })

    console.log(transactions);
    
return(
    <Container>

         {/* <TransactionsContext.Consumer>
             {
                 (data) => {
                                                    //
                        console.log(data)
                        return(<p>ok</p>) 
                 }
             }
        </TransactionsContext.Consumer>        */}
        <div>
        <header>
            <p>Entradas</p> 
            <img src={incomeImg} alt="Entradas" />
        </header> 
        <strong>{new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency: 'BRL'
                    }).format(summaryContex.deposits)}</strong>
    </div>  

    <div>
        <header>
            <p>Saídas</p> 
            <img src={outcomeImg} alt="Saídas" />
        </header> 
        <strong>{new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency: 'BRL'
                    }).format(summaryContex.widthdraws)}</strong>
    </div> 

    <div className="highlight-background">
        <header>
            <p>Total</p> 
            <img src={totalImg} alt="Total" />
        </header> 
        <strong>{new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency: 'BRL'
                    }).format(summaryContex.total)}</strong>
    </div>
    </Container>
    )
}