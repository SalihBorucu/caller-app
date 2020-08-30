import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function RoundButton({ text }) {
    return (
        <View>
            <LinearGradient // Button Linear Gradient
                colors={['#8743FF', '#4136F1']}
                start={[1, 0]}
                style={styles.btn}>
                <RectButton style={styles.btn}>
                    <Text style={styles.btnText}>{text}</Text>
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
        width: 363,
        borderRadius: 16,
        margin: 16,
    },
    btnText: {
        color: 'white',
        // fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
});
