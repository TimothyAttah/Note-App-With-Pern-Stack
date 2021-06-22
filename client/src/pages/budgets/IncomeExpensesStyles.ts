import styled from 'styled-components';

export const BudgetsContainer = styled.div`
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

export const BudgetsList = styled.ul`
	.active {
		animation: del 0.3s linear;
	}
	@keyframes del {
		to {
			opacity: 0;
			transform: rotate(15deg) skew(25deg) scale(0);
		}
	}
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
