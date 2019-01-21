import React from "react";
import { Alert, Text, View, Platform, TextInput, TouchableOpacity, StyleSheet, Image, Button, Picker } from "react-native";
import { createStackNavigator } from 'react-navigation';
//import React, { Component } from 'react';
//import { Dropdown } from  'react-native-material-dropdown';
//import DropdownMenu from 'react-native-dropdown-menu';
import ModalDropdown from 'react-native-modal-dropdown';

class threeScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params.Email,
      password: this.props.navigation.state.params.Password,
      date: this.props.navigation.state.params.Date,
      date1: this.props.navigation.state.params.Date1,
      date2: this.props.navigation.state.params.Date2,
      name: this.props.navigation.state.params.Name,
      number: this.props.navigation.state.params.Number,
      text: '',
      text1: '',
      vehicleType: 'select vehicle type',
      brand: ['Select Brand'],
      transmission: 'select transmission',
      fuelType: 'select fuel type',
      dropDownData3: ['petrol', 'Diesel', 'Hybrid', 'Electric'],
      dropDownData2: ['manual', 'Automatic'],
      dropDownData1: []
    };
  }
  submitPress() {

    const { text, text1, email, password, date, date1, date2, name, number } = this.state;
    console.log("Working");
    //const { navigate } = this.props.navigation;
    // navigate('threeScreen', { Email: email,Password: password,Date: date,Date1: date1, Date2: date2,Name: name,Number: number });
    fetch('https://unconsidered-baths.000webhostapp.com/register.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        date: date,
        date2: date2,
        name: name,
        number: number,
        text: text,
        text1: text1
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        Alert.alert(responseJson);
      });
  }
  onSelectOpt(idx, value) {
    this.setState({ vehicleType: value });

    if (value == "Cars") {
      this.setState({ dropDownData1: ['1', '2', '3'] });
    }
    else if (value == "Motor Cycles") {
      this.setState({ dropDownData1: ['4', '5', '6'] });
    }
    else if (value == "Vans") {
      this.setState({ dropDownData1: ['4', '5', '6'] });
    }
    else if (value == "Busses") {
      this.setState({ dropDownData1: ['4', '5', '6'] });
    }
    else if (value == "Lorries") {
      this.setState({ dropDownData1: ['4', '5', '6'] });
    }
  }
  onSelectOpt1(idx1, value1) {
    this.setState({ brand: value1 });

  }
  onSelectOpt2(idx2, value2) {
    this.setState({ transmission: value2 });

  }
  onSelectOpt3(idx3, value3) {
    this.setState({ fuelType: value3 });

  }


  render() {
    // var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];

    const {
      containerStyle,
      searchTextStyle,
      buttonStyle,
      bcontainer
    } = styles;

    return (
      <View style={styles.bGround}>
        <View style={styles.bcontainer}>
          <Button
            title="Add your car image"
            //  onPress={this.nextPress.bind(this)}          
            color="#841584"
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid={'Transparent'}
            onChangeText={text1 => this.setState({ text1 })}
            value={this.state.text1}
            multiline={true}
            underlineColorAndroid='transparent'
            placeholder="Add Remarks"
          />
        </View>

        <View style={containerStyle}>
          <TextInput style={searchTextStyle}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Search for your model"
          />
          <Button
            buttonStyle={buttonStyle}
            title="Search"
            onPress={() => console.log('the Button was pressed')}

          />

        </View>

        <View style={{ height: 44 }} />
        <ModalDropdown options={['Cars', 'Motor Cycles', 'Vans', 'Busses', 'Lorries', 'Three wheelers', 'Boats and water transport', 'Tractors', 'Machinery and Heavy']} onSelect={(idx, value) => this.onSelectOpt(idx, value)} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', height: 30, justifyContent: 'center', paddingLeft: 20 }} dropdownStyle={{ width: '80%', height: 100 }} dropdownTextStyle={{ color: '#000', fontSize: 15 }} dropdownTextHighlightStyle={{ fontWeight: 'bold' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '70%' }}>
              <Text style={{ color: '#000', fontSize: 15 }}>{this.state.vehicleType}</Text>
            </View>
            <View style={{ width: '30%', alignItems: 'flex-end', paddingRight: 10 }}>
              <Image
                source={require('./pics/down.png')}
                style={styles.downStyle}
              />
            </View>
          </View>
        </ModalDropdown>

        <ModalDropdown options={this.state.dropDownData1} onSelect={(idx1, value1) => this.onSelectOpt1(idx1, value1)} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', height: 30, justifyContent: 'center', paddingLeft: 20 }} dropdownStyle={{ width: '80%', height: 100 }} dropdownTextStyle={{ color: '#000', fontSize: 15 }} dropdownTextHighlightStyle={{ fontWeight: 'bold' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '70%' }}>
              <Text style={{ color: '#000', fontSize: 15 }}>{this.state.brand}</Text>
            </View>
            <View style={{ width: '30%', alignItems: 'flex-end', paddingRight: 10 }}>
              <Image
                source={require('./pics/down.png')}
                style={styles.downStyle}
              />
            </View>
          </View>
        </ModalDropdown>

        <ModalDropdown options={this.state.dropDownData2} onSelect={(idx2, value2) => this.onSelectOpt2(idx2, value2)} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', height: 30, justifyContent: 'center', paddingLeft: 20 }} dropdownStyle={{ width: '80%', height: 100 }} dropdownTextStyle={{ color: '#000', fontSize: 15 }} dropdownTextHighlightStyle={{ fontWeight: 'bold' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '70%' }}>
              <Text style={{ color: '#000', fontSize: 15 }}>{this.state.transmission}</Text>
            </View>
            <View style={{ width: '30%', alignItems: 'flex-end', paddingRight: 10 }}>
              <Image
                source={require('./pics/down.png')}
                style={styles.downStyle}
              />
            </View>
          </View>
        </ModalDropdown>

        <ModalDropdown options={this.state.dropDownData3} onSelect={(idx3, value3) => this.onSelectOpt3(idx3, value3)} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', height: 30, justifyContent: 'center', paddingLeft: 20 }} dropdownStyle={{ width: '80%', height: 100 }} dropdownTextStyle={{ color: '#000', fontSize: 15 }} dropdownTextHighlightStyle={{ fontWeight: 'bold' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '70%' }}>
              <Text style={{ color: '#000', fontSize: 15 }}>{this.state.fuelType}</Text>
            </View>
            <View style={{ width: '30%', alignItems: 'flex-end', paddingRight: 10 }}>
              <Image
                source={require('./pics/down.png')}
                style={styles.downStyle}
              />
            </View>
          </View>
        </ModalDropdown>
        <View style={styles.bcontainer}>
          <Button
            title="Submit"
            onPress={this.submitPress.bind(this)}
          />



        </View>



      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10

  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    height: 30,
    marginTop: 2

  },
  downStyle: {
    width: 10,
    height: 10
  },
  bcontainer: {
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 0
  },
  bGround: {
    flex: 1,
    paddingLeft: 60,
    paddingRight: 60,
    justifyContent: 'center',
    backgroundColor: '#36485f'
  },
  input: {
    margin: 40,
    //width:200,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    color: '#fff',
    marginBottom: 10,
    paddingBottom: 10,
    // borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },

};
export default threeScreen;
