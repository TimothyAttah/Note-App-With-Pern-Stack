import  { FC, Fragment,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {listsTodos, deleteTodos } from '../../redux/actions/todosActions';
import { DeleteTodos } from '../../redux/Interface';
import { StoreState } from '../../redux/reducers';
import TodosItem from './TodosItem';

const TodosLists: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsTodos())
  }, [dispatch]);

  const {todos} = useSelector((state: StoreState) => state.todos)
 
  const handleDelete: DeleteTodos = (id) => {
    dispatch(deleteTodos(id))
  }
  return (
    <Fragment>
      {todos.length ? (
        todos.map(todo => {
          return (
            <TodosItem
              key={todo.id}
              todo={todo}
              deleteTodos={handleDelete}
            />
          )
        })
      ): (
        <div><h2>You have nothing to do</h2></div>
      )}
      <h2>{todos.length > 0 ? `You have ${todos.length} things to do` : ''}</h2>
    </Fragment>
  )
}

export default TodosLists
