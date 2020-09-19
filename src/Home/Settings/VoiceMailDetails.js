import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import FormInput from '../../components/FormInput';
import { templates } from '../../styling';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default function VoiceMailDetails({ modalVisible, saveAction, deleteAction, selectedVM }) {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [name, setName] = useState('New Recording');
    useEffect(() => {
        setName(selectedVM ? selectedVM.name : 'New Recording') 
    });
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <TextInput placeholder={name} style={{ ...templates.h3 }}>
                            {name}
                        </TextInput>
                    </View>
                    <View style={{ ...styles.content }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                            <TouchableOpacity>
                                <Ionicons name={audioPlaying ? 'ios-pause' : 'ios-play'} size={32} onPress={() => setAudioPlaying(!audioPlaying)} />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 10 }}>audio75835.mp3</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity>
                            <Ionicons name="ios-save" size={32} color={templates.primaryColor} onPress={saveAction} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="ios-trash" size={32} color={templates.primaryColor} onPress={deleteAction} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    header: { borderBottomColor: templates.lightColor, borderBottomWidth: 1 },
    content: { margin: 10 },
    footer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%' },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});
