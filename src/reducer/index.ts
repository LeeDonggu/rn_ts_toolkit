import {combineReducers} from '@reduxjs/toolkit';

// import commentsReducer from '../modules/comment/commentsSlice';
// import issuesDisplayReducer from '../modules/issuesDisplay/issuesDisplaySlice';
// import issuesReducer from '../modules/issuesList/issuseSlice';
// import repoDetailsReducer from '../modules/repoSearch/repoDetailSlice';
import todoReducer from '../modules/todo/todoSlice';

const rootReducer = combineReducers({
  // issuesDisplay: issuesDisplayReducer,
  // repoDetails: repoDetailsReducer,
  // issues: issuesReducer,
  // comments: commentsReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
