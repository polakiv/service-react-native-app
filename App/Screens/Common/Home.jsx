import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import SliderScreen from './SliderScreen'
import ModuleCategoriesOnHome from './ModuleCategoriesOnHome'
import ModuleFeaturedOnHome from './ModuleFeaturedOnHome'

export default function Home() {
  return (
    <ScrollView>
      <Header/>
      <View style={{padding:20}}>
      <SliderScreen/>
      <ModuleCategoriesOnHome/>
      <ModuleFeaturedOnHome/>
    </View>
    </ScrollView>
  )
}