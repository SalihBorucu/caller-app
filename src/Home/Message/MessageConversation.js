import React, { useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import MessageBubble from './MessageBubble';

export default function MessageConversation(props) {
    const contact = props.route.params.contact;
    const scrollViewRef = useRef();
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : ''} keyboardVerticalOffset={50}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => props.navigation.goBack()} />
                <Text style={templates.h4}>{contact.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="ios-call" size={26} color={templates.successColor} />
                    <Ionicons style={{ paddingLeft: 15 }} name="ios-information-circle-outline" size={26} color={templates.successColor} />
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView
                    style={styles.messages}
                    ref={scrollViewRef}
                    onContentSizeChange={() => {
                        scrollViewRef.current.scrollToEnd({ animated: true });
                    }}>
                    <MessageBubble received={true} contact={contact}></MessageBubble>
                    <MessageBubble received={true} contact={contact}></MessageBubble>
                    <MessageBubble received={false} contact={contact}></MessageBubble>
                </ScrollView>
            </View>
            <View style={[styles.footer]}>
                <View style={styles.textBox}>
                    <TouchableOpacity style={{ paddingRight: 10 }}>
                        <Ionicons name="ios-camera" size={26} />
                    </TouchableOpacity>
                    <TextInput placeholder="Type Message" style={{ width: '100%' }}></TextInput>
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
