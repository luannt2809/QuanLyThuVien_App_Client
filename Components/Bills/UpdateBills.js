import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../color'
import ItemHoaDon from './ItemHoaDon'
import { API_URL } from '../../API__/api'

const UpdateBills = () => {
    const list = [1,2,3,4,5]
    const getData = ()=>{
        let uri = API_URL+'bill'
    }
  return (
    <View style={{padding:10,flex:1}}>
       <View style={{ flexDirection: "row"}}>
        <View style={{flex:1,marginRight:5}}>
          <View style={{ margin: 5 }}>
            <TextInput placeholder="Tìm kiếm(dd/mm/yyyy)" />
          </View>
          <View
            style={{ height: 1, backgroundColor: "gray", marginHorizontal: 5 }}
          ></View>
        </View>
        <View style={{justifyContent:'center'}}>
          <TouchableOpacity
            style={{
              width: 100,
              backgroundColor: color.xanh,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{color:'white'}}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{flex:1}}>
        <FlatList
        data={list}
        renderItem={({item})=>
        <ItemHoaDon />
      }
        />
      </View>
    </View>
  )
}

export default UpdateBills

const styles = StyleSheet.create({})