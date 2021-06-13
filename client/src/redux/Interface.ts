export interface ITodos {
  task: string;
  isComplete: boolean;
  date?: Date;
}

export type InitialTodos = {
  todos: ITodos[];
  isLoading: boolean
}