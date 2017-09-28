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
  StatusBar,
  
  TouchableOpacity,
  View
} from 'react-native';

export default class eachCard extends Component {
  render() {
    return (
      <View  style={styles.container}>
      <StatusBar
    hidden={true}   />
      <TouchableOpacity style={{flex:1}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width:190,
    height:600,
    marginLeft:-20,
    transform:[{skewY:'-9deg'}],
    borderWidth:5 ,
    borderColor:"rgba(255,255,255,0.1)"
  },
});
