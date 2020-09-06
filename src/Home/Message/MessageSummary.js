import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';

export default function MessageSummary({ contact, navigation }) {
    let imagePath = contact.image ? contact.image : require('../../../assets/images/default_user.png');
    let appIcon = contact.appUser ? 'ios-radio-button-on' : '';
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View>
                    <Image style={styles.image} source={imagePath}></Image>
                    <Ionicons name={appIcon} size={12} color={templates.primaryColor} style={{ position: 'absolute', top: 0, left: 0 }} />
                </View>
            </View>
            <View style={styles.messageContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[templates.h4, { marginBottom: 10 }]}>{contact.name}</Text>
                    <Text style={templates.timeText}>1:24 PM</Text>
                </View>
                <Text style={templates.hp}>{contact.message.length > 40 ? contact.message.substring(0, 40) + '...' : contact.message}</Text>
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
    },
    imageContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageContainer: {
        flex: 1,
        padding: 10,
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
