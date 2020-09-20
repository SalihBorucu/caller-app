import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { templates } from '../../styling';
import FormInput from '../../components/FormInput';
import { Switch, TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import database from '../../Database';
import { call } from 'react-native-reanimated';

export default function Forwarding({ navigation }) {
    const userNumbers = database.user.phoneNumberProfiles;
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [callForwardingEnabled, setCallForwardingEnabled] = useState(userNumbers[selectedNumber].forwardSettings.call.active);
    const [messageForwardingEnabled, setMessageForwardingEnabled] = useState(userNumbers[selectedNumber].forwardSettings.message.active);
    const toggleCallForwarding = () => {
        setCallForwardingEnabled(!callForwardingEnabled);
    };
    const toggleMessageForwarding = () => {
        setMessageForwardingEnabled(!messageForwardingEnabled);
    };

    let phoneNumbers = userNumbers.map((myValue, myIndex) => {
        return <Picker.Item label={myValue.number} value={myIndex} key={myIndex} />;
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ ...styles.headerTop }}>
                    <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                    <Text style={templates.h3}>Forwarding</Text>
                    <Text style={[templates.p, { width: 35, color: templates.primaryColor }]}>Save</Text>
                </View>
                <Picker
                    itemStyle={{ backgroundColor: 'grey', color: 'blue', fontFamily: 'Ebrima', fontSize: 17 }}
                    selectedValue={selectedNumber}
                    style={{ height: 20, width: 180 }}
                    onValueChange={(itemValue) => setSelectedNumber(itemValue)}>
                    {phoneNumbers}
                </Picker>
            </View>
            <View style={styles.content}>
                <View style={{ ...styles.settingsBox }}>
                    <View>
                        <Text style={{ ...templates.h3 }}>Call Forwarding</Text>
                        <TextInput placeholder={'Enter number..'}>{userNumbers[selectedNumber].forwardSettings.call.number}</TextInput>
                    </View>
                    <Switch
                        trackColor={{ true: templates.lightColor, false: templates.lightColor }}
                        thumbColor={callForwardingEnabled ? templates.primaryColor : templates.primaryColor}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleCallForwarding}
                        value={callForwardingEnabled}
                    />
                </View>
                <View style={{ ...styles.settingsBox }}>
                    <View>
                        <Text style={{ ...templates.h3 }}>Text Forwarding</Text>
                        <TextInput placeholder={'Enter number..'}>{userNumbers[selectedNumber].forwardSettings.message.number}</TextInput>
                    </View>
                    <Switch
                        trackColor={{ true: templates.lightColor, false: templates.lightColor }}
                        thumbColor={messageForwardingEnabled ? templates.primaryColor : templates.primaryColor}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleMessageForwarding}
                        value={messageForwardingEnabled}
                    />
                </View>
            </View>
            <View style={styles.footer}></View>
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
        paddingTop: 32,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    headerTop: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer: {},
    settingsBox: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
});
