import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { templates } from '../styling';
import { FontAwesome } from '@expo/vector-icons';

const emptyAction = () => {
    console.log('havent set an action for this.');
}

export default function RoundButton({ text, type, width = '90%', icon, navigation, action= emptyAction}) {
    let btnTextColor;
    switch (type) {
        case 'btnOutline':
            btnTextColor = templates.primaryColor;
            break;

        case 'btnMuted':
            btnTextColor = templates.textColorDark;
            break;
        
        default:
            btnTextColor = templates.textColorLight;
            break;
    }
    return (
        <View>
            <TouchableOpacity onPress={action} style={[styles[type], { width: templates.wp('80%') > 412 ? 363 : templates.wp(width) }]}>
                <FontAwesome name={icon} size={24} color={type === 'btn' ? templates.textColorLight : templates.primaryColor} style={styles.icon} />
                <Text style={[styles.btnText, {color:btnTextColor}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templates.primaryColor,
        height: 44,
        borderRadius: 5,
        margin: 16,
    },
    btnMuted: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templates.lightColor,
        height: 44,
        borderRadius: 5,
        margin: 16,
    },

    btnOutline: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templates.backgroundColor,
        height: 44,
        width: templates.wp('80%') > 412 ? 363 : '100%',
        borderRadius: 5,
        margin: 16,
        borderWidth: 1,
        borderColor: templates.primaryColor,
    },
    btnText: {
        padding: 10,
        lineHeight: 14,
        fontFamily: 'Metropolis-Medium',
        fontSize: 18,
    },
});
