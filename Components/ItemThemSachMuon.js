import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from './color'

const ItemThemSachMuon = () => {
  return (
    <View style={{margin:10,padding:15,backgroundColor:color.xanhNhat,flexDirection:'row'}}>
      <View>
      <Image
        source={{uri:'https://marketplace.canva.com/EAD5DFBuM78/1/0/1003w/canva-c%E1%BA%B7p-%C4%91%C3%B4i-trong-c%E1%BB%8F-khoa-h%E1%BB%8Dc-vi%E1%BB%85n-t%C6%B0%E1%BB%9Fng-s%C3%A1ch-b%C3%ACa-eRK4o7m6a6c.jpg'}}
        style={{height:70,width:50,borderRadius:5}}
        />
      </View>
      <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
        <Text style={{fontSize:18}}>
        Garena Lieen Quan Mobile
        </Text>
        <Text style={{color:'gray'}}>Giá mượn: 121313 vnđ</Text>
      </View>
      <View style={{justifyContent:'center'}}>
        <TouchableOpacity style={{backgroundColor:color.xanh,padding:10,borderRadius:10}}>
        <Text style={{color:'white'}}>Thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemThemSachMuon

const styles = StyleSheet.create({})