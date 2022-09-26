import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodoList {
  id: number;
  name: string;
  status: boolean;
}

const initialState: ITodoList[] = [
  {
    id: 1,
    name: "todo1",
    status: false,
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
    addTodo(state, action: PayloadAction<ITodoList>) {
      console.log(` Add todo, state: ${state}`);
    },
    editTodo(state, action: PayloadAction<ITodoList>) {
      console.log(` Edit todo, state: ${state}`);
    },
  },
});

export default TodoSlice.reducer;
