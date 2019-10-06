import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import api from '../services/api'

function SpotList({ tech }) {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots',
                {
                    params: { tech }

                })
            setSpots(response.data)

        }
        loadSpots()
    }, [])

    function handleNavigation(id) {
        navigation.navigate('book', { id })
    }


    return (
        <View style={styles.constainer}>
            <Text style={styles.title}>Empresas que usam:
            <Text style={styles.bold}>
                    {tech}
                </Text>
            </Text>
            <FlatList 
            style={styles.List}
            data={spots}
            keyExtractor={spot => spot._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={styles.listItem}>
                    <Image style={styles.thumb} source={{uri : item.thumbnail_url}} />
                    <Text style={styles.company}>{item.company}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text>
                            Solicitar Reserva
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    constainer: {
        marginTop: 30,

    },
    bold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    List:
    {
        paddingHorizontal: 20
    },
    listItem:{
        marginRight:15
    },
    thumb:{
        width: 100,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2 
    }
})

export default withNavigation(SpotList)


