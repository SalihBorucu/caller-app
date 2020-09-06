import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../styling';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingsListItem from './SettingsListItem';

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={templates.h1}>Settings</Text>
            </View>
            <View style={styles.content}>
                <SettingsListItem text="Edit Profile" icon="user"></SettingsListItem>
                <SettingsListItem text="Auto Reply" icon="skip-forward"></SettingsListItem>
                <SettingsListItem text="Forwarding" icon="phone-forwarded"></SettingsListItem>
                <SettingsListItem text="Blocked Numbers" icon="shield"></SettingsListItem>
                <SettingsListItem text="Anonymous Calls" icon="eye-off"></SettingsListItem>
                <SettingsListItem text="Voicemail" icon="voicemail"></SettingsListItem>
                <SettingsListItem text="Permissions" icon="clipboard"></SettingsListItem>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="log-out" size={26} color={templates.errorColor} />
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