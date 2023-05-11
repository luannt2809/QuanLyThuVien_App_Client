import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = (props) => {
    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('Login');
        }, 3000);
    },[])
  return (
    <View style={{alignItems:'center',flex:1,marginTop:200}}>
      <Image style={{width:150,height:150,alignSelf:'center',marginBottom:40}} source={require('../assets//library.png')}/>
      <Text style={{color:'#584CF4',fontSize:26,fontWeight:'bold',marginBottom:30}}>Thư viện Ngũ Hảo Hán FPoly</Text>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:250}}>
        <Text style={{fontSize:20,color:'#584CF4'}}>form</Text>
        <Text style={{fontSize:24,marginLeft:10,fontWeight:'bold',color:'#584CF4'}}>Group 9</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})