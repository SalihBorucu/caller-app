import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RoundButton from '../components/RoundButton';
import { templates } from '../styling';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from './NavBar';
import MessageSummary from './MessageSummary';
import { Entypo, Feather } from '@expo/vector-icons';

export default function Inbox({navigation}) {
    const contacts = [
        {
            id: 1,
            name: 'Veronica Salmon',
            image: require('../../assets/images/image_22.png'),
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean purus lorem, finibus sed vestibulum id, ultricies a risus. Ut mauris lorem, viverra vel luctus vel, efficitur eget turpis. Integer non rutrum urna. Suspendisse mauris dolor, maximus vel posuere eu, euismod nec velit. Mauris sit amet malesuada ipsum, sed eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 2,
            name: 'Christina Michael',
            image: null,
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 3,
            name: 'Sam Taylor',
            image: null,
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 4,
            name: 'Michael Smith',
            image: require('../../assets/images/image_22.png'),
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 5,
            name: 'Chuck Norris',
            image: null,
            message:
                'Interdum et malesuada.',
        },
        {
            id: 6,
            name: 'Veronica Salmon',
            image: require('../../assets/images/image_22.png'),
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 7,
            name: 'Chris Brown',
            image: require('../../assets/images/image_22.png'),
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 8,
            name: 'Salvador Dali',
            image: null,
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a dictum arcu, a rhoncus tortor. Sed ut tristique risus. Interdum et malesuada fames eleifend eros. Nulla vitae est faucibus velit vehicula ornare.',
        },
        {
            id: 9,
            name: 'Ali Veli',
            image: require('../../assets/images/image_22.png'),
            message:
                'Interdum et malesuada.',
        },
        {
            id: 10,
            name: 'Veronica Salmon',
            image: require('../../assets/images/image_22.png'),
            message:
                'Sed ut tristique ris.',
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView style={{ backgroundColor: templates.backgroundColor }}>
                <View>
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
                            style={{ flexDirection: 'row', flex: 1, width: 500, margin: 0, padding: 0, width: '100%' }}
                            data={contacts}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <MessageSummary contact={item}></MessageSummary>}></FlatList>
                    </View>
                </View>
                <View style={styles.footer}></View>
            </ScrollView>
            <NavBar navigation={navigation}></NavBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: templates.hp('100%'),
    },
    header: {
        paddingTop: 68,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
    },
});
