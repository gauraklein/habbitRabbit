import React from 'react';
import {initStore} from './redux/store'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
import AppContainer from './AppContainer'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
      <Provider store={store}>
        < AppContainer />
      </Provider>
  );
}


