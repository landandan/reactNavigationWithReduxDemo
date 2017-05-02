/**
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(AppReducer);

class ReduxExampleApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default ReduxExampleApp