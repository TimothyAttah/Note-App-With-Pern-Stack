import styled from 'styled-components';

export const BudgetsContainer = styled.div`
	max-width: 500px;
	width: 100%;
	background-color: var(--cream);
	border-radius: 20px;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;
	padding: 20px;
`;

export const BudgetsList = styled.ul`
	li {
		border: 1px solid ${(props: any) => (props.primary ? 'red' : 'greenyellow')};
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 10px;
		margin: 15px 0;
		text-transform: capitalize;
		box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
		background-color: ${(props: any) => (props.primary ? 'red' : 'green')};
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
			border: 1px solid
				${(props: any) => (props.primary ? 'red' : 'greenyellow')};
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
				color: ${(props: any) => (props.primary ? 'red' : '#e5e5e5')};
				opacity: 0.7;
			}
		}
	}
`;
