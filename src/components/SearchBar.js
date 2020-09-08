import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../styling';
import { TextInput } from 'react-native-gesture-handler';

export default function SearchBar({action}) {
    return (
        <View style={styles.inputContainer}>
            <Ionicons name="ios-search" size={26} style={{ paddingRight: 10 }} color={templates.darkColor} />
            <TextInput style={{ width: '100%' }} placeholder="Search" onChangeText={action}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
