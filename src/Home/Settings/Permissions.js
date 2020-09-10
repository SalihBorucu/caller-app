import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';

export default function Permissions({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Permissions</Text>
                <View style={{ width: 35}}></View>
            </View>
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
        width: '80%',
        // margin: 10,
        minHeight: 60,
        borderWidth: 1,
        borderColor: templates.lightColor,
        borderRadius: 5,
        marginTop: 20,
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
