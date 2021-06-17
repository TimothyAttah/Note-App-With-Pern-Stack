import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	listsTodos,
	deleteTodos,
  toggleTodos,
  editTodos
} from '../../redux/actions/todosActions';
import { DeleteTodos, EditTodos, IsCompleteTodos } from '../../redux/Interface';
import { StoreState } from '../../redux/reducers';
import TodosItem from './TodosItem';

const TodosLists: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listsTodos());
	}, [dispatch]);

const { todos}  = useSelector((state: StoreState) => state.todos);

	const handleDelete: DeleteTodos = id => {
		dispatch(deleteTodos(id));
	};

	const handleIsComplete: IsCompleteTodos = todos => {
		dispatch(toggleTodos(todos));
  };

  const handleEdit: EditTodos = (id, todos) => {
    dispatch(editTodos(id, todos))
  }
	return (
		<Fragment>
			{todos ? (
				todos.length ? (
					todos.map(todo => {
						return (
							<TodosItem
								key={todo.todo_id}
								todo={todo}
								deleteTodos={handleDelete}
                isComplete={handleIsComplete}
                editTodos={handleEdit}
							/>
						);
					})
				) : (
					<div>
						<h2>You have nothing to do</h2>
					</div>
				)
			) : (
				<h2>Loading</h2>
			)}
			<div>
				<h2>
					{todos && todos.length > 0
						? `You have ${todos.length} things to do`
						: ''}
				</h2>
			</div>
		</Fragment>
	);
};

export default TodosLists;
