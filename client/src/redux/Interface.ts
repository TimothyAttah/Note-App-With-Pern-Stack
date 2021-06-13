export interface ITodos {
  id: string;
  task: string;
  isComplete: boolean;
  date?: Date;
}

export type InitialTodos = {
  todos: ITodos[];
  isLoading: boolean
}

export type DeleteTodos = (id: string) => void;