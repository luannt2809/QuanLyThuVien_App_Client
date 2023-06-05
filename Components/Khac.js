import { StyleSheetView, Text, Button, Image, TouchableHighlight,StyleSheet,View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import color from './color'


const Khac = (props) => {
  const navigation = useNavigation();
  const [objAccountInfo,setobjAccountInfo] = useState({});
  const getAccountInfo = async()=>{
    try {
      const value = await AsyncStorage.getItem('Login');
     // console.log("Lấy dữ liệu" + value);
      if(value !==null){
        setobjAccountInfo(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Logout = async()=>{
    try {
      await AsyncStorage.setItem("Logout","");
      props.navigation.navigate("Login")
    } catch (error) {
      console.log(error);
    }
  }
  /////
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
        // khi màn hình được hiển thị sẽ gọi vào hàm này
        // gọi hàm load dữ liệu
        getAccountInfo();
    });


    return unsubscribe;
}, [props.navigation]);
  return (
    <View>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#777777',
      display:'flex',
      padding:5,paddingLeft:10}}>1. {objAccountInfo.fullname}</Text>

       
      <View>
        <TouchableOpacity style={{
          flexDirection: 'row', margin: 15, backgroundColor: color.xanh, padding: 10,
          elevation: 10,
          borderRadius: 10,
          alignContent:'center',
        }} onPress={Logout}>
            <MaterialCommunityIcons name="logout" size={24} color="white" style={{marginRight:20}} />
            <Text style={{textAlign:'center', color:'white', fontWeight:'700'}}>Đăng Xuất</Text>
            <View style={{flex:1, alignItems:'flex-end'}}>
            <AntDesign name="right" size={20} color="white" style={{ justifyContent:'center'}} />         
            </View>
         </TouchableOpacity>
        
       
      </View>
    </View>
  )
}

export default Khac

const styles = StyleSheet.create({})