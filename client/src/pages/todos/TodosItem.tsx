import { FC, Fragment, useState, createRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	listsTodo,
	deleteTodo,
	editTodos,
} from '../../redux/actions/todos';

import {
	ITodos,
	// DeleteTodos,
	// IsCompleteTodos,
	// EditTodos,
} from '../../redux/InterfaceRedux';
import history from '../../history';
import { useEffect } from 'react';
import moment from 'moment';

const TodosItemContainer = styled.ul`
	position: relative;
	.isComplete {
		text-decoration: line-through;
		background: linear-gradient(
			90deg,
			rgba(105, 20, 204, 1) 0%,
			rgba(44, 114, 251, 1) 100%
		);
	}
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
		display: flex;
		justify-content: space-between;
		margin: 15px 0;
		padding: 10px;
		text-transform: capitalize;
		box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
		animation: opacity 0.2s linear;
		@keyframes opacity {
			from {
				opacity: 0;
				transform: scale(0.7);
			}
		}
	}
`;

const TodosItemLeft = styled.div`
	display: flex;
	justify-content: center;
	.checkbox {
		margin-right: 10px;
		margin-top: 2px;
	}
	h4 {
		width: 300px;
	}
	p {
		color: #909090;
		margin-top: 10px;
	}
	@media (max-width: 430px) {
		h4 {
			font-size: 16px;
			width: 200px;
			margin-bottom: 25px;
		}
		p {
			font-size: 12px;
		}
	}
	@media (max-width: 290px) {
		h4 {
			font-size: 14px;
			width: 180px;
		}
	}
`;

const TodosItemRight = styled.div`
	position: absolute;
	right: 20px;
	button {
		margin: 0 5px;
		padding: 5px;
		color: var(--crimson);
	}
	@media (max-width: 575px) {
		bottom: 10px;
	}
	@media (max-width: 290px) {
		button {
			padding: 2px;
			margin: 0 2px;
			font-size: 10px;
		}
	}
`;

interface ListsTodosItemProps {
	todo: ITodos;
	deleteTodos: any;
	isComplete: any;
	editTodo: any;
}

export const TodosItem: FC<ListsTodosItemProps> = ({
	todo,
	deleteTodos,
	isComplete,
	editTodo,
}) => {
	const dispatch = useDispatch();
	const myRef = createRef<HTMLLIElement>();
	const id: object = useParams();

	const [onEdit, setOnEdit] = useState<boolean>(false);
	// const [editVal, setEditVal] = useState({ task: todo.task })
	const [editVal, setEditVal] = useState(todo.task);

	useEffect(() => {
		// if (editVal) setEditVal(todo.task);
		dispatch(listsTodo(id));
	}, [id, dispatch]);

	// const onRemove = (id: number) => {
	// 	const node = myRef.current
	// 	if (node) return node.className = 'active';
	//   setTimeout(() => {
	//    dispatch(deleteTodo(id))
	//  }, 500)
	// }

	// const handleEditValue = (e: ChangeEvent<HTMLInputElement>) => {
	//   // setEditVal({...editVal, [e.target.name]: e.target.value});

	// }

	// const handleSave: EditTodos = (id, todos) => {
	//   // if (editVal === '') {
	//   //   // editTodos(id, todos)
	//   //   // console.log(editVal);
	//   //   setEditVal({editVal: todo.task})
	//   // }
	// }

	const onOpenEdit = (id: number | string) => {
		setOnEdit(true);
		history.push(`/users/todos/${id}/update`);
	};

	return (
		<Fragment>
			<TodosItemContainer>
				{onEdit ? (
					<li className={todo.isComplete ? 'isComplete' : undefined}>
						<TodosItemLeft>
							<input
								type='text'
								value={editVal}
								name='task'
								className='checkbox'
								onChange={e => setEditVal(e.target.value)}
							/>
						</TodosItemLeft>
						<TodosItemRight>
							<button
								onClick={() => dispatch(editTodos(todo.todo_id, todo.task))}
							>
								Save
							</button>
							<button onClick={() => setOnEdit(false)}>Cancel</button>
						</TodosItemRight>
					</li>
				) : (
					<li
						className={todo.isComplete ? 'isComplete' : undefined}
						ref={myRef}
					>
						<TodosItemLeft>
							<input
								type='checkbox'
								checked={todo.isComplete}
								className='checkbox'
								onChange={() => isComplete(todo)}
							/>
							<div>
								<h4> {todo.task}</h4>
								<small>{moment(todo.date).format('llll')}</small>
							</div>
						</TodosItemLeft>
						<TodosItemRight>
							<button onClick={() => onOpenEdit(todo.todo_id)}>Edit</button>
							{/* <button onClick={() => onRemove(todo.todo_id)}>Delete</button> */}
							<button onClick={() => dispatch(deleteTodo(todo.todo_id))}>
								Delete
							</button>
						</TodosItemRight>
					</li>
				)}
			</TodosItemContainer>
		</Fragment>
	);
};
