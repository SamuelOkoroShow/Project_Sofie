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
  Dimensions,
  View
} from 'react-native';
var {height, width} = Dimensions.get('window');


export default class Dash extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>YO YAYAYA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    height:height,
    backgroundColor:'#333'
  },
});
