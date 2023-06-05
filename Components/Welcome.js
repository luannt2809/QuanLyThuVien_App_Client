import { StyleSheet, Text, View,Image,Animated, Easing,ActivityIndicator } from 'react-native'
import React, { useEffect,useRef } from 'react'
import { StatusBar } from 'expo-status-bar';

const Welcome = (props) => {
    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('Login');
        }, 3000);
    },[])
  return (
    <View style={{alignItems:'center',flex:1,marginTop:200}}>
      <Image style={{width:100,height:100,alignSelf:'center',marginBottom:40}} source={require('../assets//library.png')}/>
      <Text style={{color:'#584CF4',fontSize:24,fontWeight:'bold',marginBottom:30}}>Thư viện FPoly</Text>
      <ActivityIndicator size="large" color="#584CF4" />
      <Text style={styles.text}>Loading...</Text>
      <View style={{justifyContent:'center',alignItems:'center',paddingTop:50}}>
        <Text style={{fontSize:20,color:'#584CF4'}}>form</Text>
        <Text style={{fontSize:24,fontWeight:'bold',color:'#584CF4'}}>Group 9</Text>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    color: '#584CF4',
    fontWeight: 'bold',
    fontSize: 18,
  },
})