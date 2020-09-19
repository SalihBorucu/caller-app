import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { templates } from '../styling';
import { Feather } from '@expo/vector-icons';

export default function FormInput({ placeholder, icon, keyboard = true }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TextInput showSoftInputOnFocus={keyboard} placeholder={placeholder} placeholderStyle={styles.placeholder} style={[styles.input, templates.formText]}></TextInput>
            <Feather name={icon} size={24} color={templates.lightColor} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        height: 56,
        width: templates.wp('80%') > 415 ? 363 : '90%', // check where this is used changed it recently
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    icon: {
        position: 'absolute',
        right: 20,
    },
});
