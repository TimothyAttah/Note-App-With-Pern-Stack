import { FC, FormEvent, Fragment, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { createTodos } from '../../redux/actions/todos';
import { v4 } from 'uuid';
import { ITodos } from '../../redux/InterfaceRedux';

const FormContainer = styled.form`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	input,
	button {
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 5px;
		padding: 0 5px;
		background: transparent;
		box-shadow: inset -5px -5px 5px #fff7, inset 5px 5px 5px #0002;
	}
	input {
		padding: 20px 10px;
	}
	button {
		width: 130px;
		margin-left: 15px;
		cursor: pointer;
		box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
		background: linear-gradient(
			90deg,
			rgba(105, 20, 204, 1) 0%,
			rgba(44, 114, 251, 1) 100%
		);
		color: #e5e5e5;
		font-weight: bold;
		text-transform: capitalize;
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
	}
	@media (max-width: 430px) {
		button {
			font-size: 12px;
			width: 115px;
		}
		input {
			::placeholder {
				font-size: 10px;
				font-weight: 500;
			}
		}
	}
`;

export const TodosForm: FC = () => {
	const dispatch = useDispatch();
	const [task, setTask] = useState<string>('');
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTodo:ITodos = {
			todo_id: v4(),
			task,
			isComplete: false,
			date: new Date().toISOString(),
		};
		dispatch(createTodos(newTodo));
		setTask('');
	};
	return (
		<Fragment>
			<FormContainer onSubmit={handleSubmit}>
				<input
					placeholder='Create your todos here...'
					value={task}
					onChange={e => setTask(e.target.value)}
				/>
				<button>Add a todo</button>
			</FormContainer>
		</Fragment>
	);
};
