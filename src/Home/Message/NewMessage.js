import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native-gesture-handler';
import MessageBubble from './MessageBubble';
import database from '../../Database';

export default function NewMessage(props) {
    const [contactsOriginal, setContactsOriginal] = useState(database.phoneContacts);
    const [similarContacts, setSimilarContacts] = useState('');
    const navigation = props.navigation;
    let contactNumber = props.route.params.item ? props.route.params.item.phoneNumbers[0].number : null;

    function findMatching(value) {
        if(value.match(/[a-z]/i)){
            setSimilarContacts(contactsOriginal.filter((x) => x.name.toLowerCase().includes(value)));
            return
        }
        if (value === '') {
            setSimilarContacts('');
            return;
        }
        setSimilarContacts(contactsOriginal.filter((x) => x.phoneNumbers[0].number.replace(/\D/g, '').includes(value.replace(/\D/g, ''))));
    }

    const inputRef = useRef();
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Platform.OS === 'ios' ? inputRef.current.focus() : setTimeout(() => inputRef.current.focus(), 40);
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : ''} keyboardVerticalOffset={50}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => props.navigation.goBack()} />
                <TextInput style={{ fontSize: 24 }} placeholder="Enter a number" ref={inputRef} keyboardType="phone-pad" onChangeText={findMatching} />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons onPress={() => props.navigation.navigate('Contacts', { showDetails: false })} name="ios-contacts" size={26} />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', opacity: similarContacts.length ? 1 : 0 }}>
                <View style={styles.searchDropdown}>
                    <FlatList
                        data={similarContacts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.searchDropdownItem} onPress={()=> navigation.navigate('MessageConversation', {item})}>
                                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}></FlatList>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView style={styles.messages}>
                    {/* <MessageBubble received={true} contact={contact}></MessageBubble>
                    <MessageBubble received={true} contact={contact}></MessageBubble>
                    <MessageBubble received={false} contact={contact}></MessageBubble> */}
                </ScrollView>
            </View>
            <View style={[styles.footer]}>
                <View style={styles.textBox}>
                    <TouchableOpacity style={{ paddingRight: 10 }}>
                        <Ionicons name="ios-camera" size={26} />
                    </TouchableOpacity>
                    <TextInput style={[templates.p, { width: '90%' }]} placeholder="Type Message" multiline={true}></TextInput>
                </View>
                <TouchableOpacity style={styles.sendButton}>
                    <Ionicons name="ios-send" size={26} color={templates.textColorLight}></Ionicons>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        minHeight: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        minHeight: 20, //Look into why this works well
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopColor: templates.lightColor,
        borderTopWidth: 1,
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templates.successColor,
        width: 44,
        height: 44,
        borderRadius: 5,
    },
    textBox: {
        flex: 0.8,
        height: 44,
        borderRadius: 5,
        backgroundColor: templates.lightColor,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    messages: {
        flex: 1,
        width: '95%',
        margin: 20,
    },
    searchDropdown: {
        maxHeight: 200,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        borderWidth: 1,
        borderTopWidth: 0,
        borderRadius: 5,
        borderColor: templates.lightColor,
        padding: 5
    },
    searchDropdownItem: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
        borderRadius: 5,
    },
});
