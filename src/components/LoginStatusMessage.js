/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { pushRoute } from '../actions/navigation'

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginStatusMessage = ({ isLoggedIn, pushRoute }) => {
  if (!isLoggedIn) {
    return <Text>Please log in</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now'}
      </Text>
      <Button
        onPress={() => pushRoute({ routeName: 'Profile' })}
        title="Profile"
      />
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


const mapDispatchToProps = dispatch => ({
  pushRoute: (v) => dispatch(pushRoute(v)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginStatusMessage);