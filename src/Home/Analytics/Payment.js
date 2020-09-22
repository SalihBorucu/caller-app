import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { templates } from '../../styling';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import CardDetails from './CardDetails';

export default function Payment() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="md-arrow-back" size={26} onPress={() => navigation.goBack()} style={{ paddingRight: 35 }} />
                    <Text style={templates.h3}>Checkout</Text>
                    <View style={{ width: 35 }}></View>
                </View>
                <KeyboardAvoidingView style={{ ...styles.content }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...styles.miniCard }}>
                            <Image style={{ width: 100, height: 100, marginTop: 15 }} source={require('../../../assets/images/apple-pay.png')}></Image>
                        </View>
                        <View style={{ ...styles.miniCard }}>
                            <Image style={{ width: 60, height: 50, marginLeft: -5 }} source={require('../../../assets/images/gpay.png')}></Image>
                        </View>
                        <View style={{ ...styles.miniCard }}>
                            <Image style={{ width: 40, height: 40 }} source={require('../../../assets/images/paypal.png')}></Image>
                        </View>
                        <View style={{ ...styles.miniCard }}>
                            <Ionicons name="ios-card" size={42} color={templates.primaryColor}></Ionicons>
                        </View>
                    </View>
                    <View style={{ width: '90%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Credits</Text>
                            <Text>$5</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>International Credits</Text>
                            <Text>$5</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Recording Credits</Text>
                            <Text>$5</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ ...templates.h3 }}>Total</Text>
                            <Text style={{ ...templates.h3 }}>$15.00</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 20, justifyContent: 'space-evenly' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Billing Address</Text>
                            <TextInput placeholder="1A Example Street" style={{ ...styles.input, width: '80%' }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Post Code</Text>
                                <TextInput style={{ ...styles.input }} placeholder="XS12 829"></TextInput>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Country</Text>
                                <TextInput style={{ ...styles.input }} placeholder="UK"></TextInput>
                            </View>
                        </View>
                    </View>
                    <CardDetails></CardDetails>
                </KeyboardAvoidingView>
                <View style={{ ...styles.footer }}>
                    <TouchableOpacity style={{ ...styles.purchaseButton }}>
                        <Text style={{ color: templates.textColorLight }}>Complete Purchase</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        // flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    miniCard: {
        margin: 10,
        height: 61,
        width: 61,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templates.backgroundColor,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    input: {
        textAlign: 'center',
        borderBottomColor: templates.lightColor,
        borderBottomWidth: 1,
    },
    purchaseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templates.successColor,
        borderRadius: 5,
        height: 44,
        width: 201,
    },
});
