import  { FC, Fragment, useState, createRef, ChangeEvent } from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


import { ITodos, DeleteTodos, IsCompleteTodos, EditTodos } from '../../redux/Interface';

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
  @keyframes del{
    to{
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
	@media (max-width: 430px){
		h4 {
			font-size: 16px;
			width: 200px;
			margin-bottom: 25px;
		}
		p {
			font-size: 12px;
		}
	}
	@media (max-width: 290px){
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
 @media (max-width: 575px){
	 bottom: 10px;
 }
 @media (max-width: 290px){
	 button {
		 padding: 2px;
		 margin: 0 2px;
		 font-size: 10px;
	 }
 }
`;

interface ListsTodosItemProps {
  todo: ITodos;
  deleteTodos: DeleteTodos;
  isComplete: IsCompleteTodos;
  editTodos: EditTodos;
}

const TodosItem: FC<ListsTodosItemProps> = ({ todo, deleteTodos, isComplete, editTodos }) => {
  // const dispatch = useDispatch()
	 const myRef = createRef<HTMLLIElement>()


  const  todosId  = useParams();

  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [editVal, setEditVal] = useState(todo.task)
  
  const onRemove = (id: string) => {
		const node = myRef.current
		if (node) return node.className = 'active';
    setTimeout(() => {
     deleteTodos(id)
   }, 500)
  }

  const handleEditValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEditVal(e.target.value);
	}
	
	

  const handleSave: EditTodos = (id, todos) => {
    // if (editVal === '') {
    //   // editTodos(id, todos)
    //   // console.log(editVal);
    //   setEditVal({editVal: todo.task})
    // }
  }

  const onOpenEdit = () => {
		setOnEdit(true)
	console.log('todosId:', todosId);
  }

	return (
		<Fragment>
			<TodosItemContainer>
				{onEdit ? (
					<li className={todo.isComplete ? 'isComplete' : undefined}>
						<TodosItemLeft>
							<input
								type='text'
								value={editVal}
								className='checkbox'
								onChange={handleEditValue}
							/>
						</TodosItemLeft>
						<TodosItemRight>
							<button onClick={() => handleSave(todo.id, todo)}>Save</button>
							<button onClick={() => setOnEdit(false)}>Cancel</button>
						</TodosItemRight>
					</li>
				) : (
					<li className={todo.isComplete ? 'isComplete' : undefined} ref={myRef}>
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
							<button onClick={onOpenEdit }>Edit</button>
							<button onClick={() => onRemove(todo.id)}>Delete</button>
						</TodosItemRight>
					</li>
				)}
			</TodosItemContainer>
		</Fragment>
	);
};

export default TodosItem;
