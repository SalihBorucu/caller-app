import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../styling';
import database from '../Database';
import RoundButton from '../components/RoundButton';
import UsageCard from './UsageCard';
import { Ionicons } from '@expo/vector-icons';

export default function Analytics() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[templates.h1, { color: templates.textColorLight }]}>My Credit Summary</Text>
                <View style={styles.purchaseBox}>
                    <View>
                        <Text style={[templates.h4, { color: templates.textColorLight }]}>Current Credit</Text>
                        <Text style={[templates.p, { color: templates.lightColor, paddingTop: 5 }]}>${database.user.credits}</Text>
                    </View>
                    <RoundButton width={'30%'} type="btnOutline" text="Purchase"></RoundButton>
                </View>
                <View style={styles.purchaseBox}>
                    <View>
                        <Text style={[templates.h4, { color: templates.textColorLight }]}>International Credit</Text>
                        <Text style={[templates.p, { color: templates.lightColor, paddingTop: 5 }]}>${database.user.credits}</Text>
                    </View>
                    <RoundButton width={'30%'} type="btnOutline" text="Purchase"></RoundButton>
                </View>
                <View style={styles.purchaseBox}>
                    <View>
                        <Text style={[templates.h4, { color: templates.textColorLight }]}>Record Credit</Text>
                        <Text style={[templates.p, { color: templates.lightColor, paddingTop: 5 }]}>${database.user.credits}</Text>
                    </View>
                    <RoundButton width={'30%'} type="btnOutline" text="Purchase"></RoundButton>
                </View>
            </View>
            <View style={styles.content}>
                <UsageCard title="Last 30-Days" messages="200" calls="130"></UsageCard>
                <UsageCard title="Last 60-Days" messages="400" calls="230"></UsageCard>
                <UsageCard title="All Time" messages="600" calls="330"></UsageCard>
            </View>
            <View style={styles.footer}>
                    <Ionicons name="ios-pricetag" color={templates.primaryColor} size={26}/>
                    <Text style={templates.p}>Looking for extra numbers?</Text>
                    <RoundButton type="btn" width="25%" text="Purchase"></RoundButton>
            </View>
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
        paddingTop: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 0.4,
        backgroundColor: templates.primaryColor,
    },
    content: {
        flex: 0.55,
        backgroundColor: templates.lightColor,
        alignItems: 'center',
    },
    footer: {
        flex: 0.10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    purchaseBox: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
