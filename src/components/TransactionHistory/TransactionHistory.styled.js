import styled from 'styled-components';

export const TransactionsTab = styled.table`
  min-width: 800px;
  margin-bottom: 50px;
  padding: 10px;

  border-collapse: collapse;

  background-color: white;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  thead {
    background-color: aqua;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border: 1px solid gray;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TransactionsType = styled.td`
  text-transform: capitalize;
`;
