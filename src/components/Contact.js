import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../styling';

export default function Contact(props) {
    const contact = props.route.params.item;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => props.navigation.goBack()} />
                <Text style={templates.h4}>{contact.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="ios-call" size={26} color={templates.successColor} />
                    <Ionicons style={{ paddingLeft: 15 }} name="ios-mail" size={26} color={templates.successColor} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Fullname</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>{contact.name}</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="ios-contact" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Email Address</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>{contact.name}</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="ios-mail" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Phone Number</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>{contact.phoneNumbers[0].number}</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="ios-call" size={24} />
                    </View>
                </View>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        flex: 8,
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    box: {
        justifyContent: 'space-between',
        width: '80%',
        margin: 10,
        height: 60,
        borderWidth: 1,
        borderColor: templates.lightColor,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
