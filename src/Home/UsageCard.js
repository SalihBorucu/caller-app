import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../styling';
import { Feather } from '@expo/vector-icons';

export default function UsageCard({title, calls, messages}) {
    return (
        <View style={styles.container}>
            <Text style={[templates.p, { textAlign: 'right', padding: 5 }]}>{title}</Text>
            <View style={styles.card}>
                <View>
                    <View style={styles.cardHalfRow}>
                        <Text style={templates.h1}>{calls} </Text>
                        <Text style={[templates.p, { color: templates.successColor }]}>+60%</Text>
                    </View>
                    <View style={styles.cardHalfRow}>
                        <Feather name="phone" size={24} />
                        <Text style={templates.p}>Calls</Text>
                    </View>
                </View>
                <View
                    style={templates.divider}
                />
                <View>
                    <View style={styles.cardHalfRow}>
                        <Text style={templates.h1}>{messages}</Text>
                        <Text style={[templates.p, { color: templates.successColor }]}>+60%</Text>
                    </View>
                    <View style={styles.cardHalfRow}>
                        <Feather name="mail" size={24} />
                        <Text style={templates.p}>  Messages</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        width: '90%',
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: templates.backgroundColor,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    cardHalfRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center' 
    },
});
