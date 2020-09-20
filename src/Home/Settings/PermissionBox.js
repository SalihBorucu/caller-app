import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { templates } from '../../styling';
import { Switch } from 'react-native-gesture-handler';

export default function PermissionBox({icon, type, name, enabled, action}) {
    const [isEnabled, setIsEnabled] = useState(enabled);
    const toggleSwitch = () => {
        action()
        setIsEnabled((previousState) => !previousState)
    };

    useEffect(()=>{
        console.log(name + ' is rendered')
        setIsEnabled(enabled)
    })


    return (
        <View style={styles.permissionBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={icon} size={26} />
                <Text style={{ ...templates.h3, marginLeft: 10 }}>{name}</Text>
            </View>
            <View></View>
            <Switch
                trackColor={{ true: templates.lightColor, false: templates.lightColor }}
                thumbColor={isEnabled ? templates.primaryColor : templates.primaryColor}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={enabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    permissionBox: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderWidth: 1,
        borderColor: templates.lightColor,
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
});
