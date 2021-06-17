export interface ITodos {
  todo_id: number;
  task: string;
  isComplete: boolean;
  date?: Date | string;
}

export interface ITodosForm {
  task: string;
  isComplete: boolean;
  date?: Date | string;
}



export type InitialTodos = {
  todos: ITodos[];
  isLoading: boolean
}

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

export interface ISigninUser {
  id?: string;
  email: string;
  password: string
}

export type InitialUser = {
  users: IUser[];
}

export type DeleteTodos = (id: number ) => void;
export type IsCompleteTodos = (todos: ITodos) => void;
export type EditTodos = (id: number, todos: ITodos) => void;
export type Storages = Storage["getItem"];
export type MyRef = {
  className: string | object
}