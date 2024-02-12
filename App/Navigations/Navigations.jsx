import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Common/Home';
import Category from '../Screens/Category/Category';
import Product from '../Screens/Product/Product';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="category" component={Category} />
      <Stack.Screen name="bookingscreen" component={BookingScreen} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  );
}