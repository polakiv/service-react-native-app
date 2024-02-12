import { View, Text, Touchable, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import GlobalApi from '../../Utils/GlobalApi';
import BookingScreenLoop from './BookingScreenLoop';

export default function BookingScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    console.log('Категория', 'Уборка');
    param && getBooking()
  }, [param])

  const getBooking = () => {
    GlobalApi.getCategoryProduct('Уборка')
      .then(resp => {
        setBooking(resp.bussinessLists);
        console.log('resp bookki', resp.bussinessLists);

      })
  }

  return (
    <ScrollView style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.goBack()}
      >

        <Ionicons name='arrow-back-outline' size={24} color="black" />
         
      </TouchableOpacity>
      {booking?.length > 0 ?
        <FlatList
          data={booking}
          renderItem={({ item, index }) => (
            <BookingScreenLoop business={item} />
          )}
          style={{ marginTop: 10 }}
        /> :
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: '20%' }}>Пока вы ничего не заказали</Text>}
    </ScrollView>
  )
}