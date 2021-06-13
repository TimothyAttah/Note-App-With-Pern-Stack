import  { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {listsTodos, deleteTodos } from '../../redux/actions/todosActions';
import { StoreState } from '../../redux/reducers';
import ListsTodosItem from './ListsTodosItem';

const ListsTodos: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsTodos())
  }, [dispatch]);

  const {todos} = useSelector((state: StoreState) => state.todos)
 
  // const handleDelete = (id: string) => {
    
  // }
  return (
    <div>
      {todos.length ? (
        todos.map(todo => {
          return (
            <ListsTodosItem
              key={todo.id}
              todo={todo}
            />
          )
        })
      ): (
        <div><h2>You have nothing to do</h2></div>
      )}
    </div>
  )
}

export default ListsTodos
