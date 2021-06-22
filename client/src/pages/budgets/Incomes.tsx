import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';
import styled from 'styled-components';

import { listsIncomes } from '../../redux/actions/incomesActions';
import { StoreState } from '../../redux/reducers';


const BudgetsContainer = styled.div`
  border: 2px solid red;
  max-width: 500px;
  width: 100%;
  background-color: var(--cream);
`;

const BudgetsList = styled.ul`
	li {
		border: 2px solid greenyellow;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 10px;
		margin: 15px 0;
		text-transform: capitalize;
		box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
		background-color: green;
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
				color: greenyellow;
				opacity: 0.7;
				:hover {
					color: var(--light-blue);
				}
			}
		}
	}
`;

export const Incomes:FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsIncomes())
  }, [dispatch]);
  const { incomes } = useSelector((state: StoreState) => state.incomes);
  
  return (
		<Fragment>
			<BudgetsContainer>
				<h2>Income Transaction</h2>
				{incomes.length ? (
					incomes.map(income => {
						return (
							<BudgetsList key={income.id}>
								<li>
									<div className='transaction'>
										{income.description} -
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
