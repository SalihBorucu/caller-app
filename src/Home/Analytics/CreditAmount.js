import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import FormInput from '../../components/FormInput';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import RoundButton from '../../components/RoundButton';
import AmountPicker from './AmountPicker';

export default function CreditAmount({ modalVisible, action, selectedVM }) {
    const [name, setName] = useState('New Recording');
    const [total, setTotal] = useState(0);
    const [amounts, setAmounts] = useState({
        credit: 0,
        internationalCredit: 0,
        recordingCredit: 0,
    });

    useEffect(() => {
        setName(selectedVM ? selectedVM.name : 'New Recording');
    });

    function adjustTotal(amount) {
        let dummyAmounts = amounts;
        dummyAmounts[Object.keys(amount)[0]] = amount[Object.keys(amount)[0]];
        setAmounts(dummyAmounts)
        setTotal(Object.keys(amounts).reduce((a, b) => a + amounts[b], 0));
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Text style={{ ...templates.h3 }}>Shopping for credits:</Text>
                    </View>
                    <View style={{ ...styles.content }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between' }}>
                            <Text>Credit:</Text>
                            <View style={{ width: 75 }}></View>
                            <AmountPicker name="credit" injAmount={amounts.credit} action={(x) => adjustTotal(x)}></AmountPicker>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between' }}>
                            <Text>International Credit:</Text>
                            <View style={{ width: 75 }}></View>
                            <AmountPicker name="internationalCredit" injAmount={amounts.internationalCredits} action={(x) => adjustTotal(x)}></AmountPicker>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between' }}>
                            <Text>Recording Credit:</Text>
                            <View style={{ width: 75 }}></View>
                            <AmountPicker name="recordingCredit" injAmount={amounts.recordingCredit} action={(x) => adjustTotal(x)}></AmountPicker>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between', borderTopWidth: 1 }}>
                            <Text>Total: </Text>
                            <View style={{ width: 75 }}></View>
                            <Text>{total}.00$</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <RoundButton type="btn" width="25%" text="Confirm" action={action}></RoundButton>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    header: {},
    content: { margin: 10 },
    footer: {},
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});
