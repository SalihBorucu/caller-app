import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { templates } from '../../styling';
import CircleButton from '../../components/CircleButton';
import Pulse from '../../components/Pulse';
import database from '../../Database';

export default function CallInProgress(props) {
    let imagePath = props.contact ? props.contact.image : require('../../../assets/images/default_user.png');
    const [loudSpeaker, setLoudSpeaker] = useState(false);
    const [micOff, setMicOff] = useState(false);

    const callDetails = { from: '+1298 329891', to: '+109 123900123', duration: '01.32' };
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}>
                <View>
                    <Pulse color="#d4f4e5" diameter={300} speed={30}></Pulse>
                    <Image style={styles.image} source={imagePath}></Image>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={templates.h3}>Veronica Jung</Text>
                    <Text style={templates.p}>Calling...</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.row}>
                    <CircleButton
                        action={() => setLoudSpeaker(!loudSpeaker)}
                        icon={loudSpeaker ? 'ios-volume-high' : 'ios-volume-low'}
                        backgroundColor={templates.lightColor}
                        textColor={templates.textColorDark}
                        border={false}
                    />
                    <CircleButton
                        style={styles.shadow}
                        action={() => props.navigation.navigate('CallInfo', {item: callDetails})}
                        icon="ios-call"
                        backgroundColor={templates.errorColor}
                        textColor={templates.textColorLight}
                        border={false}
                        shadow={true}
                    />
                    <CircleButton
                        action={() => setMicOff(!micOff)}
                        icon={micOff ? 'ios-mic' : 'ios-mic-off'}
                        backgroundColor={templates.lightColor}
                        textColor={templates.textColorDark}
                        border={false}
                    />
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
        justifyContent: 'space-around',
    },
    footer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: '80%',
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 120,
        height: 120,
        borderColor: templates.lightColor,
        borderWidth: 1,
        borderRadius: 120,
    },
});
