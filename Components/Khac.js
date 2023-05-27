import { StyleSheetView, Text, Button, Image, TouchableHighlight,StyleSheet,View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Khac = (props) => {
  const navigation = useNavigation();
  const [objAccountInfo,setobjAccountInfo] = useState({});
  const getAccountInfo = async()=>{
    try {
      const value = await AsyncStorage.getItem('Login');
      console.log("Lấy dữ liệu" + value);
      if(value !==null){
        setobjAccountInfo(JSON.parse(value));
      }
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
      <Text onPress={()=>props.navigation.navigate("Login")}>Khac</Text>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#777777',padding:5,paddingLeft:10}}>1. {objAccountInfo.data.fullname}</Text>
    </View>
  )
}

export default Khac

const styles = StyleSheet.create({})