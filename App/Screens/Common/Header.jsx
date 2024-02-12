import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={require('./../../../assets/ava-vk-animal-91.jpg')}
                        style={styles.userImage} />
                    <View>
                        <Text style={{ color: 'white', fontFamily:'Raleway',fontWeight:100 }}>Привет</Text>
                        <Text style={{ color: 'white',fontFamily:'Raleway', fontSize: 20 }}>Userpic</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color='white' />


            </View>
            <View style={styles.searchBarContainer}>
                <TextInput placeholder="Поиск" style={styles.TextInput}></TextInput>
                <FontAwesome name='search' style={styles.searchbtn} size={24}  color='black' />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily:'Raleway',
        justifyContent: 'space-between'
    },
    TextInput: {
        fontWeight:"100",
        fontFamily:'Raleway',
        padding: 0, 
        paddingHorizontal: 16,
        paddingVertical: 0,
        backgroundColor:'white',
        borderRadius:8,
        width:'85%',
        maxHeight:45,
        fontSize:16
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 15,
        backgroundColor: '#9031ff',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        fontFamily:'out-fit' 

    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,

    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap:10
    },
    searchbtn: {
        backgroundColor: 'white',
        padding:10,
        borderRadius:8,
        marginBottom:10

    },
})