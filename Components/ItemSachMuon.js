import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from './color'

const ItemSachMuon = () => {
  return (
    <View style={{backgroundColor:color.xanh,padding:10,margin:10,borderRadius:10}}>
      <View style={{flexDirection:'row'}}>
        <Image
        source={{uri:'https://marketplace.canva.com/EAD5DFBuM78/1/0/1003w/canva-c%E1%BA%B7p-%C4%91%C3%B4i-trong-c%E1%BB%8F-khoa-h%E1%BB%8Dc-vi%E1%BB%85n-t%C6%B0%E1%BB%9Fng-s%C3%A1ch-b%C3%ACa-eRK4o7m6a6c.jpg'}}
        style={{height:100,width:70}}
        />
        <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold',color:'white'}}>Nhớ người thời đã quên</Text>
        <Text style={{marginLeft:10,marginTop:10}}>Giá mượn: 123131vnđ</Text>
        <Text style={{marginLeft:10}}>Số lượng: 1</Text>
        </View>
        
        
      </View>
    </View>
  )
}

export default ItemSachMuon

const styles = StyleSheet.create({})