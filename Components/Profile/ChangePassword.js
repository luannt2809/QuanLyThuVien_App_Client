import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../color'

const ChangePassword = () => {
  
    const [oldpasswd, setoldpasswd] = useState()
    const [newpasswd, setnewpasswd] = useState()
    const [rpnewpasswd, setrpnewpasswd] = useState()

  return (
    <View style={{backgroundColor:'white', flex:1}}>
        <View style={styles.input}>
        <Text style={{ color:color.xanh, fontSize:17, marginBottom:5}}>Mật khẩu cũ </Text>
        <TextInput style={{ borderBottomWidth: 0.5, borderBottomColor: "#000" }} onChangeText={(text) => { setoldpasswd(text) }}></TextInput>
        </View>
      <View style={styles.input}>
        <Text style={{ color: color.xanh, fontSize: 17, marginBottom: 5 }}>Mật khẩu mới </Text>
        <TextInput style={{ borderBottomWidth: 0.5, borderBottomColor: "#000" }} onChangeText={(text)=>{setnewpasswd(text)}}></TextInput>
      </View>
      <View style={styles.input}>
        <Text style={{ color: color.xanh, fontSize: 17, marginBottom: 5 }}>Nhập lại mật khẩu mới</Text>
        <TextInput style={{ borderBottomWidth: 0.5, borderBottomColor: "#000" }} onChangeText={(text) => { setrpnewpasswd(text) }}></TextInput>
      </View>

      <TouchableOpacity style={{alignItems:'center', 
      justifyContent:'center',
      alignSelf:'center',
       marginTop:'15%',
        backgroundColor:color.xanh,
         width:'85%', padding:10, 
         marginStart:'15%',
         marginEnd:'15%',
         borderRadius:20,
         elevation:10
         
         }}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Xác Nhận</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  input:{
    marginTop:'10%',
    marginStart:'5%',
    marginEnd:'5%'
  }

})