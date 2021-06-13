export interface ITodos {
  id: string;
  task: string;
  isComplete: boolean;
  date?: Date | string;
}

export type InitialTodos = {
  todos: ITodos[];
  isLoading: boolean
}

export type DeleteTodos = (id: string) => void;
export type IsCompleteTodos = (todos: ITodos) => void;