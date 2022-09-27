import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ITodoList {
  id: number;
  name: string;
  status: boolean;
}

const initialState: any = [
  {
    id: 1,
    name: "todo1",
    status: true,
  },
  {
    id: 2,
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
        id: uuidv4(),
        name: action.payload,
        status: false,
      });
    },
    editTodo(state, action) {
      state.map((i: ITodoList) => {
        if (i.id === action.payload.id) {
          i.name = action.payload.value;
        }
        return i;
      });
    },
    completedTodo(state, action: PayloadAction<number>) {
      state.map((i: ITodoList) => {
        if (i.id === action.payload) {
          i.status = !i.status;
        }
        return i;
      });
    },
    deleteTodo(state, action: PayloadAction<number>) {
      let newState = state.filter(
        (task: ITodoList) => task.id !== action.payload
      );
      return newState;
    },
  },
});

export default TodoSlice.reducer;
