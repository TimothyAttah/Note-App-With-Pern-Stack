import { FC, Fragment, useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';

import { listsIncomes, deleteIncomes } from '../../redux/actions/incomesActions';
import { StoreState } from '../../redux/reducers';
import {BudgetsContainer, BudgetsList} from './IncomeExpensesStyles'


export const Incomes:FC = () => {
  const dispatch = useDispatch();
  const myRef = createRef<HTMLLIElement>();
  useEffect(() => {
    dispatch(listsIncomes())
  }, [dispatch]);
  const { incomes } = useSelector((state: StoreState) => state.incomes);

  const onRemove = (id: string) => {
		const node = myRef.current;
		if (node) return (node.className = 'active');
		setTimeout(() => {
			return dispatch(deleteIncomes(id));
		}, 500);
	};
  
  return (
		<Fragment>
			<BudgetsContainer>
				<h2>Income Transactions</h2>
				{incomes.length ? (
					incomes.map(income => {
						return (
							<BudgetsList key={income.id}>
								<li ref={myRef}>
									<div className='transaction'>
										{income.description}:<span>{income.value}</span>
									</div>
									<div className='budgets__buttons'>
										<Edit />
										<Delete onClick={() => dispatch(deleteIncomes(income.id))} />
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
