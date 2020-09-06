import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { templates } from '../styling';
import { Feather } from '@expo/vector-icons';

export default function CallsSummary({ contact }) {
    let typeName = 'Outgoing Call';
    let iconType;
    if(contact.callSummary.type === 'phone-outgoing'){
        iconType = contact.callSummary.type;
    }

    if (contact.callSummary.type === 'phone-missed') {
        typeName = 'Missed Call';
    } else if (contact.callSummary.type === 'phone-incoming') {
        typeName = 'Incoming Call';
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather name={iconType} size={16} />
            </View>
            <View style={styles.activityContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[templates.h4, { marginBottom: 10, color: contact.callSummary.type === 'phone-missed' ? templates.errorColor : templates.textColorPrimary }]}>{contact.name}</Text>
                    <Text style={[templates.timeText, {paddingTop: 10}]}>1:24 PM</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[templates.hp, { textAlign: 'center' }]}>{typeName}</Text>
                    {/* <Feather name="info" size={18} /> */}
                </View>
            </View>
        </View>
    );
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
        justifyContent: 'flex-start'
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
