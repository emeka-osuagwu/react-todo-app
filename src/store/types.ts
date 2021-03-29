export const TODOS = 'TODOS';
export const LOADING = 'LOADING';
export const SET_TODOS = 'SET_TODOS';


export type DefaultStateI  = {
    loading: boolean,
    todos: TodoInterface[]
}
  
export interface searchFilterInterface {
    (source: string): void;
}

export interface statusFilterInterface {
    (source: boolean): void;
}

export interface todoReducerInterface {
    todoReducer: {
        todos: Array<TodoInterface>;
        loading: boolean;
    };
}

export type TodoInterface = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export interface TodoLoading {
    type: typeof LOADING
}
  

export interface SetTodos {
    type: typeof SET_TODOS
}
  
export type TodoDispatchTypes = TodoLoading | SetTodos