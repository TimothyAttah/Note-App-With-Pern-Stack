import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { BudgetsForm } from '../../components/forms/BudgetsForm';

import { Expenses } from './Expenses';
import { Incomes } from './Incomes';
import { Transactions } from './Transactions';

const ListsOfTransactions = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const Budgets: FC = () => {
	return (
		<Fragment>
			<Transactions />
			<div>
				<BudgetsForm />
			</div>
			<ListsOfTransactions>
				<Incomes />
				<Expenses />
			</ListsOfTransactions>
		</Fragment>
	);
};
