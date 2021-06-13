import React, { FC } from 'react';
import { ITodos, DeleteTodos } from '../../redux/Interface';

interface ListsTodosItemProps {
  todo: ITodos;
  deleteTodos: DeleteTodos
}

const ListsTodosItem: FC<ListsTodosItemProps> = ({todo,deleteTodos }) => {
	return (
		<div>
      <ul>
        <li>
          <input type='checkbox' checked={todo.isComplete} />
          {todo.task}
          <div>
            <button>Edit</button>
            <button onClick={()=>deleteTodos(todo.id)}>Delete</button>
          </div>
        </li>
      </ul>
		</div>
	);
};

export default ListsTodosItem;
