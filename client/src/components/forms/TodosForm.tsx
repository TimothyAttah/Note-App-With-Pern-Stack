import React, {FC, FormEvent, Fragment, useState} from 'react'

const TodosForm:FC = () => {
  const [task, setTask] = useState<string>('');
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    setTask('');
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Create your todos here...'
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button>Create</button>
      </form>
    </Fragment>
  )
}

export default TodosForm
