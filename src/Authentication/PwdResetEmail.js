import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Header from './Header';
import FormInput from '../components/FormInput';
import RoundButton from '../components/RoundButton';
import { templates } from '../styling';

export default function PwdResetEmail({ confirmLogin, navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title="What is your registered email?"></Header>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={[templates.p]}>Email</Text>
                        <FormInput placeholder="example@hey.com" icon="envelope"></FormInput>
                    </View>
                </View>
                    <Text style={[templates.small, {marginTop: 20}]}>We will send a code to your email that you can use to set a new password.</Text>
                <View style={styles.footer}>
                    <RoundButton text="Send Code" type="btn" confirmLogin={confirmLogin} action={() => navigation.navigate('PwdResetCode')}></RoundButton>
                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <Text style={templates.small}>Don't have an Account? </Text>
                        <Text style={templates.smallBold} onPress={() => navigation.navigate('SignUp')}>
                            Sign up Here
                        </Text>
                    </View>
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
