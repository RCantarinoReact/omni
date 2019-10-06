import React , {useState} from 'react'
import { View, AsyncStorage, SafeAreaView, StyleSheet } from 'react-native'

export default function Booking({ navigation }) {
    const id = navigation.getParam('id')
    const [date, setDate] = useState('')
    return (

        <SafeAreaView>
            <Text style={styles.label}>
                Data de interesse
                </Text>
            <TextInput style={styles.input}
                placeholder='data de  interesse'
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCapitalize='words'
                autoCorrect={false}
                value={date}
                onChangeText={setDate}

            />
        </SafeAreaView>)
}
const styles = StyleSheet.create({
    container:
    {
        marginTop: 30
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
    },
    title:
    {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    btn:
    {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 2,
        marginTop: 15

    },
    btnTxt:
    {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    },

    neg:
    {
        fontWeight: 'bold'
    }
})
