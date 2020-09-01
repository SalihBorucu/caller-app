import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import {templates} from '../styling';

export default function RoundButton({ text, navigation }) {
    function signIn() {
        console.log('signing in');
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
        width: templates.wp('80%') > 412 ? 363 : templates.wp('90%'),
        borderRadius: 16,
        margin: 16,
    },
    btnText: {
        color: 'white',
        // fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
});
