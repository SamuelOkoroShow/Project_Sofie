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
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import myCar from '../../pouch/imgs/sean_crow.png'

export default class eachCard extends Component {
  attribute1(){
    return(<View style={{width:50, height:50, borderRadius:25, backgroundColor:'#e4d6c9'}} />)
  }
  render() {
    return (
      <View  style={styles.container}>
      <StatusBar
    hidden={true}   />
      <Image source={myCar} resizeMode="contain" style={{position:'absolute', top:100, left:10, height:300, width:200}} />
      <View style={{flex:1, padding:10}}>
      {this.attribute1()}
      {this.attribute1()}
      {this.attribute1()}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    width:190,
    height:600,
    justifyContent:'center',
    marginLeft:-20,
    transform:[{skewY:'-9deg'}],
    borderWidth:5 ,
    borderColor:"rgba(255,255,255,0.1)"
  },
});
