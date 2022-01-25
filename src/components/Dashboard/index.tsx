import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

export function Dashboard() {
  // Prop driling 

    return(
        <Container>
          <Summary /> 
          <TransactionTable />
        </Container>
    )
}