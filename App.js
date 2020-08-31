import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoadAssets from './src/components/LoadAssets';
import LoadingScreen from './src/components/LoadingScreen';
import Login from './src/Authentication/Login.js';
import Home from './src/Home/Home.js';
import { createStackNavigator } from '@react-navigation/stack';
import * as LocalAuthentication from 'expo-local-authentication';

const fonts = {};

const Stack = createStackNavigator();
const options = {
    promptMessage: 'Prove yoself, fool!',
    cancelLabel: 'nah',
    fallbackLabel: 'what',
    disableDeviceFallback: true,
};
const AuthenticationNavigator = () => {
    function fingerPrintLogin() {
        LocalAuthentication.supportedAuthenticationTypesAsync().then((authType) => {
            if (!authType.length) {
                console.log('No faceID or fingerPrintID');
                return;
            }
            if (authType.length > 1) {
                console.log('Has both faceID and fingerPrintID');
                //provide options
                LocalAuthentication.authenticateAsync(options).then((res) => {
                    console.log(res);
                });
            }
            if (authType[0] === 1) {
                //fingerPrint
                LocalAuthentication.authenticateAsync(options).then((res) => {
                    console.log(res);
                });
            }
            if (authType[0] === 2) {
                //faceID, but couldnt test it
                LocalAuthentication.authenticateAsync(options).then((res) => {
                    console.log(res);
                });
            }
        });
    }
    fingerPrintLogin();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <LoadAssets {...{ fonts }}>
            <AuthenticationNavigator />
        </LoadAssets>
    );
}
