/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});


class AppWithNavigationState extends Component {
  props: {
    dispatch: any,
    nav: Object,
  }
  render() {
    const dispatch = this.props.dispatch
    const nav = this.props.nav
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    )
  }
}

function mapStateToProps(state) {
  return ({
    nav: state.nav,
  })
}


export default connect(mapStateToProps)(AppWithNavigationState);