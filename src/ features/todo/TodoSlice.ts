import { FilterType } from "./../../utils/filterTodo";
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

interface IInitialState {
  todos: ITodo[];
  filterType: FilterType;
}
const initialState: IInitialState = {
  todos: [
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
  ],
  filterType: FilterType.ALL,
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterType>) {
      state.filterType = action.payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: nanoid(),
        name: action.payload,
        status: false,
      });
    },
    editTodo(state, action) {
      state.todos.map((todo: ITodo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.value;
        }
        return todo;
      });
    },
    completedTodo(state, action: PayloadAction<string>) {
      state.todos.map((todo: ITodo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(
        (task: ITodo) => task.id !== action.payload
      );
    },
  },
});
export const { addTodo, editTodo, completedTodo, deleteTodo, setFilter } =
  TodoSlice.actions;
export default TodoSlice.reducer;
