import React, { useRef, useEffect, showStatus } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import MessageBubble from './MessageBubble';

export default function NewMessage(props) {
    const navigation = props.navigation;
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
                <TextInput style={{ fontSize: 24 }} placeholder="Enter a number" ref={inputRef} keyboardType="phone-pad" />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons onPress={() => props.navigation.navigate('Contacts')} name="ios-contacts" size={26} />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        flex: 8,
        alignItems: 'center',
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
});
