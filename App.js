import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoadAssets from './src/components/LoadAssets';
import LoadingScreen from './src/components/LoadingScreen';
import Login from './src/Authentication/Login.js';
import Home from './src/Home/Home.js';
import { createStackNavigator } from '@react-navigation/stack';

const fonts = {};

const Stack = createStackNavigator();
const AuthenticationNavigator = () => {
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
