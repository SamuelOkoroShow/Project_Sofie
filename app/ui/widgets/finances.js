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
import Icon from 'react-native-vector-icons/feather';

export class finance extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{width:40, height:40, borderRadius:20,  }}>
      <Icon name = 'wind' size={20} color='#333' />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    right:-200,
    width:width,
    height:height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
