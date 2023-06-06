import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../color'
import ItemHoaDon from './ItemHoaDon'
import { API_URL } from '../../API__/api'

const UpdateBills = () => {
    const [list,setList] = useState([]);
    const [phone,setPhone] = useState("");
    const getData = ()=>{
        let uri = API_URL+'statiscalByStatus?status=0'
        fetch(uri).then((res)=>{return res.json()}).then((res_json)=>{
          setList([...res_json.data.billStatus])
        });
    }
    const getSearchPhone = ()=>{
      if(phone.length == 0){
        let uri = API_URL+'statiscalByStatus?status=0'
        fetch(uri).then((res)=>{return res.json()}).then((res_json)=>{
          setList([...res_json.data.billStatus])
        });
      }
      else{
        let uri = API_URL+'bill?phoneOrFullname='+phone+"&status=0";
        fetch(uri).then((res)=>res.json()).then((res_json)=>setList([...res_json.data]))
      }
        
    }
    useEffect(()=>{
      getData();
    },[])
  return (
    <View style={{padding:10,flex:1}}>
       <View style={{ flexDirection: "row"}}>
        <View style={{flex:1,marginRight:5}}>
          <View style={{ margin: 5 }}>
            <TextInput placeholder="Tìm kiếm sđt hoặc họ tên" onChangeText={(Text)=>setPhone(Text)}/>
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
            onPress={getSearchPhone}
          >
            <Text style={{color:'white'}}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{flex:1}}>
        <FlatList
        data={list}
        renderItem={({item})=>
        <ItemHoaDon DataItem={item}/>
      }
        />
      </View>
    </View>
  )
}

export default UpdateBills

const styles = StyleSheet.create({})