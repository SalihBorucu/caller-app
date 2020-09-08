import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../../styling';
import CircleButton from '../../components/CircleButton';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';

export default function NewCall(props) {
    const [number, setNumber] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(1);
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
                <View style={{ width: '80%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <View></View>
                    <Text style={[templates.h2, { color: templates.primaryColor, textAlign: 'center', fontSize: 32, lineHeight: 28 }]}>{number}</Text>
                    <TouchableOpacity onPress={backspace} onLongPress={backspaceAll}>
                        <Ionicons name="ios-backspace" size={26} color={templates.primaryColor} />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <View style={{ paddingLeft: 50 }}>
                        <Text style={[templates.small, { textAlign: 'center' }]}>Cost p/m:</Text>
                        <Text style={{ textAlign: 'center' }}>$0.64</Text>
                    </View>
                    <View>
                        <Text style={[templates.small, { textAlign: 'center' }]}>Call From:</Text>
                        <Picker
                            itemStyle={{ backgroundColor: 'grey', color: 'blue', fontFamily: 'Ebrima', fontSize: 17 }}
                            selectedValue={selectedNumber}
                            style={{ height: 20, width: 180 }}
                            onValueChange={(itemValue) => setSelectedNumber(itemValue)}>
                            <Picker.Item label="+44 0054 32 42" value="1" />
                            <Picker.Item label="+148 1828 2828" value="2" />
                        </Picker>
                    </View>
                    {/* <View>
                        <Text style={[templates.small, { textAlign: 'center' }]}>Call From:</Text>
                        <Text style={{ textAlign: 'center' }}>+44 839 3458</Text>
                    </View> */}
                </View>
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
                    <CircleButton
                        action={() => props.navigation.navigate('CallInProgress')}
                        icon="ios-call"
                        backgroundColor={templates.successColor}
                        textColor={templates.textColorLight}
                        border={false}
                        shadow={true}></CircleButton>
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
        flex: 0.3,
        // marginTop: 3,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
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
