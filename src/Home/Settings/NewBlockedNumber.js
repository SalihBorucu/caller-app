import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';
import { TextInput } from 'react-native-gesture-handler';

export default function NewNumber({ action, active, onChange }) {
    function getNewNumber(x) {
        onChange(x);
    }
    function handleEnter(text){getNewNumber(text.nativeEvent.text); action()}

    if (active) {
        return (
            <View style={{ width: '90%' }}>
                <View style={[styles.box]}>
                    <View style={{ width: '80%' }}>
                        <TextInput
                            onSubmitEditing={handleEnter}
                            enablesReturnKeyAutomatically={true}
                            style={{ padding: 10 }}
                            placeholder="New number here.."
                            autoFocus={true}
                            onChangeText={(text) => getNewNumber(text)}
                            keyboardType="phone-pad"></TextInput>
                    </View>
                    <View>
                        <Ionicons style={{ marginHorizontal: 10 }} name="ios-add-circle-outline" size={24} onPress={action} />
                    </View>
                </View>
            </View>
        );
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    box: {
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: 1,
        borderColor: templates.lightColor,
        borderRadius: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
