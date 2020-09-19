import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { templates } from '../styling';
import { FontAwesome } from '@expo/vector-icons';
import Pulse from './Pulse';

const emptyAction = () => {
    console.log('havent set an action for this.');
};

export default function RecordButton({ text, icon, action = emptyAction, backgroundColor = templates.backgroundColor, border = true, textColor = templates.primaryColor, shadow = false }) {
    const [isRecording, setIsRecording] = useState(false);
    function recordingAction() {
        setIsRecording(!isRecording);
        if (isRecording) {
            action();
        }
    }

    return (
        <TouchableOpacity style={[styles.image, { justifyContent: 'center', alignItems: 'center' }]} onPress={recordingAction}>
            <Pulse color={templates.primaryColor} diameter={180} speed={30} started={isRecording}></Pulse>
            <FontAwesome name={isRecording ? 'stop' : 'microphone'} size={58} color={templates.backgroundColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        marginVertical: 25,
        width: 120,
        height: 120,
        backgroundColor: templates.primaryColor,
        borderWidth: 1,
        borderRadius: 120,
    },
});
