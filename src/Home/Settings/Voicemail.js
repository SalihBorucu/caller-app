import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, Modal } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { templates } from '../../styling';
import { ScrollView, TextInput, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import RecordButton from '../../components/RecordButton';
import { Picker } from '@react-native-community/picker';
import VoiceMailDetails from './VoiceMailDetails';
import { set } from 'react-native-reanimated';

const numbers = [
    {
        id: 1,
        voiceMailId: 1,
        number: '+44 0054 32 42',
    },
    {
        id: 2,
        voiceMailId: 2,
        number: '+187 154 35 52',
    },
];
const voiceMails = [
    { id: 1, name: 'Out of office' },
    { id: 2, name: 'Out of Working Hours' },
    { id: 3, name: 'Call Jim' },
    { id: 4, name: 'Not in use' },
];

let myNumbers = numbers.map((myValue, myIndex) => {
    return <Picker.Item label={myValue.number} value={myValue.id} key={myIndex} />;
});

export default function Voicemail({ navigation }) {
    const [selectedNumber, setSelectedNumber] = useState(numbers[0]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVM, setSelectedVM] = useState(false);

    function setVoiceMailForNumber(voiceMailId) {
        if (voiceMailId === selectedNumber.voiceMailId) return;
        let newSelectedNumber = {
            id: selectedNumber.id,
            voiceMailId: voiceMailId,
            number: selectedNumber.number,
        };
        setSelectedNumber(newSelectedNumber);
    }

    function saveAction() {
        //handle save
        setModalVisible(!modalVisible);
    }
    function deleteAction() {
        //handle delete
        setModalVisible(!modalVisible);
    }

    function newVMDetails() {
        setSelectedVM(false);
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Voicemail</Text>
                <View style={{ width: 35 }}></View>
            </View>
            <VoiceMailDetails saveAction={saveAction} deleteAction={deleteAction} selectedVM={selectedVM} modalVisible={modalVisible} />
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={styles.content}>
                        <RecordButton action={newVMDetails}></RecordButton>
                        <Picker
                            itemStyle={{ backgroundColor: 'grey', color: 'blue', fontFamily: 'Ebrima', fontSize: 17 }}
                            selectedValue={selectedNumber.id}
                            style={{ height: 20, width: 180 }}
                            onValueChange={(itemValue) => {
                                setSelectedNumber(numbers.find((number) => number.id === itemValue));
                            }}>
                            {myNumbers}
                        </Picker>
                        <FlatList
                            style={{ width: '90%' }}
                            data={voiceMails}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={[styles.box]}>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectedVM(item);
                                                setModalVisible(true);
                                            }}>
                                            <Text style={[templates.p, { padding: 5 }]}>{item.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View></View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons
                                            style={{ marginHorizontal: 10 }}
                                            color={templates.primaryColor}
                                            name={selectedNumber.voiceMailId === item.id ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                                            size={24}
                                            onPress={() => setVoiceMailForNumber(item.id)}
                                        />
                                    </View>
                                </View>
                            )}></FlatList>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

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
        minHeight: 60,
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
