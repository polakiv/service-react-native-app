import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign  } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screens/Common/Home';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'; 
import Navigations from './Navigations';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'blue'
    }}
    >
      <Tab.Screen name="Home" component={Navigations} 
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12, marginTop:-7}}>
            Главная
          </Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="Booking" component={BookingScreen}   options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12, marginTop:-7}}>
            Заказы
          </Text>
        ),
        tabBarIcon:({color,size})=>( 
          <Entypo name="bookmark"  size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen}   options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12, marginTop:-7}}>
            Профиль
                      </Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome  name="user-circle" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  );
}