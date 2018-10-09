import React from "react";
import {Button, StyleSheet, View,Platform,TextInput} from "react-native";
import {createStackNavigator} from 'react-navigation';

class oneScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };

    onButtonPress() {
      console.log("Working");
      const { navigate } = this.props.navigation;
      navigate('Home');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        //  onPress={this._onPressButton}
                        title="Create Profile +"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Maintenance Details"
                        onPress={this.onButtonPress.bind(this)}
                        color="#841584"
                    />
                </View>

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
    }

});

export default oneScreen;
