/**
 * @flow
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(secondAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'POP_ROUTE':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    case 'POP_TO_ROUTE':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate(action.route), state);
      break;
    case 'PUSH_ROUTE':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate(action.route), state);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

function auth(state = { isLoggedIn: false }, action) {
  switch (action.type) {
    case 'PUSH_ROUTE':
      return { ...state, isLoggedIn: true };
    case 'POP_ROUTE':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;