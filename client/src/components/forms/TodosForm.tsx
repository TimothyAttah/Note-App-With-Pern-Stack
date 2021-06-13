import React, { FC, FormEvent, Fragment, useState } from 'react';
import styled from 'styled-components';

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
    padding: 15px;
  }
	button {
		width: 80px;
		margin-left: 15px;
		letter-spacing: 2px;
		cursor: pointer;
		box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
		background-color: #e5e5e5;
		/* background-color: #377cff; */
		/* color: #377cff; */
		color: #000;
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
	}
`;

const TodosForm:FC = () => {
  const [task, setTask] = useState<string>('');
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    setTask('');
  }
  return (
    <Fragment>
      <FormContainer onSubmit={handleSubmit}>
        <input
          placeholder='Create your todos here...'
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button>Create</button>
      </FormContainer>
    </Fragment>
  )
}

export default TodosForm
