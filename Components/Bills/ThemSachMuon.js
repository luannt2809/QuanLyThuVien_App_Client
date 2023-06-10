import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../color'
import ItemThemSachMuon from './ItemThemSachMuon'
import { API_URL } from '../../API__/api'

const ThemSachMuon = ({navigation,route}) => {
  const [search,setSearch] = useState([]); 
  const [listBooks,setListBooks] = useState([]);
  const {GetData} = route.params;
  const getDataBook = ()=>{
    if(search.length == 0){
      const uri_list_books = API_URL+"books"
      fetch(uri_list_books).then((res)=>{return res.json()}).then((res_json)=>{
        setListBooks([...res_json.data])
      })
    }
    else{
      const uri = API_URL+"/books/search?name="+search;
      fetch(uri).then((res)=>{return res.json()}).then((res_json)=>{
        setListBooks([...res_json.data])
      });

    }
    
  }
  useEffect(()=>{
    getDataBook();
  },[])
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',padding:10}}>
        
        <View style={{flex:1,backgroundColor:'white',marginRight:10,justifyContent:'center',paddingLeft:10,borderRadius:5}}>
        <TextInput placeholder='Tìm kiếm' onChangeText={(Text)=>setSearch(Text)}/>
        </View>
        <TouchableOpacity
        style={{backgroundColor:color.xanh,justifyContent:'center',alignItems:'center',padding:10,borderRadius:5}}
        onPress={getDataBook}
        >
          <Text style={{color:'white'}}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <FlatList
        data={listBooks}
        renderItem={({item})=>
        <ItemThemSachMuon DataItem={item} GetData = {GetData}/>
      }
        />
      </View>
    </View>
  )
}

export default ThemSachMuon

const styles = StyleSheet.create({})