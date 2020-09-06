import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { templates } from '../styling';

export default function MessageBubble({ received, contact }) {
    let imagePath = contact.image ? contact.image : require('../../assets/images/default_user.png');

    if (received) {
        return (
            <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.received}>
                    <Text style={[templates.p, { color: templates.textColorLight }]}>{contact.message}</Text>
                </View>
                <Text style={[templates.timeText, { textAlign: 'right', marginTop: 5 }]}>12.15 PM</Text>
            </View>
        );
    } else {
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <View>
                        <Image style={styles.image} source={imagePath}></Image>
                    </View>
                    <View style={styles.sent}>
                        <Text style={[templates.p]}>{contact.message}</Text>
                    </View>
                </View>
                <Text style={[templates.timeText, {marginLeft: 45, marginTop: 5}]}>12.15 PM</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    received: {
        maxWidth: '65%',
        padding: 15,
        backgroundColor: templates.primaryColor,
        borderRadius: 10,
        marginTop: 10,
        // borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    sent: {
        maxWidth: '65%',
        padding: 15,
        marginTop: 20,
        backgroundColor: templates.lightColor,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    image: {
        width: 36,
        height: 36,
        marginRight: 10,
    },
});
