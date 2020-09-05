import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { templates } from '../styling';
import { Feather } from '@expo/vector-icons';
import CallsSummary from './CallsSummary';
import CircleButton from '../components/CircleButton';

export default function RecentCalls(props) {
    const database = props.route.params.contacts;
    return (
        <View style={[styles.container, { backgroundColor: templates.backgroundColor }]}>
            <View style={styles.floatingBtn}>
                <CircleButton
                    action={() => props.navigation.navigate('NewCall')}
                    icon="ios-call"
                    border={false}
                    backgroundColor={templates.successColor}
                    textColor={templates.textColorLight}
                    shadow={true}></CircleButton>
            </View>
            <View style={styles.header}>
                <View></View>
                {/* MAKE FLOATING BUTTON  */}
                <Text style={templates.h4} onPress={() => props.navigation.navigate('Login')}>
                    Recent Calls
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Feather name="search" size={24} style={{ paddingRight: 10 }} />
                    <Feather name="users" size={24} style={{ paddingRight: 10 }}></Feather>
                </View>
            </View>
            <View style={styles.content}>
                <FlatList data={database.contacts} keyExtractor={(item) => item.id} renderItem={({ item }) => <CallsSummary contact={item}></CallsSummary>}></FlatList>
            </View>
            {/* <View style={styles.footer}></View> */}
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
