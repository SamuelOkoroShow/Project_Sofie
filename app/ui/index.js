/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DashPanel from './dash_panel'
import Finance from './widgets/finances'
import EachCard from './widgets/eachCard'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
      <EachCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:15,
    backgroundColor: '#F5FCFF',
  },
});
