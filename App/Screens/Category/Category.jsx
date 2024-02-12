import { View, Text, Touchable, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import GlobalApi from '../../Utils/GlobalApi';
import CategoryLoop from './CategoryLoop';

export default function Category() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    console.log('Категория', param.category);
    param && getCategory()
  }, [param])

  const getCategory = () => {
    GlobalApi.getCategoryProduct(param.category)
      .then(resp => {
        setCategory(resp.bussinessLists);
        console.log('resp bussinessLists', resp.bussinessLists);

      })
  }

  return (
    <ScrollView style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.goBack()}
      >

        <Ionicons name='arrow-back-outline' size={24} color="black" />
        <Text style={{ fontSize: 25, fontFamily: 'Raleway' }}>
          {param.category}
        </Text>
      </TouchableOpacity>
      {category?.length > 0 ?
        <FlatList
          data={category}
          renderItem={({ item, index }) => (
            <CategoryLoop business={item} />
          )}
          style={{ marginTop: 10 }}
        /> :
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: '20%' }}>Пока нет исполнителей</Text>}
    </ScrollView>
  )
}