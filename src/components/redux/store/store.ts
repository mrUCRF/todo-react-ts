import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/TodoSlice";

const rootReducer: any = {
  todoReducer,
};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
