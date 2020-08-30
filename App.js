import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadAssets from './src/components/LoadAssets';
import Login from './src/Authentication/Login.js';
import { createStackNavigator } from '@react-navigation/stack';

const fonts = {
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Login" component={Login} />
        </AuthenticationStack.Navigator>
    );
};

export default function App() {
    return (
        <LoadAssets {...{ fonts }}>
            <AuthenticationNavigator />
        </LoadAssets>
    );
}
