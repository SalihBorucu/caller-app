import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { templates } from '../styling';
import { Ionicons } from '@expo/vector-icons';

const emptyAction = () => {
    console.log('havent set an action for this.');
};

export default function CircleButton({ text, icon, action = emptyAction, backgroundColor = templates.backgroundColor, border = true, textColor = templates.primaryColor, shadow = false }) {
    if (icon) {
        return (
            <View>
                <TouchableOpacity onPress={action} style={[shadow ? templates.shadow : '', styles.btn, {backgroundColor, borderWidth: border ? 1 : 0 }]} value={text}>
                    <Ionicons name={icon} size={34} color={textColor} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View>
            <TouchableOpacity onPress={action} style={styles.btn} value={text}>
                <Text style={[styles.btnText]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 65,
        width: 65,
        borderRadius: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: templates.primaryColor,
        borderWidth: 1
    },

    btnText: {
        padding: 10,
        lineHeight: 28,
        fontFamily: 'Metropolis-Medium',
        fontSize: 28,
        color: templates.primaryColor
    },
});
