import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Header';
import FormInput from '../components/FormInput';
import RoundButton from '../components/RoundButton';
import { templates } from '../styling';

export default function PwdResetPassword({ confirmLogin, navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title="Time to set your new new password"></Header>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={[templates.p, { marginTop: 20 }]}>Password</Text>
                        <FormInput placeholder="Enter Password" icon="eye"></FormInput>
                    </View>
                    <View>
                        <Text style={[templates.p, { marginTop: 20 }]}>Confirm Password</Text>
                        <FormInput placeholder="Enter Password" icon="eye"></FormInput>
                    </View>
                </View>
                <Text style={[templates.small, { marginTop: 20 }]}>The password must be at least 8 characters, contain an uppercase letter, number and special character.</Text>
                <View style={styles.footer}>
                    <RoundButton text="Set New Password" type="btn" confirmLogin={confirmLogin} action={() => navigation.navigate('Home')}></RoundButton>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        height: templates.hp('100%'),
    },
    header: {
        marginTop: templates.hp('100%') > templates.wp('100%') ? '20%' : '5%',
        alignItems: 'center',
    },
    content: {
        marginTop: templates.hp('100%') > templates.wp('100%') ? '15%' : '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
