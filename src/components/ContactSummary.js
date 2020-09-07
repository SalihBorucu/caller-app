import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { templates } from '../styling';

export default function ContactSummary({ contact, action, contacts }) {
    let contactsByOrder = contacts.filter((x) => x.firstName[0] === contact.firstName[0]);
    let isFirst = contactsByOrder[0].id === contact.id;
    if (isFirst) {
        return (
            <TouchableOpacity onPress={action}>
                <View>
                    <View style={[styles.container, { backgroundColor: templates.lightColor }]}>
                        <Text style={[templates.h3]}>{contact.firstName[0]}</Text>
                    </View>
                    <View style={[styles.container, { borderBottomColor: templates.lightColor, borderBottomWidth: 1 }]}>
                        <Text style={[templates.h3]}>
                            {contact.firstName} {contact.lastName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={action}>
                <View>
                    <View style={[styles.container, { borderBottomColor: templates.lightColor, borderBottomWidth: 1 }]}>
                        <Text style={[templates.h3]}>
                            {contact.firstName} {contact.lastName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: templates.wp('100%'),
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 0.07,
        height: '90%',
        justifyContent: 'flex-start',
    },
    activityContainer: {
        flex: 0.93,
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    image: {
        width: 52,
        height: 52,
        borderColor: templates.lightColor,
        borderWidth: 1,
        borderRadius: 50,
    },
});
