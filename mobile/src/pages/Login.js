import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, AsyncStorage, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import api from '../services/api'
import logo from '../assets/logo.png'

export default function Login({ navigation }) {
    const [email, setMail] = useState('')
    const [tecs, setTecs] = useState('')

    useEffect(() => {
        
        AsyncStorage.getItem('user')
            .then(usr => {
                if (usr) {
                    navigation.navigate('List')
                }
            })
    }, [])



    async function handleSubmit() {

        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;
        console.log(_id)
        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', tecs)

        navigation.navigate('List')
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>
                    Seu E-MAIL
                </Text>
                <TextInput style={styles.input}
                    placeholder='Seu e-mail'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setMail}

                />
                <Text style={styles.label}>
                    Tecnologias
                </Text>
                <TextInput style={styles.input}
                    placeholder='Tecnologias usadas'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={tecs}
                    onChangeText={setTecs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={styles.btnTxt}>
                        Encontrar Spots
                </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:
    {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    btnTxt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16

    },
    input:
    {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    form:
    {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginBottom: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    }
})
