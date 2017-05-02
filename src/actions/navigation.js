/**
 * @flow
 */

import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from "react-navigation";
type Route = {
  routeName: string,
}
export function pushRoute(route:Route | Array<Route>) {
  return {
    type: 'PUSH_ROUTE',
    route,
  }
}

export function pop(route:?Route) {
  if (route) {
    return {
      type: 'POP_TO_ROUTE',
      route,
    }
  }
  return {
    type: 'POP_ROUTE',
  }
}