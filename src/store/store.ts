import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todo/todo.slice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { dispatch, getState } = store;

export type TRootState = ReturnType<typeof getState>;
export type TAppDispatch = typeof dispatch;
