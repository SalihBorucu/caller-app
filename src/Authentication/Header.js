import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {templates} from '../styling';

export default function Header({ title }) {
    return (
        <View>
            <Text style={templates.h1}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'Poppins-SemiBold',
        fontSize: 32,
        textAlign: 'center',
        margin: 40,
        color: 'black',
    },
});
