import {
  Table,
  TableHead,
  TableHeadCell,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.currency}</TableCell>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
