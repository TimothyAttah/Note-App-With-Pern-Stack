import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';
import styled from 'styled-components';

import { listsExpenses, deleteExpenses } from '../../redux/actions/expensesActions';
import { StoreState } from '../../redux/reducers';

const BudgetsContainer = styled.div`
	max-width: 550px;
	width: 100%;
	background-color: var(--cream);
	border-radius: 20px;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;
	padding: 20px;
	@media (max-width: 900px) {
		max-width: 400px;
	}
	@media (max-width: 700px) {
		max-width: 300px;
		h2 {
			font-size: 18px;
		}
	}
	@media (max-width: 500px) {
		max-width: 260px;
		h2 {
			font-size: 16px;
			width: 80px;
		}
	}
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
				cursor: pointer;
        margin-left: 5px;
			}
		}
		@media (max-width: 700px) {
			position: relative;
			flex-direction: column;
			.transaction {
				font-size: 15px;
				margin-bottom: 30px;
				width: 100%;
				font-weight: bold;
			}
			.budgets__buttons {
				position: absolute;
				bottom: 10px;
				right: 10px;
				.MuiSvgIcon-root {
					font-size: 15px;
					margin-left: 7px;
				}
			}
		}
		@media (max-width: 500px) {
			.transaction {
				flex-direction: column;
				align-items: flex-start;
				border-bottom: 1px solid var(--white);
				span {
					margin: 10px 0;
				}
			}
		}
		@media (max-width: 360px) {
			.transaction {
				font-size: 12px;
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
  
	const handleDelete = (id: string) => {
		dispatch(deleteExpenses(id));
	}
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
										{expense.description}: <span>{expense.value}</span>
									</div>
									<div className='budgets__buttons'>
										<Edit />
										<Delete onClick={()=>handleDelete(expense.id)}/>
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
