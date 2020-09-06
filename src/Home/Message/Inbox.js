import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { templates } from '../../styling';
import MessageSummary from './MessageSummary';
import { Entypo, Feather } from '@expo/vector-icons';
import database from '../../Database';
import CircleButton from '../../components/CircleButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Inbox({navigation}) {
    return (
        <View style={[styles.container, { backgroundColor: templates.backgroundColor }]}>
            <View style={styles.floatingBtn}>
                <CircleButton
                    action={() => navigation.navigate('NewMessage')}
                    icon="ios-create"
                    backgroundColor="transparent"></CircleButton>
            </View>
            <View style={styles.header}>
                {/* //invisible to center title */}
                <View style={{ width: 65 }}></View>
                <Text style={templates.h4}>Inbox</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Feather name="search" size={24} style={{ paddingRight: 10 }} />
                    <Entypo name="dots-three-vertical" size={24} style={{ paddingRight: 10 }}></Entypo>
                </View>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={database.contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('MessageConversation', {contact: item})}>
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
