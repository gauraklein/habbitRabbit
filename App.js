import React from 'react';
import {initStore} from './redux/store'
import {Provider} from 'react-redux'

import AppContainer from './AppContainer'

const store = initStore();

export default function App() {
  return (
      <Provider store={store}>
        < AppContainer />
      </Provider>
  );
}


