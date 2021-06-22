import { FC, Fragment } from 'react'
import styled from 'styled-components';

import { Expenses } from './Expenses';
import { Incomes } from './Incomes'

const ListsOfTransactions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Budgets:FC = () => {
  return (
    <Fragment>
      <h1>Budgets page</h1>
      <ListsOfTransactions>
        <Incomes />
        <Expenses />
      </ListsOfTransactions>
    </Fragment>
  )
}
