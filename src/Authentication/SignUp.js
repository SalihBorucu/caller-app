import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Header from './Header';
import FormInput from '../components/FormInput';
import RoundButton from '../components/RoundButton';
import { templates } from '../styling';

export default function SignUp({ confirmLogin, navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title="One step closer to your second phone!"></Header>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={[templates.p]}>Fullname</Text>
                        <FormInput placeholder="Joe Doe"></FormInput>
                    </View>
                    <View>
                        <Text style={[templates.p, { marginTop: 20 }]}>Password</Text>
                        <FormInput placeholder="example@hey.com" icon="envelope"></FormInput>
                    </View>
                    <View>
                        <Text style={[templates.p, { marginTop: 20 }]}>Password</Text>
                        <FormInput placeholder="Enter Password" icon="eye"></FormInput>
                    </View>
                    <View>
                        <Text style={[templates.p, { marginTop: 20 }]}>Confirm Password</Text>
                        <FormInput placeholder="Enter Password" icon="eye"></FormInput>
                    </View>
                </View>
                <View style={styles.footer}>
                    <RoundButton text="Sign Up" type="btn" confirmLogin={confirmLogin}></RoundButton>
                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <Text style={templates.small}>Already have an Account? </Text>
                        <Text style={templates.smallBold} onPress={()=>navigation.navigate('Login')}>
                            Log in Here
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
