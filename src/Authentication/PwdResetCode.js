import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Header from './Header';
import FormInput from '../components/FormInput';
import RoundButton from '../components/RoundButton';
import { templates } from '../styling';

export default function PwdResetCode({ confirmLogin, navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title="Enter the code we have sent you below"></Header>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={[templates.p]}>Code</Text>
                        <FormInput placeholder="6 Digits" icon="lock"></FormInput>
                    </View>
                </View>
                <View style={styles.footer}>
                    <RoundButton text="Confirm" type="btn" confirmLogin={confirmLogin} action={() => navigation.navigate('PwdResetPassword')}></RoundButton>
                    <RoundButton text="Send Again" type="btnOutline" width="40%" confirmLogin={confirmLogin} action={() => navigation.navigate('PwdResetEmail')}></RoundButton>
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
