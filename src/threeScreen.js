    import React from "react";
import {Text, View,Platform,TextInput,TouchableOpacity, StyleSheet,Button, Picker} from "react-native";
import {createStackNavigator} from 'react-navigation';
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
      text: ''
    };
  }
  


    render() {
      var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
   
      const {
        containerStyle,
        searchTextStyle,
        buttonStyle
        } = styles;
        
        return (
          <View>
          <Button
              title="Add your car image"
            //  onPress={this.nextPress.bind(this)}          
              color="#841584"
          />

          <View style={containerStyle}>
          <TextInput style={searchTextStyle}/>
          <Button
              buttonStyle={buttonStyle}
              title="Search"
              onPress={() => console.log('the Button was pressed')}

          />
            
          </View>
          <View style={{flex: 1}}>
        <View style={{height: 64}} />
        {/* <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.text} is the best language in the world
            </Text>
          </View>
 
        </DropdownMenu> */}
        {/* <Picker
        selectedValue={"sfsfdsf"}
        style={{ height: 50, width: 100 }}
        mode={"dropdown"}>
        <Picker.Item label="DSFDSF" value="sdfsdf"/>
        <Picker.Item label="DSFDSF" value="fsf"/>
        <Picker.Item label="DSFDSF" value="dfsf"/>
        </Picker> */}
        <ModalDropdown options={['option 1', 'option 2']} style={{ height: 50, width: 100 }}>
          <Text>dfsdfsff</Text>
        </ModalDropdown>
      </View>
          </View>
        );
    }
}
const styles = {
containerStyle: {
  flexDirection: 'row',
  marginTop: 75,
  marginLeft: 10,
  marginRight: 10

},
searchTextStyle: {
  flex: 1
},
buttonStyle: {
height: 30,
marginTop: 8

}

};
export default threeScreen;
