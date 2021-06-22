import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';

import { listsIncomes } from '../../redux/actions/incomesActions';
import { StoreState } from '../../redux/reducers';
import {BudgetsContainer, BudgetsList} from './IncomeExpensesStyles'


export const Incomes:FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsIncomes())
  }, [dispatch]);
  const { incomes } = useSelector((state: StoreState) => state.incomes);
  
  return (
		<Fragment>
			<BudgetsContainer>
				<h2>Income Transactions</h2>
				{incomes.length ? (
					incomes.map(income => {
						return (
							<BudgetsList key={income.id}>
								<li>
									<div className='transaction'>
										{income.description}:
										<span>{income.value}</span>
									</div>
									<div className='budgets__buttons'>
										<Edit />
										<Delete />
									</div>
								</li>
							</BudgetsList>
						);
					})
				) : (
					<div>
						<h2>You don't have any income</h2>
					</div>
				)}
			</BudgetsContainer>
		</Fragment>
	);
}
