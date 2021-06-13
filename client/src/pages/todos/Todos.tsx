import React, { FC, Fragment } from 'react';
import styled from 'styled-components';

import TodosForm from '../../components/forms/TodosForm';
import ListsTodos from './ListsTodos';

const MainContainer = styled.main`
	background-color: #e5e5e5;
	/* width: 100%; */
	/* min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center; */
`;

const TodosContainer = styled.section`
	max-width: 500px;
	min-height: 500px;
	border-radius: 20px;
	box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7;
  margin: 0 auto;
`;


const Todos: FC = () => {
	return (
		<Fragment>
			<MainContainer>
				<TodosContainer>
					<TodosForm />
					<h1>To do list</h1>
					<ListsTodos />
				</TodosContainer>
			</MainContainer>
		</Fragment>
	);
};

export default Todos;
