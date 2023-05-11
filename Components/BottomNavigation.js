import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrangChu from './TrangChu';
import TimKiem from './Sach';
import DonMuon from './DonMuon';
import Khac from './Khac';
import color from './color';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Sach from './Sach';



const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: color.xanh,
      tabBarInactiveTintColor: color.xanh,
      tabBarShowLabel: false,
      
      tabBarIcon: ({ focused }) => {
        let screenName = route.name;
        if (screenName == "TrangChu") {
          return (
            <Entypo name="home" size={24} color={focused ? color.xanh : color.den}/>
          );
        } else if (screenName == "Sach") {
          return (
            <Ionicons name="book" size={22} color={focused ? color.xanh : color.den} />
          );
        } else if (screenName == "DonMuon") {
          return (
            <FontAwesome name="file" size={20} color={focused ? color.xanh : color.den} />
          );
        } else if (screenName == "Khac") {
          return (
            <Ionicons name="menu" size={28} color={focused ? color.xanh : color.den} />
          );
        }
      },
    })}
    
    >
      <Tab.Screen name='TrangChu' component={TrangChu} options={{headerShown:false}}/>
      <Tab.Screen name='Sach' component={Sach}/>
      <Tab.Screen name='DonMuon' component={DonMuon}/>
      <Tab.Screen name='Khac' component={Khac}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})