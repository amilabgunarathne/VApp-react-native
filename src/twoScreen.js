import React from "react";
import {Text, View,Platform,TextInput,TouchableOpacity, StyleSheet} from "react-native";
import {createStackNavigator} from 'react-navigation';
//import t from 'tcomb-form-native';


class twoScreen extends React.Component {
    static navigationOptions = {
       title: '',
    };


  //  handleSubmit = () => {
  //  const value = this._form.getValue();
  //  console.log('value: ', value);
//  }
    render() {
       return (
    <View style={styles.bGround}>
    <Regform/>
    </View>
        );
    }
}
class Regform extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
         email: '',
         password: ''
    };
  }
  render(){
    return(
<View style={styles.regform}>
<Text style={styles.header}>Registration</Text>
  <TextInput
  style={styles.textinput}
  placeholder="Your Email"
  underlineColorAndroid={'Transparent'}
  onChangeText={email => this.setState({ email })}
  value={this.state.email}
  />

  <TextInput
  style={styles.textinput}
  placeholder="Your Car Name"
    underlineColorAndroid={'Transparent'}
    />
    <TextInput
     style={styles.textinput}
      placeholder="Password"
      underlineColorAndroid={'Transparent'}
      secureTextEntry
      />
</View>

);
  }
}

const styles = StyleSheet.create(
  {
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 40,
    paddingBottom: 10,
   borderBottomColor: '#199187',
   borderBottomWidth: 1,
  },
  regform: {
    alignSelf: 'stretch',
  },
  textinput: {
    alignSelf: 'stretch',
    color: '#fff',
    marginBottom: 30,
    paddingBottom: 10,
   borderBottomColor: '#f8f8f8',
   borderBottomWidth: 1,
 },
 bGround: {
flex: 1,
paddingLeft: 60,
paddingRight: 60,
justifyContent: 'center',
backgroundColor: '#36485f'
}});


export default twoScreen;
