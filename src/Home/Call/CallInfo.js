import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';

export default function CallInfo(props) {
    const contact = props.route.params.item;
    let contactName = props.route.params.item.name ? props.route.params.item.name : 'Unknown';
    let imagePath = contact.image ? contact.image : require('../../../assets/images/default_user.png');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => props.navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Call Details</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons style={{ paddingLeft: 15 }} name="ios-call" size={26} color={templates.successColor} />
                    <Ionicons style={{ paddingLeft: 15 }} name="ios-mail" size={26} color={templates.successColor} />
                </View>
            </View>
            <View style={styles.content}>
                <Image style={styles.image} source={imagePath}></Image>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Fullname</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>{contactName}</Text>
                    </View>
                    <View></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={contactName === 'Unknown' ? 'ios-add' : ''} size={26} />
                        <Ionicons style={{ marginHorizontal: 10 }} name="ios-contact" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Number</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>+44 834 384583</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="ios-call" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Called From</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>+44 512 65 8312</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Call Length</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>01.38</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="ios-time" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Recording</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>N/A</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} name="ios-recording" size={24} />
                    </View>
                </View>
            </View>
            <View style={styles.footer}></View>
            <Text></Text>
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
        // margin: 10,
        height: 60,
        borderWidth: 1,
        borderColor: templates.lightColor,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginVertical: 50,
        width: 120,
        height: 120,
        borderColor: templates.lightColor,
        borderWidth: 1,
        borderRadius: 120,
    },
});
