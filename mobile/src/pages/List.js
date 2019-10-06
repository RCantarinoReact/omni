import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Image, Text, AsyncStorage } from 'react-native'
import SpotList from '../components/spotList'

import logo from '../assets/logo.png'

export default function List() {
    const [tecs, setTecs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storage => {
            const techArray = storage.split(',').map(tech => tech.trim())
            setTecs(techArray)
        })

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {tecs.map(tx => <SpotList key={tx} tech={tx} />)}
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo:
    {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})




