import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
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
