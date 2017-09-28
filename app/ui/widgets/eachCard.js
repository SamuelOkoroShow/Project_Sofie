/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  LayoutAnimation,
  Text,
  View
} from 'react-native';

export default class eachCard extends Component {
  render() {
    return (
      <View  style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width:100,
    height:200,
    marginLeft:-20,
    transform:[{skewY:'-9deg'}],
    borderRadius:7,
    borderWidth:5 ,
    borderColor:"rgba(255,255,255,0.1)"
  },
});
