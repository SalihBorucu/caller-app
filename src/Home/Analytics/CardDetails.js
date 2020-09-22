import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { templates } from '../../styling';
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input';

//not active

export default function CardDetails() {
    return (
        <View style={{ marginTop: 30, justifyContent: 'space-evenly' }}>
            <CreditCardInput />
            <View style={{ alignItems: 'center' }}></View>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>
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
            </View> */}
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
