import React, { FC } from 'react';
import { ITodos } from '../../redux/Interface';

interface ListsTodosItemProps {
  todo: ITodos
}

const ListsTodosItem: FC<ListsTodosItemProps> = ({todo}) => {
	return (
		<div>
      <ul>
        <li>
          <input type='checkbox' checked={todo.isComplete} />
          {todo.task}
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
		</div>
	);
};

export default ListsTodosItem;
