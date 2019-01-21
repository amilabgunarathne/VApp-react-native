import React from "react";
import { Text, View, Platform, TextInput, TouchableOpacity, StyleSheet, Image, Picker, ScrollView } from "react-native";
import { createStackNavigator } from 'react-navigation';
import Button from './common/Button';

class homePage1 extends React.Component {

  static navigationOptions = {
    title: '',
  };
  onButtonPress() {
    console.log("Working");
    const { navigate } = this.props.navigation;
    navigate('homePage1');
  }
  submitPress() {

    fetch('https://unconsidered-baths.000webhostapp.com/logout.php')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.results[0]);
        if (responseJson === 'NULL') {
          const { navigate } = this.props.navigation;
          navigate('oneScreen');
        }
      }).catch((error) => {
        // console.error(error);
        // Alert.alert(error);
        Alert.alert("No internet connection");
        // this.setState({ loading: false });
      });
  }
  renderButton() {
    // if (this.state.loading) {
    //     return <Spinner size="small" spinnerStyle={styles.spinnerStyle} />;
    // }

    return (
      <Button onPress={this.onButtonPress.bind(this)
      }
      >
        Edit Profile Details
        </Button>

    );
  }
  completeView() {
    return (
      <View style={styles.fullViewStyle}>
        <View style={styles.containerStyle}>
          <Text style={styles.titleStyle}>Your Car Name</Text>


          <Image source={require('./pics/corza01.jpg')} style={styles.imageStyle} />

        </View>

        <View style={styles.cardStyle}>
          <View style={{ width: '35%' }}>
            <Text style={styles.textBoldStyle}>Model : </Text>
          </View>
          {/* <View style={{ width: '65%' }}>
            <Text style={styles.textStyle}>{this.state.data[0].Job_Name}</Text>
          </View> */}
        </View>
        <View style={styles.cardStyle}>
          <View style={{ width: '35%' }}>
            <Text style={styles.textBoldStyle}>Car Number : </Text>
          </View>
          {/* <View style={{ width: '65%' }}>
            <Text style={styles.textStyle}>{this.state.data[0].SRN_No}</Text>
          </View> */}
        </View>
        <View style={styles.cardStyle}>
          <View style={{ width: '35%' }}>
            <Text style={styles.textBoldStyle}>Revenue Licence Expire Date: </Text>
          </View>
          {/* <View style={{ width: '65%' }}>
            <Text style={styles.textStyle}>{this.state.data[0].SRN_Date.date}</Text>
          </View> */}
        </View>
        <View style={styles.cardStyle}>
          <View style={{ width: '35%' }}>
            <Text style={styles.textBoldStyle}>Insuarance Expire Date: </Text>
          </View>
          {/* <View style={{ width: '65%' }}>
            <Text style={styles.textStyle}>{this.state.data[0].UserName}</Text>
          </View> */}
        </View>
        <View style={{ width: '35%' }}>
          <Text style={styles.textBoldStyle}>Eco-Test Expire Date: </Text>
        </View>
        {/* <View style={{ width: '65%' }}>
            <Text style={styles.textStyle}>{this.state.data[0].UserName}</Text>
          </View> */}

        <View style={styles.cardStyle}>
          <View style={{ width: '35%' }}>
            <Text style={styles.textBoldStyle}>Remarks : </Text>
          </View>
          {/* <View style={{ width: '65%' }}>
            <Text style={styles.textStyle}>{this.state.data[0].Remarks}</Text>
          </View> */}
        </View>
      </View >
    );
  }
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps='always'>
        {this.completeView()}
        <View style={styles.buttonStyle}>
          {this.renderButton()}

          <Button onPress={this.submitPress.bind(this)}>
            Logout
        </Button>
        </View>

      </ScrollView>
    );
  }
}
const styles = {
  fullViewStyle: {
    backgroundColor: '#fff',
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  viewStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 20
  },
  titleStyle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  buttonTextStyle: {
    fontSize: 17,
    color: '#fff'
  },
  logoStyle: {
    height: '100%',
    width: 40
  },
  iconStyle: {
    height: 40,
    width: 40
  },
  textStyle: {
    color: '#000'
  },
  textBoldStyle: {
    color: '#707270'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 23,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c8cbcf',
    borderRadius: 5
  },
  approveStyle: {
    flex: 1,
    height: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16922C',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#16922C',
    marginLeft: 5,
    marginRight: 5
  },
  cancelStyle: {
    flex: 1,
    height: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3CA0C',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#D3CA0C',
    marginLeft: 5,
    marginRight: 5
  },
  rejectStyle: {
    flex: 1,
    height: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F22D1D',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#F22D1D',
    marginLeft: 5,
    marginRight: 5
  },
  containerStyle: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#056416'
  },
  containerStyle2: {
    marginTop: 30,
    height: 100,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  imageStyle: {
    height: 100,
    width: 80,
    marginLeft: 50
  },
  cardStyle: {
    marginTop: 20,
    padding: 5,
    marginLeft: 20,
    marginRight: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    //borderColor: '#ddd',
    position: 'relative',
  },
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingTop: 30,
    backgroundColor: '#fff'
  },
  spinnerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 60,
    paddingTop: 10,
    paddingBottom: 10
  },
  dataStyle: {
    color: '#000',
    fontSize: 12
  },
  buttonStyle: {
    marginTop: 20,
    // borderBottomWidth: 1,
    padding: 5,
    borderRadius: 60,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
  modalStyle: {
    marginTop: 20,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    //borderColor: '#ddd',
    position: 'relative',
  }
}
export default homePage1;
