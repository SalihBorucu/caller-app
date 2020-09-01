import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-google-app-auth';
import template from '../styling';

const { width, height } = Dimensions.get('window');

export default function RoundButton({ text, navigation }) {
    async function signInWithGoogleAsync() {
        try {

            const result = await Google.logInAsync({
                androidClientId: '758801542752-b1r13r3htq4n00unh6s3s04d1giodpgi.apps.googleusercontent.com',
                iosClientId: '758801542752-uamtvfk9u959eojn83dhpm7hnl5nkrjd.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                console.log(result)
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log(e);
            return { error: true };
        }
    }
    function signIn() {
        signInWithGoogleAsync();
    }
    return (
        <View>
            <LinearGradient // Button Linear Gradient
                colors={['#8743FF', '#4136F1']}
                start={[1, 0]}
                style={styles.btn}>
                <RectButton onPress={signIn} style={styles.btn}>
                    <Text style={styles.btnText}> {text}</Text>
                </RectButton>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: template.wp('80%') > 412 ? 363 : template.wp('90%'),
        borderRadius: 16,
        margin: 16,
    },
    btnText: {
        color: 'white',
        // fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
});
