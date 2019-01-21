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
import homePage from './src/homePage';
import homePage1 from './src/homePage1';
import maintenance1 from './src/maintenance1';
import maintenance2 from './src/maintenance2';

const RootStack = createStackNavigator(
    {
        oneScreen: { screen: oneScreen },
        twoScreen: { screen: twoScreen },
        threeScreen: { screen: threeScreen},
        homePage: {screen: homePage},
        homePage1: {screen: homePage1},
        maintenance1: {screen: maintenance1},
        maintenance2: {screen: maintenance2}
    }

);

export default class App extends React.Component{

    // const firebaseConfig = {
    //     apiKey: "AIzaSyCVrtdDyE-PsuVD4Zwen-aUhVBWs4_LBA8",
    //     authDomain: "vapp-83e57.firebaseapp.com",
    //     databaseURL: "https://vapp-83e57.firebaseio.com",
    //     projectId: "vapp-83e57",
    //     storageBucket: "",
    //     messagingSenderId: "12599813047"
    //   };
    //   firebase.initializeApp(config);
    // console.log(firebase)
    




  render(){
    return <RootStack />
  }
}
