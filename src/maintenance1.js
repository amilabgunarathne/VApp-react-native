import React from "react";
import { Text, StyleSheet, View, Platform, TextInput, Image } from "react-native";
import { createStackNavigator } from 'react-navigation';
import Button from './common/Button';
import Img from './common/background';
import Card from './common/Card';
import ModalDropdown from 'react-native-modal-dropdown';


class maintenance1 extends React.Component {
    static navigationOptions = {
        title: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            // user_email: this.props.navigation.state.params.Email,
            // user_password: '',
            // error: '',
            // scrollEnabled: true,
            // loading: true,
            // itemVal: 0,
            // package: [],
           
                       // count: 0,
            vehicleType: 'select vehicle type',
            brand: ['Select Brand'],
            transmission: 'select transmission',
            fuelType: 'select fuel type',
            dropDownData3: ['petrol', 'Diesel', 'Hybrid', 'Electric'],
            dropDownData2: ['manual', 'Automatic'],
            dropDownData1: [],
            search_value: ''
        };
    }
    onButtonPress() {
        console.log("Working");
        const { navigate } = this.props.navigation;
       navigate('maintenance2');
      }
    renderButton() {
                  return (
            <Button onPress={this.onButtonPress.bind(this)
            }
            >
                Edit Profile Details
            </Button>
    
        );
          }
    onSearch(value) {
        this.setState({ search_value: value });

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
        return (
            <View style={{ flex: 1 }}>
                <Img />
                <Card>
                    <View style={styles.mainStyle}>
                        <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./pics/search.png')} style={styles.iconStyle} />
                        </View>
                        <TextInput
                            placeholder="Search..."
                            autoCorrect={false}
                            onChangeText={search_value => this.onSearch(search_value)}
                            value={this.state.search_value}
                            style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.containerStyle1}>

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
                    
                </Card>
                <View style={styles.buttonStyle}>
                            {this.renderButton()}
                        </View>
            </View>
        )


    }
}
const styles = {
    viewStyle: {
        padding: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        // marginBottom: '30%'
    },
    titleStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 1,
        color: '#000'
    },
    logoStyle: {
        height: '100%',
        width: 40
    },
    arrowStyle: {
        height: 20,
        width: 20
    },
    textStyle: {
        fontSize: 15,
        paddingLeft: 10,
        color: '#000'
    },
    containerStyle: {
        // borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        paddingBottom: 100
    },
    containerStyle1: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative'
    },
    iconStyle: {
        height: 40,
        width: 40
    },
    linkStyle: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    downStyle: {
        width: 10,
        height: 10
    },
    spinnerStyle: {
        alignSelf: 'stretch',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 60,
        paddingTop: 10,
        paddingBottom: 10,
        height: 100
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 40
    },
    mainStyle: {
        // padding: 5,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        marginTop: 10,
        borderRadius: 5
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
    iconStyle: {
        height: 30,
        width: 30,
        marginRight: 30,
        marginLeft: 30
    }
}

export default maintenance1;
