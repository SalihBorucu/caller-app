import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoadAssets from './src/components/LoadAssets';
import LoadingScreen from './src/components/LoadingScreen';
import Login from './src/Authentication/Login.js';
import Home from './src/Home/Home.js';
import { createStackNavigator } from '@react-navigation/stack';
import * as LocalAuthentication from 'expo-local-authentication';
import PushNotification from './src/components/PushNotification.js';

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
        //check if there is an enrolled auth option
        LocalAuthentication.isEnrolledAsync().then((res) => {
            console.log(res);
        });

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
    LocalAuthentication.supportedAuthenticationTypesAsync().then((authType) => {
        console.log(authType)
    })
    fingerPrintLogin();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="PushNotification" component={PushNotification} /> */}
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
