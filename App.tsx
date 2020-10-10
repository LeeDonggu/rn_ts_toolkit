// components/Hello.tsx
import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store';
import {TodoContainer} from './src/containers/Todo';

const App = () => {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
};

export default App;
