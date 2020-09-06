import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingsListItem from './SettingsListItem';

export default function Settings({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={templates.h1}>Settings</Text>
            </View>
            <View style={styles.content}>
                <SettingsListItem action={() => navigation.navigate('Profile')} text="Edit Profile" icon="ios-person"></SettingsListItem>
                <SettingsListItem action={() => navigation.navigate('')} text="Auto Reply" icon="ios-text"></SettingsListItem>
                <SettingsListItem action={() => navigation.navigate('')} text="Forwarding" icon="md-skip-forward"></SettingsListItem>
                <SettingsListItem action={() => navigation.navigate('BlockedNumbers')} text="Blocked Numbers" icon="md-remove-circle-outline"></SettingsListItem>
                <SettingsListItem action={() => navigation.navigate('')} text="Anonymous Calls" icon="ios-eye-off"></SettingsListItem>
                <SettingsListItem action={() => navigation.navigate('Voicemail')} text="Voicemail" icon="md-recording"></SettingsListItem>
                <SettingsListItem action={() => navigation.navigate('Permissions')} text="Permissions" icon="ios-clipboard"></SettingsListItem>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name="ios-log-out" size={26} color={templates.errorColor} />
                    <Text style={templates.p}> Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: templates.backgroundColor,
    },
    header: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        flex: 0.9,
        marginHorizontal: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    footer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
