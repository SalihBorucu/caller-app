import React, { useEffect } from 'react';
import { Login, SignUp, PwdResetCode, PwdResetEmail, PwdResetPassword } from './src/Authentication';
import { createStackNavigator } from '@react-navigation/stack';
import { fonts } from './src/styling';
import Home from './src/Home/Home.js';
import LoadAssets from './src/components/LoadAssets';
import LoadingScreen from './src/components/LoadingScreen';
import PushNotification from './src/components/PushNotification.js';

const Stack = createStackNavigator();
const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="PwdResetCode" component={PwdResetCode} />
            <Stack.Screen name="PwdResetPassword" component={PwdResetPassword} />
            <Stack.Screen name="PwdResetEmail" component={PwdResetEmail} />
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
