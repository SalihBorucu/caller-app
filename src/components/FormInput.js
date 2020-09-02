import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { templates } from '../styling';
import { FontAwesome } from '@expo/vector-icons';

export default function FormInput({ placeholder, icon }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TextInput placeholder={placeholder} placeholderStyle={styles.placeholder} style={[styles.input, templates.formText]}></TextInput>
            <FontAwesome name={icon} size={24} color={templates.lightColor} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        height: 56,
        width: templates.wp('80%') > 412 ? 363 : templates.wp('90%'),
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    icon: {
        position: 'absolute',
        right: 20,
    },
});
