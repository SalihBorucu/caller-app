import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../styling';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NavBar({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('RecentCalls')}>
                <View style={styles.navContainer}>
                    <Feather name="phone" size={24} color={templates.textColorDark} style={styles.icon} />
                    <Text style={templates.navText}>Calls</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
                <View style={styles.navContainer}>
                    <Feather name="message-circle" size={24} color={templates.textColorDark} style={styles.icon} />
                    <Text style={templates.navText}>Inbox</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navContainer}>
                    <Feather name="activity" size={24} color={templates.textColorDark} style={styles.icon} />
                    <Text style={templates.navText}>Metrics</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navContainer}>
                    <Feather name="settings" size={24} color={templates.textColorDark} style={styles.icon} />
                    <Text style={templates.navText}>Settings</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: templates.backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        padding: 15,
        borderTopColor: templates.lightColor,
    },
    navContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
