import { FC, Fragment } from 'react';
import styled from 'styled-components';

import TodosForm from '../../components/forms/TodosForm';
import TodosLists from './TodosLists';


const MainContainer = styled.main`
	background: linear-gradient(
		90deg,
		rgba(105, 20, 204, 1) 0%,
		rgba(44, 114, 251, 1) 100%
	);
	padding: 20px 0;
`;

const TodosContainer = styled.section`
	max-width: 550px;
	min-height: 500px;
	border-radius: 20px;
	background-color: #e5e5e5;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;
	margin: 0 auto;
	padding: 20px;

	h1 {
		text-align: center;
		font-size: 2.5em;
		text-transform: uppercase;
		color: #e5e5e5;
		margin-bottom: 20px;
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
		margin: 30px 0;
	}
	h2 {
		font-size: 2em;
		text-align: center;
		color: #377cff;
		margin-top: 50px;
		margin-bottom: 20px;
		text-transform: capitalize;
	}
	@media (max-width: 575px) {
		width: 400px;
	}
	@media (max-width: 430px) {
		width: 330px;
		h2 {
			font-size: 20px;
		}
	}
	@media (max-width: 330px) {
		width: 300px;
	}
	@media (max-width: 290px) {
		width: 260px;
		h2 {
			font-size: 18px;
		}
	}
`;


export const Todos: FC = () => {
	return (
		<Fragment>
			<MainContainer>
				<TodosContainer>
					<TodosForm />
					<h1>To do list</h1>
					<TodosLists />
				</TodosContainer>
			</MainContainer>
		</Fragment>
	);
};

