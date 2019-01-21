import React from "react";
import { Alert, Text, StyleSheet, View, Platform, TextInput, ScrollView, BackHandler, KeyboardAvoidingView, Image } from "react-native";
import { createStackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Img from './common/background';
class oneScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };
    constructor(props) {
        super(props);

        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
        //  this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            user_email: '', user_password: '',
            //error: '', loading: false 
        };
    }
    onButtonPress() {
        console.log("Working");
        const { navigate } = this.props.navigation;
        //navigate('homePage1');
        fetch('https://unconsidered-baths.000webhostapp.com/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.user_email,
                password: this.state.user_password
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'Data Matched') {

                    //Then open Profile activity and send user email to profile activity.
                    navigate('homePage1', { Email: this.state.user_email });
                    // this.setState({ loading: false });

                }
                else {
                    Alert.alert(responseJson);
                    // this.setState({ loading: false });
                }
            }).catch((error) => {
                Alert.alert(responseJson);
            });
    }

    onButtonPress1() {
        console.log("Working");
        const { navigate } = this.props.navigation;
        navigate('twoScreen');
    }
    onButtonPress2() {
        console.log("Working");
        const { navigate } = this.props.navigation;
        navigate('maintenance1');
    }



    handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
    }
    renderButton() {
        // if (this.state.loading) {
        //     return <Spinner size="small" spinnerStyle={styles.spinnerStyle} />;
        // }

        return (
            <Button onPress={this.onButtonPress.bind(this)
            }
            >
                Log In
            </Button>

        );


    }
    renderButton1() {
        // if (this.state.loading) {
        //     return <Spinner size="small" spinnerStyle={styles.spinnerStyle} />;
        // }

        return (
            <Button onPress={this.onButtonPress1.bind(this)}
            >
                Sign up
            </Button>
        );
    }
    renderButton2() {
        // if (this.state.loading) {
        //     return <Spinner size="small" spinnerStyle={styles.spinnerStyle} />;
        // }

        return (
            <Button onPress={this.onButtonPress2.bind(this)}>
                Select Vehicle
                </Button>
        );
    }

    focusNextField(nextField) {
        this.refs[nextField].focus();
    }
    render() {
        return (
            // <View style={styles.container}>
            //     <View style={styles.buttonContainer}>
            //         <Button
            //             //  onPress={this._onPressButton}
            //             title="Create Profile +"
            //             onPress={this.onButtonPress.bind(this)}
            //         />
            //     </View>
            //     <View style={styles.buttonContainer}>
            //         <Button
            //             title="Maintenance Details"
            //             color="#841584"
            //         />
            //     </View>

            // </View>
            <View style={{ flex: 1 }}>
                <Img />
                <ScrollView keyboardShouldPersistTaps='always'>
                    <KeyboardAvoidingView behavior="padding" enabled>
                        {/* <View style={styles.containerStyle2}>
                            <Image source={require('./pics/ic_launcher.png')} style={styles.imageStyle} />
                        </View> */}
                        <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>vaPP</Text>
                        </View>
                        <CardSection style={styles.containerStyle}>
                            <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('./pics/user.png')} style={styles.iconStyle} />
                            </View>
                            <TextInput
                                ref="1"
                                placeholder="Username"
                                // placeholderTextColor="#fff"
                                onChangeText={user_email => this.setState({ user_email })}
                                value={this.state.user_email}
                                style={styles.inputStyle}
                                underlineColorAndroid='transparent'
                                returnKeyType="next"
                                blurOnSubmit={false}
                                onSubmitEditing={() => this.focusNextField('2')}
                            />
                        </CardSection>
                        <CardSection style={styles.containerStyle}>
                            <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('./pics/pwd.png')} style={styles.iconStyle} />
                            </View>
                            <TextInput
                                ref="2"
                                secureTextEntry
                                placeholder="Password"
                                // placeholderTextColor="#fff"
                                autoCorrect={false}
                                onChangeText={user_password => this.setState({ user_password })}
                                value={this.state.user_password}
                                style={styles.inputStyle}
                                underlineColorAndroid='transparent'
                                blurOnSubmit={true}
                                returnKeyType="done"
                            />
                        </CardSection>
                        <Text style={styles.errorStyle}>
                            {this.state.error}
                        </Text>
                        <View style={styles.buttonStyle}>
                            {this.renderButton()}
                        </View>
                        <View style={styles.buttonStyle}>
                            {this.renderButton1()}
                        </View>
                        <View style={styles.buttonStyle}>
                            {this.renderButton2()}
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        // borderBottomColor: 'transparent'
        // backgroundColor: 'red',
        // width: '100%'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    iconStyle: {
        height: 30,
        width: 30,
        marginRight: 30,
        marginLeft: 30
    },
    containerStyle: {
        marginTop: 50,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerStyle2: {
        marginTop: 50,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        height: 175,
        width: 150
    },
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
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
    spinnerStyle: {
        flex: 1,
        backgroundColor: 'rgba(253, 197, 24, 0.8)',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 60,
        paddingTop: 10,
        paddingBottom: 10
    }

});

export default oneScreen;
