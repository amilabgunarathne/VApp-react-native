import React from "react";
import {Text, View,Platform,TextInput,TouchableOpacity, StyleSheet,Button} from "react-native";
import {createStackNavigator} from 'react-navigation';
import DatePicker from 'react-native-datepicker'
//import t from 'tcomb-form-native';


class twoScreen extends React.Component {
    static navigationOptions = {
       title: '',
    };

    constructor(props) {
        super(props);
      this.state = {
           email: '',
           password: '',
           date:'',
           date1:''
      };
    }
    nextPress() {
      console.log("Working");
      const { navigate } = this.props.navigation;
      navigate('threeScreen');
}

    render() {
       return (
    <View style={styles.bGround}>
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
        onChangeText={name => this.setState({ name })}
        value={this.state.name}
        />
        <TextInput
        style={styles.textinput}
        placeholder="Your Car Number"
          underlineColorAndroid={'Transparent'}
          onChangeText={number => this.setState({ number })}
          value={this.state.number}
          />
        <TextInput
         style={styles.textinput}
          placeholder="Password"
          underlineColorAndroid={'Transparent'}
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          />

          <DatePicker
  style={{width: 330}}
  date={this.state.date}
  mode="date"
  placeholder="Expire date of Revenue Licence"
  format="YYYY-MM-DD"
  minDate="2016-05-01"
  maxDate="2020-06-01"
  confirmBtnText="Confirm"
  cancelBtnText="Cancel"
  customStyles={{
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      marginLeft: 36
    }
    // ... You can check the source to find the other keys.
  }}
  onDateChange={(date) => {this.setState({date: date})}}
/>

<DatePicker
style={{width: 330}}
date={this.state.date1}
mode="date"
placeholder="Expire date of Insuarance"
format="YYYY-MM-DD"
minDate="2016-05-01"
maxDate="2020-06-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
dateIcon: {
position: 'absolute',
left: 0,
top: 4,
marginLeft: 0
},
dateInput: {
marginLeft: 36
}
// ... You can check the source to find the other keys.
}}
onDateChange={(date) => {this.setState({date1: date})}}
/>

<DatePicker
style={{width: 330}}
date={this.state.date2}
mode="date"
placeholder="Expire date eco-Test Report"
format="YYYY-MM-DD"
minDate="2016-05-01"
maxDate="2020-06-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
dateIcon: {
position: 'absolute',
left: 0,
top: 4,
marginLeft: 0
},
dateInput: {
marginLeft: 36
}
// ... You can check the source to find the other keys.
}}
onDateChange={(date) => {this.setState({date2: date})}}
/>
<Button
    title="Next"
    onPress={this.nextPress.bind(this)}
    color="#841584"
/>

</View>
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
