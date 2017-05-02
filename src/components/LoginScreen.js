/**
 * @flow
 */
import React, { PropTypes, Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { pushRoute } from "../actions/navigation";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Log In',
    headerRight: <Text>登录</Text>,
  }
  props : {
    navigation: PropTypes.object.isRequired,
    pushRoute: (v) => void,
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen A
        </Text>
        <Text style={styles.instructions}>
          This is great
        </Text>
        <Button
          onPress={() => this.props.pushRoute({ routeName: 'Main' })}
          title="Log in"
        />
      </View>
    )
  }
}


const mapStateToProps = state => ({
  //isLoggedIn: state.auth.isLoggedIn,
});


const mapDispatchToProps = dispatch => ({
  pushRoute: (v) => dispatch(pushRoute(v)),
});



export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);