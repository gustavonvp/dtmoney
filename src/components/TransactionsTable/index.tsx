import { useEffect } from "react";
import { Container } from "./styles";
import {api} from "../../services/api";


export function TransactionTable() {
    useEffect(() => {
      api('/transactions')
      .then(response => console.log(response.data))
    }, [])


    return(
        <Container>
          <table>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                  </tr>
                </thead>

              <tbody>
                  <tr>

                  <td className="title"> Desenvolvimento de website</td>
                  <td  className="deposit"> R$12.000</td>
                  <td> Desenvolvimento</td>
                  <td> 20/01/2022</td>

                  </tr>

                  <tr>

                  <td className="title"> Desenvolvimento de website</td>
                  <td  className="deposit"> R$2.000</td>
                  <td> Desenvolvimento</td>
                  <td> 20/01/2022</td>

                  </tr>

                  <tr>

                  <td className="title"> Aluguel</td>
                  <td className="withdraw"> - R$1.000</td>
                  <td> Casa </td>
                  <td> 20/01/2022</td>

                  </tr>
                  

              </tbody>

          </table>
        </Container>
    )
}