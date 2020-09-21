import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AmountPicker({ name, action, injAmount }) {
    const [amount, setAmount] = useState(0);
    function changeAmount(add = true) {
        if (!add) {
            setAmount(amount - 1);
        } else {
            setAmount(amount + 1);
        }
    }

    useEffect(() => {
        if (injAmount !== amount) {
            action({ [name]: amount });
        }
    });

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={changeAmount}>
                <Ionicons name="ios-add" size={18} />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 5 }}>{amount}$</Text>
            <TouchableOpacity onPress={() => changeAmount(false)} disabled={!amount}>
                <Ionicons name="ios-remove" size={18} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});
