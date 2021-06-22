import { FC, Fragment } from 'react'
import styled from 'styled-components';

import { Expenses } from './Expenses';
import { Incomes } from './Incomes'
import { Transactions } from './Transactions';

const ListsOfTransactions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Budgets:FC = () => {
  return (
    <Fragment>
      <Transactions/>
      <ListsOfTransactions>
        <Incomes />
        <Expenses />
      </ListsOfTransactions>
    </Fragment>
  )
}
