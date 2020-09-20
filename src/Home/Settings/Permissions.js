import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { templates } from '../../styling';
import { Switch } from 'react-native-gesture-handler';
import PermissionBox from './PermissionBox';
import * as Permissions from 'expo-permissions';

export default function PermissionsPage({ navigation }) {
    const [permissionsX, setPermissions] = useState(null);

    async function checkMultiPermissions() {
        const { status, expires, permissions } = await Permissions.getAsync(
            Permissions.CONTACTS,
            Permissions.NOTIFICATIONS,
            Permissions.CAMERA,
            Permissions.LOCATION,
            Permissions.AUDIO_RECORDING,
            Permissions.CAMERA_ROLL //images?
        );
        if (!permissionsX) {
            setPermissions(permissions);
        }
    }

    useEffect(() => {
        checkMultiPermissions();
    });

    async function getPermissionAsync(permissionType) {
        const { status, permissions } = await Permissions.askAsync(Permissions[permissionType]);
        if (status === 'granted') {
            let permissionsDummy = permissionsX;
            permissionsDummy[Object.keys(permissions)[0]] = permissions[Object.keys(permissions)[0]];
            setPermissions(permissionsDummy);
            setPermissions();
        } else {
            throw new Error('Permission not granted');
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Permissions</Text>
                <View style={{ width: 35 }}></View>
            </View>
            <View style={styles.content}>
                <PermissionBox name="Images" enabled={permissionsX ? permissionsX.cameraRoll.granted : false} icon="ios-image" action={() => getPermissionAsync('CAMERA_ROLL')}></PermissionBox>
                <PermissionBox name="Camera" enabled={permissionsX ? permissionsX.camera.granted : false} icon="ios-camera" action={() => getPermissionAsync('CAMERA')}></PermissionBox>
                <PermissionBox
                    name="Microphone"
                    enabled={permissionsX ? permissionsX.audioRecording.granted : false}
                    icon="ios-microphone"
                    action={() => getPermissionAsync('AUDIO_RECORDING')}></PermissionBox>
                <PermissionBox name="Contacts" enabled={permissionsX ? permissionsX.contacts.granted : false} icon="ios-contacts" action={() => getPermissionAsync('CONTACTS')}></PermissionBox>
                <PermissionBox name="Location" enabled={permissionsX ? permissionsX.location.granted : false} icon="ios-pin" action={() => getPermissionAsync('LOCATION')}></PermissionBox>
                <PermissionBox
                    name="Notifications"
                    enabled={permissionsX ? permissionsX.notifications.granted : false}
                    icon="ios-notifications"
                    action={() => getPermissionAsync('NOTIFICATIONS')}></PermissionBox>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: templates.hp('100%'),
        backgroundColor: templates.backgroundColor,
    },
    header: {
        paddingTop: 32,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // flex: 1,
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer: {},
});
