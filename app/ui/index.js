/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import DashPanel from './dash_panel'
import Finance from './widgets/finances'
import EachCard from './widgets/eachCard'
import back from '../pouch/imgs/scrollBack.jpg'

export default class index extends Component {
  render() {
    return (
      <Image source={back} resizeMode = 'stretch' style={styles.container}>
      <EachCard />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    padding:25,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F5FCFF',
  },
});
