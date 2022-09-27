import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/TodoSlice";

const rootReducer = {
  todoReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>; // state type
export type AppDispatch = typeof store.dispatch; // dispatch type
