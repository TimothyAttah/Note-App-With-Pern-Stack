import React, { FC, Fragment } from 'react';
import styled from 'styled-components';

import TodosForm from '../../components/forms/TodosForm';
import TodosLists from './TodosLists';

const MainContainer = styled.main`
	background-color: #e5e5e5;
  padding: 20px 0;
`;

const TodosContainer = styled.section`
	max-width: 500px;
	min-height: 500px;
	border-radius: 20px;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;
	margin: 0 auto;
  padding:20px;
 
	h1 {
		text-align: center;
		font-size: 2.5em;
		text-transform: uppercase;
		color: #e5e5e5;
		/* color: #3d3d3d; */
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
`;


const Todos: FC = () => {
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

export default Todos;