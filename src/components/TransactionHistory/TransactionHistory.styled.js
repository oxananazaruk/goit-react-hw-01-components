import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.blue};
`;

export const TableHeadCell = styled.th`
  padding: ${p => p.theme.spacing(3)};
  border: 1px solid ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
`;

export const TableCell = styled.td`
  padding: ${p => p.theme.spacing(3)};
  border: 1px solid ${p => p.theme.colors.black};
`;
