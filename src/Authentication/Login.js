import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Header from './Header';
import FormInput from '../components/FormInput';
import RoundButton from '../components/RoundButton';

export default function Login({confirmLogin, navigation}) {
    console.log(navigation)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Header title="Sign In"></Header>
            </View>
            <View style={styles.content}>
                <FormInput type="Email..."></FormInput>
                <FormInput type="Password..."></FormInput>
                <Text style={styles.forgotPwd}>Forgot Password</Text>
            </View>
            <View style={styles.footer}>
                <RoundButton text="Sign In" confirmLogin={confirmLogin}></RoundButton>
                <RoundButton text="Google Sign In" navigation={navigation}></RoundButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flex: 0.3,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        height: 175,
        width: 175,
        marginBottom: 10,
        resizeMode: 'stretch',
    },
    forgotPwd: {
        // fontFamily: 'Poppins-Regular',
        fontSize: 12,
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.4,
    },
});
