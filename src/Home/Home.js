import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RoundButton from '../components/RoundButton'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <RoundButton text="asdaf"></RoundButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
