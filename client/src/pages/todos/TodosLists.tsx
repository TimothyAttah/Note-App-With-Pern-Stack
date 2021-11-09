import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	listsTodos,
	deleteTodo,
	toggleTodos,
	editTodos,
} from '../../redux/actions/todos';
// import { DeleteTodos, EditTodos, IsCompleteTodos, ITodos } from '../../redux/InterfaceRedux';
import { StoreState } from '../../redux/reducers';
import { TodosItem } from './TodosItem';


export const TodosLists: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listsTodos());
	}, [dispatch]);

	const {todos}  = useSelector((state: StoreState) => state.todos);

	console.log(todos);

	const handleDelete = (id: string | number) => {
		dispatch(deleteTodo(id));
	};

	const handleIsComplete = (todos: any) => {
		dispatch(toggleTodos(todos));
	};

	const handleEdit = (id: string | number, todos: string) => {
		dispatch(editTodos(id, todos));
	};
	return (
		<Fragment>
			{todos.length ? (
				todos.map((todo: any) => {
					return (
						<TodosItem
							key={todo.todo_id}
							todo={todo}
							deleteTodos={handleDelete}
							isComplete={handleIsComplete}
							editTodo={handleEdit}
						/>
					);
				})
			) : (
				<div>
					<h2>You have nothing to do</h2>
				</div>
			)}
			<div>
				{todos.length > 0 ? <h2>You have {todos.length} things to do</h2> : ''}
			</div>
		</Fragment>
	);
};
