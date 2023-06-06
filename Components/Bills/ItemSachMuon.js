import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../color'

const ItemSachMuon = (props) => {
  const {idBook,quantity} = props.DataItem;
  return (
    <View style={{backgroundColor:color.xanh,padding:10,margin:10,borderRadius:10}}>
      <View style={{flexDirection:'row'}}>
        <Image
        source={{uri:idBook.image}}
        style={{height:100,width:70}}
        />
        <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold',color:'white'}}>{idBook.name}</Text>
        <Text style={{marginLeft:10,marginTop:10}}>Giá mượn: {idBook.priceRent}vnđ</Text>
        <Text style={{marginLeft:10}}>Số lượng: {quantity}</Text>
        </View>
        
      </View>
    </View>
  )
}

export default ItemSachMuon

const styles = StyleSheet.create({})