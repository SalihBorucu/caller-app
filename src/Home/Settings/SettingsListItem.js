import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { templates } from '../../styling';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingsListItem({ text, icon, action }) {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={action} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ionicons name={icon} size={28} />
                <Text style={[templates.h2, { paddingLeft: 20 }]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
