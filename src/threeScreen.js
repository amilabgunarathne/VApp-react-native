import React from "react";
import {Text, View,Platform,TextInput,TouchableOpacity, StyleSheet,Button} from "react-native";
import {createStackNavigator} from 'react-navigation';


class threeScreen extends React.Component {
  static navigationOptions = {
     title: '',
  };


    render() {
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
              buttonStyle={buttonstyle}
              title="Search"
              onPress={()=> console.log('the Button was pressed')}

          />
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
