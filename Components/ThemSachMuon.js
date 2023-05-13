import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from './color'
import ItemThemSachMuon from './ItemThemSachMuon'

const ThemSachMuon = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',padding:10}}>
        <View style={{flex:1,backgroundColor:'white',marginRight:10,justifyContent:'center',paddingLeft:10,borderRadius:5}}>
        <TextInput placeholder='Tìm kiếm'/>
        </View>
        <TouchableOpacity
        style={{backgroundColor:color.xanh,justifyContent:'center',alignItems:'center',padding:10,borderRadius:5}}
        >
          <Text style={{color:'white'}}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <ItemThemSachMuon/>
      </View>
    </View>
  )
}

export default ThemSachMuon

const styles = StyleSheet.create({})