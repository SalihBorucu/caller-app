import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import firebase from 'firebase';

class LoadingScreen extends Component {
    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        // firebase.auth().onAuthStateChanged(function user() {
        //     if (user) {
        //         this.props.navigation.navigate('Home');
        //     } else {
        //         this.props.navigation.navigate('Login');
        //     }
        // });
    }

    render() {
        return (
            <View>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
