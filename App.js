import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './src/Authentication/Login.js';
import { createStackNavigator } from '@react-navigation/stack';
import {fonts} from './src/styling';
import Home from './src/Home/Home.js';
import LoadAssets from './src/components/LoadAssets';
import LoadingScreen from './src/components/LoadingScreen';
import PushNotification from './src/components/PushNotification.js';


const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="PushNotification" component={PushNotification} />
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
