import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../styling';
import CircleButton from '../components/CircleButton';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewCall(props) {
    const [number, setNumber] = useState('');
    function numberInput() {
        setNumber(number + this.value);
    }
    function backspace() {
        if (number.length) setNumber(number.slice(0, -1));
    }
    function backspaceAll() {
        if (number.length) setNumber('');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="" size={26} color={templates.primaryColor} />
                <Text style={[templates.h2, { color: templates.primaryColor, textAlign: 'center', fontSize: 32, lineHeight: 28 }]}>{number}</Text>
                <TouchableOpacity onPress={backspace} onLongPress={backspaceAll}>
                    <Ionicons name="ios-backspace" size={26} color={templates.primaryColor} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.row}>
                    <CircleButton action={numberInput} text="1"></CircleButton>
                    <CircleButton action={numberInput} text="2"></CircleButton>
                    <CircleButton action={numberInput} text="3"></CircleButton>
                </View>
                <View style={styles.row}>
                    <CircleButton action={numberInput} text="4"></CircleButton>
                    <CircleButton action={numberInput} text="5"></CircleButton>
                    <CircleButton action={numberInput} text="6"></CircleButton>
                </View>
                <View style={styles.row}>
                    <CircleButton action={numberInput} text="7"></CircleButton>
                    <CircleButton action={numberInput} text="8"></CircleButton>
                    <CircleButton action={numberInput} text="9"></CircleButton>
                </View>
                <View style={styles.row}>
                    <CircleButton action={numberInput} text="+"></CircleButton>
                    <CircleButton action={numberInput} text="0"></CircleButton>
                    <CircleButton action={numberInput} text="#"></CircleButton>
                </View>
                <View style={styles.row}>
                    <CircleButton action={()=> props.navigation.navigate('CallInProgress')} icon="ios-call" backgroundColor={templates.successColor} textColor={templates.textColorLight} border={false} shadow={true}></CircleButton>
                </View>
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
        marginHorizontal: 20,
        paddingTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.3,
        flexDirection: 'row',
    },
    content: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        width: '80%',
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
