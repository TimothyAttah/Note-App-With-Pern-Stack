import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listsIncomes } from '../../redux/actions/incomesActions';
import { listsExpenses } from '../../redux/actions/expensesActions';
import { StoreState } from '../../redux/reducers';
import {
	TransactionsContainer,
	TotalBalances,
	TotalIncomes,
	TotalExpenses,
	TotalsWrapper,
} from './TransactionStyles';

export const Transactions: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listsIncomes());
		dispatch(listsExpenses());
	}, [dispatch]);
	const { incomes } = useSelector((state: StoreState) => state.incomes);
	const { expenses } = useSelector((state: StoreState) => state.expenses);

	const incomeTransaction = incomes.map(income => income.values);
	const expensesTransaction = expenses.map(expense => expense.values);
	const totalIncome = incomeTransaction
		.reduce((acc, result) => (acc += result), 0)
		.toFixed(2);
	const totalExpenses = expensesTransaction
		.reduce((acc, result) => (acc += result), 0)
		.toFixed(2);

	const totalIncomeValue = parseInt(totalIncome);
	const totalExpensesValue = parseFloat(totalExpenses);
	const totalBalance = totalIncomeValue - totalExpensesValue;

	return (
		<Fragment>
			<TransactionsContainer>
				<TotalBalances>
					<h2>
						Balance:
						<span>
							{totalBalance > 1
								? `+${totalBalance
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
								: `${totalBalance
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
							.00
						</span>
					</h2>
				</TotalBalances>
				<TotalsWrapper>
					<TotalIncomes>
						<h4>
							Income:
							<span>
								{totalIncomeValue > 1
									? `+${totalIncomeValue
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
									: `${totalIncomeValue
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
								.00
							</span>
						</h4>
					</TotalIncomes>
					<TotalExpenses>
						<h4>
							Expenses:
							<span>
								{totalExpensesValue > 1
									? `-${totalExpensesValue
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
									: `${totalExpensesValue
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
								.00
							</span>
						</h4>
					</TotalExpenses>
				</TotalsWrapper>
			</TransactionsContainer>
		</Fragment>
	);
};
