import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AddTodoState {
  //   id: number;
  text: string;
}

// let nextId = 0;

let initialState: AddTodoState = {
  //   id: nextId,
  text: '',
};

const name = 'todo';

const todoSlice = createSlice({
  name,
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddTodoState>) {
      const {text} = action.payload;
      //   state.id = nextId++;
      state.text = text;
    },
  },
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;
