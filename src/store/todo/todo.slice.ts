import { createSlice } from "@reduxjs/toolkit";
interface ITodo {
  id: number;
  title: string;
  description: string;
  deadline: Date | string;
  isDone: boolean;
}

interface ITodoState {
  todos: Array<ITodo>;
}

const initialState: ITodoState = {
  todos: [] as Array<ITodo>,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos.push(payload);
    },
    removeTodo(state, { payload }) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    editTodo(state, { payload }) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? payload.todo : todo
      );
    },
  },
  extraReducers(builder) {
    // TODO: stub
  },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
