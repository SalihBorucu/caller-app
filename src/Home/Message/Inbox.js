import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { templates } from '../../styling';
import MessageSummary from './MessageSummary';
import { Entypo, Feather } from '@expo/vector-icons';
import database from '../../Database';
import CircleButton from '../../components/CircleButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar';

export default function Inbox({ navigation }) {
    const [contactsOriginal, setContactsOriginal] = useState(database.contacts);
    const [contacts, setContacts] = useState(contactsOriginal);
    function search(value) {
        if (value === '') {
            setContacts(contactsOriginal);
            return;
        }
        setContacts(contactsOriginal.filter((y) => y.name.toLowerCase().includes(value)));
    }
    return (
        <View style={[styles.container, { backgroundColor: templates.backgroundColor }]}>
            <View style={styles.floatingBtn}>
                <CircleButton action={() => navigation.navigate('NewMessage')} icon="ios-create" backgroundColor="transparent"></CircleButton>
            </View>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <Text style={templates.h4}>Inbox</Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <SearchBar action={search}></SearchBar>
                </View>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('MessageConversation', { contact: item })}>
                            <MessageSummary contact={item}></MessageSummary>
                        </TouchableOpacity>
                    )}></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: templates.hp('100%'),
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
