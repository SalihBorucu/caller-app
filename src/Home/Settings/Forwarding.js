import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { templates } from '../../styling';
import FormInput from '../../components/FormInput';
import { Switch } from 'react-native-gesture-handler';

export default function Forwarding({ navigation }) {
     const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                <Text style={templates.h3}>Forwarding</Text>
                <View style={{ width: 35 }}></View>
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={{ ...templates.h3 }}>Call Forwarding</Text>
                    <FormInput placeholder="ajshdjh"></FormInput>
                    <Switch
                        trackColor={{ true:templates.lightColor, false:templates.lightColor }}
                        thumbColor={isEnabled ? templates.primaryColor : templates.primaryColor}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View>
                    <Text style={{ ...templates.h3 }}>Text Forwarding</Text>
                    <FormInput placeholder="ajshdjh"></FormInput>
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
        flexDirection: 'row',
        // flex: 1,
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: templates.lightColor,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer: {},
});
