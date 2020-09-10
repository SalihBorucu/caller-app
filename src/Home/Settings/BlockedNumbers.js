import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';
import { FlatList, TextInput } from 'react-native-gesture-handler';

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
        flex: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    box: {
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: 1,
        borderColor: templates.lightColor,
        borderRadius: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginVertical: 25,
        width: 120,
        height: 120,
        borderColor: templates.primaryColor,
        borderWidth: 1,
        borderRadius: 120,
    },
});

const blockedNumbersRaw = [
    '+44 923849 2',
    '+76 9234 8728',
    '+28 3847872 2',
    '+93 583984598',
    '+44 923849 2',
    '+76 9234 8728',
    '+28 3847872 2',
    '+93 583984598',
    '+44 923849 2',
    '+76 9234 8728',
    '+28 3847872 2',
    '+31 583984598',
];

function NewNumber({ action, active, onChange }) {
    function getNewNumber(x) {
        onChange(x);
    }

    if (active) {
        return (
            <View style={{ width: '90%' }}>
                <View style={[styles.box]}>
                    <View style={{ width: '80%' }}>
                        <TextInput style={{ padding: 10 }} placeholder="New number here.." autoFocus={true} onChangeText={(text) => getNewNumber(text)} keyboardType="phone-pad"></TextInput>
                    </View>
                    <View>
                        <Ionicons style={{ marginHorizontal: 10 }} name="ios-add-circle-outline" size={24} onPress={action} />
                    </View>
                </View>
            </View>
        );
    } else {
        return null;
    }
}

export default function BlockedNumbers({ navigation }) {
    const [blockedNumbers, setBlockedNumbers] = useState(blockedNumbersRaw);
    const [newNumber, setNewNumber] = useState(blockedNumbersRaw);
    const [addingNewNumber, setAddingNewNumber] = useState(false);
    function removeNumber(index) {
        setBlockedNumbers(blockedNumbers.filter((number, i) => index !== i));
    }
    function toggleNewNumberBox() {
        setAddingNewNumber(!addingNewNumber);
    }
    function getNewNumber(x) {
        setNewNumber(x);
    }

    function confirmNewNumber() {
        setBlockedNumbers(blockedNumbers.concat(newNumber));
        setAddingNewNumber(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Blocked Numbers</Text>
                <Ionicons name={addingNewNumber ? 'ios-remove-circle-outline' : 'ios-add-circle-outline'} size={26} color={templates.primaryColor} onPress={toggleNewNumberBox} />
            </View>
            <View style={styles.content}>
                <NewNumber active={addingNewNumber} action={confirmNewNumber} onChange={getNewNumber}></NewNumber>
                <FlatList
                    style={{ width: '90%' }}
                    data={blockedNumbers}
                    extraData={blockedNumbers}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <View style={[styles.box]}>
                            <View>
                                <Text style={[templates.p, { padding: 5 }]}>{item}</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons style={{ marginHorizontal: 10 }} name="ios-remove-circle-outline" size={24} onPress={() => removeNumber(index)} />
                            </View>
                        </View>
                    )}></FlatList>
            </View>
        </View>
    );
}
