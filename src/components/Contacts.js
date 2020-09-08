import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
// import Contact from './Contact';
import ContactSummary from './ContactSummary';
import { templates } from '../styling';
import database from '../Database';
import { TextInput } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';

export default function App(props, { navigation }) {
    const [contactsOriginal, setContactsOriginal] = useState(database.phoneContacts);
    const [contacts, setContacts] = useState(contactsOriginal);
    let showDetails = props.route.params.showDetails;

    function search(value) {
        if (value === '') {
            setContacts(contactsOriginal);
            return
        }
        setContacts(contactsOriginal.filter((y) => y.name.toLowerCase().includes(value)));
    }

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Contacts.requestPermissionsAsync();
    //         if (status === 'granted') {
    //             const { data } = await Contacts.getContactsAsync({
    //                 fields: [Contacts.Fields.PhoneNumbers],
    //             });

    //             if (data.length > 0) {
    //                 setOriginalContacts(data.filter((contact) => contact.phoneNumbers));
    //             }
    //         }
    //     })();
    // }, []);
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
                <View style={styles.headerRow}>
                    <Text style={templates.h1} onPress={() => props.navigation.navigate('Login')}>
                        Contacts
                    </Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <SearchBar action={search}></SearchBar>
                </View>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={contacts}
                    // extraData={contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ContactSummary
                            contact={item}
                            contacts={contacts}
                            action={showDetails ? () => props.navigation.navigate('Contact', { item }) : () => props.navigation.navigate('NewMessage', { item })}></ContactSummary>
                    )}></FlatList>
            </View>
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
        minHeight: 60,
        paddingTop: 48,
        // paddingBottom: 24,
        // flex: 1.5,
        backgroundColor: templates.backgroundColor,
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
