import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(todo) {
      //
    },
    removeTodo(id) {
      //
    },
    editTodo(id) {
      //
    },
  },
  extraReducers(builder) {
    // TODO: stub
  },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
