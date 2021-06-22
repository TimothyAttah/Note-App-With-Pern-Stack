import {FC, Fragment} from 'react'
import { Incomes } from './Incomes'

export const Budgets:FC = () => {
  return (
    <Fragment>
      <h1>Budgets page</h1>
      <Incomes />
    </Fragment>
  )
}
