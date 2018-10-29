import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert,
    AppRegistry,
    TouchableOpacity,
    Text
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import oneScreen from './src/oneScreen';
import twoScreen from './src/twoScreen';
import threeScreen from './src/threeScreen';



const RootStack = createStackNavigator(
    {
        oneScreen: { screen: oneScreen },
        Home: { screen: twoScreen },
        threeScreen: { screen: threeScreen}
    }

);

export default class App extends React.Component{
  render(){
    return <RootStack />
  }
}
