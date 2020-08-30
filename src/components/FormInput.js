import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function FormInput({ type }) {
    return (
        <View>
            <TextInput placeholder={type} placeholderStyle={styles.placeholder} style={styles.input}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        padding: 10,
        // fontFamily: 'Poppins-Regular',
        color: 'black',
        height: 56,
        width: 363,
        borderRadius: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
});
