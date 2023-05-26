import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../color'
import { useNavigation } from '@react-navigation/core'

const ItemHoaDon = (props) => {
    const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'white',borderRadius:10,marginVertical:10}}>
      <View style={{backgroundColor:color.xanh,borderTopLeftRadius:10,borderTopRightRadius:10,padding:10}}>
        <Text style={{fontSize:20,color:'white'}}>Khuất Phi Long</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={{padding:10,flex:1}}>
        <Text style={{color:color.xanh}}>Ngày mượn: 23/23/2003</Text>
        <Text style={{color:'red',marginTop:5}}>Ngày trả: 25/23/2003</Text>
      </View>
      <View style={{marginRight:10,marginTop:10}}>
        <Text>Trạng thái</Text>
        <Text style={{color:'red'}}>Đang mượn</Text>
      </View>
      </View>
      <View style={{marginLeft:10}}>
        <Text>Số lượng mượn: 10 cuốn</Text>
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
        <Text style={{marginLeft:10,marginTop:5,fontSize:18}}>123131313 vnđ</Text>
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