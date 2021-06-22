import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';
import styled from 'styled-components';

import { listsExpenses } from '../../redux/actions/expensesActions';
import { StoreState } from '../../redux/reducers';

const BudgetsContainer = styled.div`
	max-width: 500px;
	width: 100%;
	background-color: var(--cream);
	border-radius: 20px;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;
	padding: 20px;
`;

const BudgetsList = styled.ul`
	li {
		border: 1px solid red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 10px;
		margin: 15px 0;
		text-transform: capitalize;
		box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
		background-color: var(--crimson);
		color: var(--white);
		animation: opacity 0.2s linear;
		@keyframes opacity {
			from {
				opacity: 0;
				transform: scale(0.7);
			}
		}
		:hover {
			background-color: var(--white);
			color: var(--black);
			.budgets__buttons > .MuiSvgIcon-root {
				color: var(--black);
			}
		}
		.transaction {
			display: flex;
			align-items: center;
			font-size: 20px;
			span {
				margin-left: 15px;
			}
		}
		.budgets__buttons {
			display: flex;
			align-items: center;
			.MuiSvgIcon-root {
				color: var(--cream);
				opacity: 0.8;
			}
		}
	}
`;

export const Expenses:FC = () => {
  const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listsExpenses());
	}, [dispatch]);
	const { expenses } = useSelector((state: StoreState) => state.expenses);
  
  return (
		<Fragment>
			<BudgetsContainer>
				<h2>Expenses Transactions</h2>
				{expenses.length ? (
					expenses.map(expense => {
						return (
							<BudgetsList key={expense.id}>
								<li>
									<div className='transaction'>
										{expense.description} - <span>{expense.value}</span>
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
						<h2>You don't have any expense</h2>
					</div>
				)}
			</BudgetsContainer>
		</Fragment>
	);
};
