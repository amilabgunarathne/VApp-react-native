import React from "react";
import {   StyleSheet, View,Platform,TextInput} from "react-native";
import {createStackNavigator} from 'react-navigation';
import Button from './common/Button';

class homePage extends React.Component {
    static navigationOptions = {
        title: '',
    };

    onButtonPress() {
      console.log("Working");
      //const { navigate } = this.props.navigation;
     // navigate('Home');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        //  onPress={this._onPressButton}
                        title="my profile  "
                        onPress={this.onButtonPress.bind(this)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Maintenance Details"
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

export default homePage;
