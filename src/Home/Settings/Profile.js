import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';
import database from '../../Database';

export default function Profile({ navigation }) {
    const user = database.user;
    let imagePath = user.image ? user.image : require('../../../assets/images/default_user.png');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Edit Profile</Text>
                <Text style={[templates.p, { width: 35, color: templates.primaryColor }]}>Save</Text>
            </View>
            <View style={styles.content}>
                <View>
                    <Image style={styles.image} source={imagePath}></Image>
                    <Ionicons style={{ position: 'absolute', bottom: 60, right: 5 }} color={templates.primaryColor} name="ios-camera" size={26} />
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Fullname</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>{user.name}</Text>
                    </View>
                    <View></View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Ionicons name={contactName === 'Unknown' ? 'ios-add' : ''} size={26} /> */}
                        <Ionicons style={{ marginHorizontal: 10 }} color={templates.primaryColor} name="ios-contact" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Email</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>{user.email}</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} color={templates.primaryColor} name="ios-mail" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Password</Text>
                        <Text style={[templates.h3, { padding: 5 }]}>*********</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} color={templates.primaryColor} name="ios-lock" size={24} />
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View>
                        <Text style={[templates.p, { padding: 5 }]}>Owned Numbers</Text>
                        <Text style={[templates.p, { padding: 5, width: 250 }]}>+44 8545 4564, +1 48 54254 8454, +1 48 54254 8454, +848 38382 327</Text>
                    </View>
                    <View></View>
                    <View>
                        <Ionicons style={{ marginRight: 10 }} color={templates.primaryColor} name="ios-call" size={24} />
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginVertical: 50,
        width: 120,
        height: 120,
        borderColor: templates.primaryColor,
        borderWidth: 1,
        borderRadius: 120,
    },
});
