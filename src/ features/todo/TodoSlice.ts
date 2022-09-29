import {
  createSlice,
  PayloadAction,
  nanoid,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ITodo {
  id: string;
  name: string;
  status: boolean;
}

const initialState: ITodo[] = [
  {
    id: nanoid(),
    name: "todo1",
    status: true,
  },
  {
    id: nanoid(),
    name: "todo2",
    status: false,
  },
];

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({
        id: nanoid(),
        name: action.payload,
        status: false,
      });
    },
    editTodo(state, action) {
      state.map((todo: ITodo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.value;
        }
        return todo;
      });
    },
    completedTodo(state, action: PayloadAction<string>) {
      state.map((todo: ITodo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
    },
    deleteTodo(state, action: PayloadAction<string>) {
      let newState = state.filter((task: ITodo) => task.id !== action.payload);
      return newState;
    },
  },
});
export const { addTodo, editTodo, completedTodo, deleteTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
