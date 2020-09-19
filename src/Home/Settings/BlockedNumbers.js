import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';
import { FlatList } from 'react-native-gesture-handler';
import NewBlockedNumber from './NewBlockedNumber'

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
    //TODO Look into refactoring this
    function getNewNumber(x) {
        setNewNumber(x);
    }

    function confirmNewNumber() {
        setBlockedNumbers([newNumber].concat(blockedNumbers));
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
                <NewBlockedNumber active={addingNewNumber} action={confirmNewNumber} onChange={getNewNumber}></NewBlockedNumber>
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
