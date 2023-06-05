import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../color'
import { useNavigation } from '@react-navigation/core'

const ItemHoaDon = (props) => {
  const { _id, bookId, imgCCCD, dateRent, datePay, totalPrice, phone, fullname, status } = props.DataItem;
    const navigation = useNavigation();


  return (
    <View style={{backgroundColor:'white',borderRadius:10,marginVertical:10}}>
      <View style={{backgroundColor:color.xanh,borderTopLeftRadius:10,borderTopRightRadius:10,padding:10}}>
        <Text style={{ fontSize: 20, color: 'white' }}>{fullname}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={{padding:10,flex:1}}>
        <Text style={{color:color.xanh}}>Ngày mượn: {dateRent}</Text>
        <Text style={{color:'red',marginTop:5}}>Ngày trả: {datePay}</Text>
      </View>
      <View style={{marginRight:10,marginTop:10}}>
          <Text>Trạng thái</Text>
       {status==0 ? (
            <Text style={{ color: 'red' }}>Chưa Trả</Text>
       ) : (
              <Text style={{ color: 'blue' }}>Đã Trả</Text>
       )}

        {/* <Text style={{color:'red'}}>{}</Text> */}
      </View>
      </View>
      <View style={{marginLeft:10}}>
        <Text>Số lượng mượn: {bookId.length}</Text>
      </View>
      <View style={{backgroundColor:'gray',height:1,margin:10}}>

      </View>
      <View style={{margin:10,flexDirection:'row'}}>
        <View style={{flexDirection:'row',flex:1}}>

        
        <Image
        source={require('../../Image/tong_tien.png')}
        style={{width:30,height:30}}
        />
        <View>
        <Text style={{marginLeft:10,marginTop:5,fontSize:18, color:'red'}}>{totalPrice} VNĐ</Text>
        </View>
        </View>
        <TouchableOpacity
         onPress={()=>navigation.navigate("ChiTietPhieuMuon")}
        >
            <Text style={{color:color.xanh}}>Chi tiết</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default ItemHoaDon

const styles = StyleSheet.create({})