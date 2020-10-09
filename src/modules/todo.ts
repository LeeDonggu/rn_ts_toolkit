import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
// import {getSplashImage} from 'api';
import {RootState} from '../store';

const name = 'todo';

export const fetchTodo = createAsyncThunk(
  `${name}/fetchTodo`, // 액션 이름을 정의해 주도록 합니다.
  async ({test1, test2}: {test1: number; test2: number}, thunkAPI) => {
    try {
      //   return (await getSplashImage(1)).data;
    } catch (e) {
      //   return thunkAPI.rejectWithValue(await e.response.data);
    }
  },
);

type stateType = {
  title: {name: string; content: number};
  content: string;
  loading: boolean;
  lists: any;
};

const initialState: stateType = {
  title: {name: 'ttttt', content: 0},
  content: '',
  loading: false,
  lists: [],
};

export const todoSlice = createSlice({
  name,
  initialState,
  reducers: {
    setTitle: (
      state,
      action: PayloadAction<{name: string; content: number}>,
    ) => {
      state.title.name = action.payload.name;
    },
  },
  extraReducers: {
    [fetchTodo.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [fetchTodo.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = true;
      state.lists = action.payload;
    },
    [fetchTodo.rejected.type]: (
      state,
      action: PayloadAction<{message: string; status: number}>,
    ) => {
      // 실패
      state.loading = true;
      state.title.name = action.payload.message;
      state.lists = [];
    },
  },
});

const listState = (state: RootState) => state.todoSlice.lists;

export const getFilterLike = createSelector(listState, (lists) => {
  return lists.filter(({likes}: {likes: number}) => likes > 10);
});
export const {setTitle} = todoSlice.actions;

export const lists = (state: RootState) => state.todoSlice.lists;
export const titles = (state: RootState) => state.todoSlice.title;

export default todoSlice.reducer;
