import { useTransaction } from '../../hooks/useTransaction';

import { Container, TableDiv } from "./style";

import { FaTrashAlt } from 'react-icons/fa';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const DataTable = (): JSX.Element => {
const {transactions, removeTransaction} = useTransaction()

const handleRemoveTransaction = (transactionId: number) => {
  removeTransaction(transactionId)
}

  return (
    <Container>
      <TableDiv>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 'auto' }} align="center">To-Do</TableCell>
            <TableCell sx={{ width: 'auto' }} align="center">Descrição</TableCell>
            <TableCell sx={{ width: 'auto' }} align="center">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <TableRow
              key={transaction.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{transaction.title}</TableCell>
              <TableCell align="right">{transaction.description}</TableCell>
              <TableCell align="right">{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                <button onClick={() => handleRemoveTransaction(transaction.id)}><FaTrashAlt/></button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TableDiv>
    </Container>
  );
};
