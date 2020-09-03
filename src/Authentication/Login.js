import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Header from './Header';
import FormInput from '../components/FormInput';
import RoundButton from '../components/RoundButton';
import { templates } from '../styling';

export default function Login({ confirmLogin, navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title="Sign in to Continue"></Header>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={[templates.p]}>Email Address</Text>
                        <FormInput placeholder="Example@hey.com"></FormInput>
                    </View>
                    <View>
                        <Text style={[templates.p, { marginTop: 20 }]}>Password</Text>
                        <FormInput placeholder="Enter Password" icon="eye"></FormInput>
                    </View>
                </View>
                <View style={styles.footer}>
                    <RoundButton text="Sign In" type="btn" confirmLogin={confirmLogin}></RoundButton>
                    <View style={{ width: '100%', alignItems: templates.hp('100%') > templates.wp('100%') ? 'flex-end' : 'center' }}>
                        <Text style={[templates.p]} onPress={() => navigation.navigate('PwdResetEmail')}>
                            Reset Password
                        </Text>
                    </View>
                    <Text style={[templates.smallMuted, { marginTop: 60 }]}>Or Continue With</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <RoundButton icon="google" text="Google" width="40%" type="btnOutline" navigation={navigation}></RoundButton>
                        <RoundButton icon="google" text="Facebook" width="40%" type="btn" icon="facebook" navigation={navigation}></RoundButton>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <Text style={templates.small}>Don't Have Account? </Text>
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
        flex: 1,
        padding: '5%',
        height: templates.hp('100%'),
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
