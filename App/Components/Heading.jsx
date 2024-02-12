import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({ text, isViewAll = false }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{text}</Text>
            {isViewAll ? <Text style={styles.heading1}>Смотреть все</Text> : null}
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily:'Raleway',
        color:'black',
        fontWeight:'400',
        margin: 0
    },
    heading1: {
        fontSize: 14,
        fontFamily:'Raleway',
        margin: 0
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})