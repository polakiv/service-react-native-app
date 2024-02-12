import { View, Text, Image, TouchableOpacity, StyleSheet, Modal , ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductPhotos from './ProductPhotos';
import CheckOut from '../Checkout/CheckOut'; 


export default function Product() {
  const [isReadMore, setIsReadMore] = useState(false);
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business)
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false)
console.log(business.id)
  return (
    <ScrollView>
      <View style={{ height: '91%' }}> 
        <Image source={{ uri: business?.images[0]?.url }} style={{ width: '100%', height: 300 }} /> 
        <TouchableOpacity style={{ top: 20, left: 20, position: 'absolute', zIndex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          onPress={() => navigation.goBack()}
        > 
          <Ionicons name='arrow-back-outline' size={24} color="black" />
          <Text style={{ fontSize: 24, fontFamily: 'Raleway' }}>
            {param.category}
          </Text>
        </TouchableOpacity>
        <View style={{ padding: 30, paddingTop: 20 }}>
          <Text style={{ color: 'black', fontSize: 25, fontWeight: 100, paddingBottom: 7, fontFamily: 'Raleway' }}>{business?.name}</Text>
          <Text style={{ color: 'ff35e2', fontSize: 20, paddingTop: 7, paddingBottom: 7, fontFamily: 'Raleway' }}>{business?.contactPerson}{'🌟'}
            <Text style={{ backgroundColor: '#ff35e2', fontFamily: 'Raleway', paddingLeft: 5, paddingRight: 5 }}>
              {business?.category?.name}</Text>
          </Text>
          <Text style={{ color: 'black', fontSize: 15, paddingBottom: 3, fontFamily: 'Raleway' }}><Ionicons name="location-sharp" size={18} color="#ff35e2" /> {business?.address}</Text>
          <View style={{ borderWidth: 0.3, borderColor: '#d4d2d2', marginTop: 20, marginBottom: 20 }}></View>
          {business?.about ?
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Text style={{ fontFamily: 'Raleway', fontSize: 18, }}> Обо мне </Text>
              <Text style={{ fontFamily: 'Raleway', fontSize: 15 }} numberOfLines={isReadMore ? 20 : 2}> {business?.about}</Text>
              <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                <Text style={{ width: '100%', fontFamily: 'Raleway', fontSize: 14, color: 'blue' }}> {isReadMore ? 'Скрыть' : 'Читать больше'} </Text>
              </TouchableOpacity>
            </View> :
            <Text>нет описания</Text>}
          <View style={{ borderWidth: 0.4, borderColor: '#d4d2d2', marginTop: 20, marginBottom: 20 }}>
            <ProductPhotos business={business} />
          </View> 
        </View> 
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, margin: 5 }}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={{ textAlign: 'center', fontFamily: 'Raleway', color: '#9031ff' }}>Сообщение</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingBtn}
          onPress={() => setShowModal(true)}
        >
          <Text style={{ textAlign: 'center', fontFamily: 'Raleway', color: '#fff' }}>Заказать сейчас</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType='slide'
        visible={showModal}
      >
        <CheckOut 
        businessId={business.id}
        hideModal={() => setShowModal(false)} /> 
      </Modal>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  messageBtn: {
    padding: 15,
    backgroundColor: 'white',
    borderColor: '#ff35e2',
    borderRadius: 99,
    textAlign: 'center',
    flex: 1
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: '#ff35e2',
    borderColor: '#ff35e2',
    borderRadius: 99,
    textAlign: 'center',
    color: 'white',
    flex: 1
  }
})