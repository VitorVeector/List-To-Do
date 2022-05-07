import { useTransaction } from '../../hooks/useTransaction';

import { Container, TableDiv } from "./style";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const DataTable = (): JSX.Element => {
const {transactions} = useTransaction()

  return (
    <Container>
      <TableDiv>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Plano</TableCell>
            <TableCell align="right">Origem</TableCell>
            <TableCell align="right">Destino</TableCell>
            <TableCell align="right">Tempo</TableCell>
            <TableCell align="right">Valor com plano</TableCell>
            <TableCell align="right">Valor sem plano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <TableRow
              key={transaction.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                FaleMais{transaction.plan}
              </TableCell>
              <TableCell align="right">{transaction.origin}</TableCell>
              <TableCell align="right">{transaction.destiny}</TableCell>
              <TableCell align="right">{transaction.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TableDiv>
    </Container>
  );
};
