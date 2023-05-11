import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = (props) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login</Text>
      <TouchableOpacity
      style={{width:100,height:50,padding:3,backgroundColor:'cyan',justifyContent:'center',alignItems:'center',borderRadius:10,margin:40}}
      onPress={()=>props.navigation.navigate("Bottom")}
      >
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})