import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { templates } from '../../styling';

export default function CardDetails() {
    return (
        <View style={{ width: '100%', marginTop: 30, justifyContent: 'space-evenly' }}>
            <View style={{ alignItems: 'center' }}>
                <Text>Card Number</Text>
                <TextInput placeholder="       /           /           /           /" style={{ ...styles.input, width: '80%', ...templates.h3 }}></TextInput>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Start Date</Text>
                    <TextInput style={{ ...styles.input }} placeholder="01/25"></TextInput>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Expiry Date</Text>
                    <TextInput style={{ ...styles.input }} placeholder="01/25"></TextInput>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Security</Text>
                    <TextInput style={{ ...styles.input }} placeholder="096"></TextInput>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        borderBottomColor: templates.lightColor,
        borderBottomWidth: 1,
    },
});
