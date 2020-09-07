import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
// import Contact from './Contact';
import ContactSummary from './ContactSummary';
import { templates } from '../styling';
import { Ionicons, Entypo } from '@expo/vector-icons';
import database from '../Database';


export default function App(props, {navigation}) {
    const [contacts, setContacts] = useState(null);
    let showDetails = props.route.params.showDetails;

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContacts(data.filter((contact) => contact.phoneNumbers));
                }
            }
        })();
    }, []);
    // setContact('hello')
    // if (!contacts) {
    //     return (
    //         <View style={styles.container}>
    //             <View style={styles.header}>
    //                 <View style={{ width: 65 }}></View>
    //                 <Text style={templates.h4} onPress={() => props.navigation.navigate('Login')}>
    //                     Contacts
    //                 </Text>
    //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //                     <Ionicons name="ios-search" size={26} style={{ paddingRight: 10 }} />
    //                     <Entypo name="dots-three-vertical" size={24} style={{ paddingRight: 10 }}></Entypo>
    //                 </View>
    //             </View>
    //             <View style={styles.content}>
    //                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //                     <Text style={templates.p}>Could not find any contacts.</Text>
    //                 </View>
    //             </View>
    //             <View style={styles.footer}></View>
    //         </View>
    //     );
    // } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ width: 65 }}></View>
                    <Text style={templates.h4} onPress={() => props.navigation.navigate('Login')}>
                        Contacts
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Ionicons name="ios-search" size={26} style={{ paddingRight: 10 }} />
                        <Entypo name="dots-three-vertical" size={24} style={{ paddingRight: 10 }}></Entypo>
                    </View>
                </View>
                <View style={styles.content}>
                    <FlatList
                        data={database.phoneContacts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ContactSummary
                                contact={item}
                                contacts={database.phoneContacts}
                                action={showDetails ? () => props.navigation.navigate('Contact', { item }) : () => props.navigation.navigate('NewMessage', { item })}></ContactSummary>
                        )}></FlatList>
                </View>
                <View style={styles.footer}></View>
            </View>
        );
    }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: templates.hp('100%'),
        backgroundColor: templates.backgroundColor,
    },
    header: {
        paddingTop: 28,
        paddingBottom: 24,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: templates.backgroundColor,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        flex: 9,
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        width: '100%',
    },
    floatingBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 10,
    },
});
