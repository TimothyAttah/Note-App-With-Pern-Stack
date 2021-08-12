import styled from 'styled-components';

export const ModalBox = styled.div`
	display: flex;
	align-items: center;
	margin-left: 100px;
	margin-top: 20px;
	@media (max-width: 780px) {
		margin-left: 10px;
	}
	@media (max-width: 700px) {
		margin-left: 70px;
	}
	@media (max-width: 550px) {
		margin-left: 55px;
	}
	@media (max-width: 415px) {
		margin-left: 38px;
	}
	@media (max-width: 320px) {
		margin-left: 30px;
	}
`;

export const ExpensesForm = styled.form`
	max-width: 980px;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	label {
		color: red;
		font-weight: 550;
		margin: 0 10px;
	}
	input {
		padding: 12px;
		border: 2px solid var(--crimson);
		border-radius: 5px;
	}
	.input-text {
		width: 400px;
	}
	.MuiButton-contained {
		background-color: var(--crimson);
		color: var(--white);
		padding: 10px 0;
		margin: 0 10px;
		:hover {
			background-color: var(--crimson);
		}
	}

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
		label {
			margin-left: 70px;
		}
		input,
		.input-text,
		.MuiButton-contained {
			width: 80%;
			margin: 10px auto;
			padding: 15px;
		}
		.input-text {
			margin-bottom: 20px;
		}
	}
	@media (max-width: 550px) {
		label {
			margin-left: 55px;
		}
	}
	@media (max-width: 415px) {
		label {
			margin-left: 40px;
		}
	}
	@media (max-width: 320px) {
		label {
			margin-left: 30px;
		}
	}
`;

export const IncomesForm = styled.form`
	max-width: 980px;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	label {
		color: green;
		font-weight: 550;
		margin: 0 10px;
	}
	input {
		padding: 12px;
		border: 2px solid green;
		border-radius: 5px;
	}
	.input-text {
		width: 400px;
	}
	.MuiButton-contained {
		background-color: green;
		color: var(--white);
		padding: 10px 0;
		margin: 0 10px;
		:hover {
			background-color: green;
		}
	}

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
		label {
			margin-left: 70px;
		}
		input,
		.input-text,
		.MuiButton-contained {
			width: 80%;
			margin: 10px auto;
			padding: 15px;
		}
		.input-text {
			margin-bottom: 20px;
		}
	}
	@media (max-width: 550px) {
		label {
			margin-left: 55px;
		}
	}
	@media (max-width: 415px) {
		label {
			margin-left: 40px;
		}
	}
	@media (max-width: 320px) {
		label {
			margin-left: 30px;
		}
	}
`;
