/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet, View, Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import './ReactotronConfig';
import TimerMixin from 'react-timer-mixin';


export default class TemanBisnisOke extends Component {
    componentDidMount(){
        TimerMixin.setTimeout(
            () => { SplashScreen.hide();},
            100
        );
    }

  render() {
      SplashScreen.show();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          reBuild TemanBisnis YOSH!!!
        </Text>

        <Text style={styles.instructions}>
          Tarataratatararara,{'\n'}
          Bersabar menuju sukses
        </Text>
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TemanBisnisOke', () => TemanBisnisOke);
