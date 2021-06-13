import React, { FC, Fragment } from 'react';
import styled from 'styled-components';


import { ITodos, DeleteTodos, IsCompleteTodos } from '../../redux/Interface';

const TodosItemContainer = styled.ul`
	.isComplete {
		text-decoration: line-through;
		background: var(--sky-blue);
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
`;

const TodosItemRight = styled.div`
 button {
   margin: 0 5px;
   color: var(--crimson);
 }
`;

interface ListsTodosItemProps {
  todo: ITodos;
  deleteTodos: DeleteTodos;
  isComplete: IsCompleteTodos;
}

const TodosItem: FC<ListsTodosItemProps> = ({ todo, deleteTodos, isComplete }) => {
 
	return (
		<Fragment>
			<TodosItemContainer>
				<li className={todo.isComplete ? 'isComplete' : undefined}>
					<TodosItemLeft>
						<input
							type='checkbox'
							checked={todo.isComplete}
							className='checkbox'
							onChange={() => isComplete(todo)}
						/>
						<div>
							<h4> {todo.task}</h4>
							<p>{todo.date}</p>
						</div>
					</TodosItemLeft>
					<TodosItemRight>
						<button>Edit</button>
						<button onClick={() => deleteTodos(todo.id)}>Delete</button>
					</TodosItemRight>
				</li>
			</TodosItemContainer>
		</Fragment>
	);
};

export default TodosItem;
