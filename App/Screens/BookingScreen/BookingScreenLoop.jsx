import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function BookingScreenLoop({ business }) {

  const navigation = useNavigation()

  return (
    <TouchableOpacity 
    onPress={()=>navigation.push('product',
    {
      business:business
    })}
    style={{
      padding: 10, marginBottom: 15,
      backgroundColor: "white",
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'row',
      gap: 10
    }}>

      <Image source={{ uri: business?.images[0]?.url }} style={{ width: 100, height: 100,borderRadius:5 }} />
      <View >
        <Text style={{ color: 'grey', fontSize: 15, paddingBottom: 7, fontFamily: 'Raleway' }}>{business?.contactPerson}</Text>
        <Text style={{ color: 'black', fontSize: 21, fontWeight: 700, paddingBottom: 7, fontFamily: 'Raleway' }}>{business?.name}</Text>
        <Text style={{ color: 'grey', fontSize: 15, paddingBottom: 3, fontFamily: 'Raleway' }}><Ionicons name="location-sharp" size={18} color="#9d8cd2" /> {business?.address}</Text>
 

      </View>
    </TouchableOpacity>
  )
}