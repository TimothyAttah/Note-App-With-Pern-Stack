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

export interface Expenses {
  expenses_id: string;
  description: string;
  values: number;
}

export interface Incomes {
  incomes_id: string;
  description: string;
  values: number;
}

export type InitialExpenses = {
  expenses: Expenses[];
}

export type InitialIncomes = {
  incomes: Incomes[];
}

export type DeleteTodos = (id: number ) => void;
export type IsCompleteTodos = (todos: ITodos) => void;
export type EditTodos = (id: number, task: string) => void;
export type Storages = Storage["getItem"];
export type MyRef = {
  className: string | object
}