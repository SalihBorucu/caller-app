import React, { useEffect } from 'react';
import { Login, SignUp, PwdResetCode, PwdResetEmail, PwdResetPassword } from './src/Authentication';
import { createStackNavigator } from '@react-navigation/stack';
import { fonts, templates } from './src/styling';
import Inbox from './src/Home/Inbox';
import RecentCalls from './src/Home/RecentCalls';
import Analytics from './src/Home/Analytics';
import Settings from './src/Home/Settings';
import LoadAssets from './src/components/LoadAssets';
import LoadingScreen from './src/components/LoadingScreen';
import PushNotification from './src/components/PushNotification.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import database from './src/Database';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Inbox') {
                        iconName = 'mail';
                    } else if (route.name === 'Recent Calls') {
                        iconName = 'phone';
                    } else if (route.name === 'Analytics') {
                        iconName = 'activity';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    // You can return any component that you like here!
                    return <Feather name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: templates.primaryColor,
                inactiveTintColor: templates.darkColor,
            }}>
            <Tab.Screen name="Inbox" component={Inbox} />
            <Tab.Screen name="Recent Calls" component={RecentCalls} initialParams={{ contacts: database }} />
            <Tab.Screen name="Analytics" component={Analytics} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};
const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeStackScreen} />
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
