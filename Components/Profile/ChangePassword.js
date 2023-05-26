import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../color'
import { API_URL } from '../../API__/api'


const ChangePassword = () => {
  
    const [oldpasswd, setoldpasswd] = useState("")
    const [newpasswd, setnewpasswd] = useState("")
    const [rpnewpasswd, setrpnewpasswd] = useState("")
    const [erro, seterro] = useState("")


  const Validate = () => {
    if (oldpasswd.length == 0) {
      seterro('Nhập mật khẩu cũ')
      return false;
    } 
    if (newpasswd.length == 0) {
        seterro('Nhập mật khẩu mới')
        return false;
    }

    if (newpasswd!=rpnewpasswd) {
      seterro("Mật khẩu mới không trùng khớp");
      return false;
    } else
    {
    seterro("");
    return true;
    }
     
  }

  var data ={
    username:"Kento",
    passwd:oldpasswd
  }

  const CheckPass = () => {
    if (Validate() == true) {
      fetch(API_URL +"confiPass", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then((response) => { return response.json(); 
        }).then(data => {
           console.log(data);
           if (data.data==true){
             seterro(data.message)
             Update();
           }else{
            seterro("Mật khẩu không trùng khớp");
           }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const Update = () => {

    fetch(API_URL + "account/646f69dc4b5081fee60bd262", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          passwd:newpasswd
        }
        )
      }).then((res) => {
        seterro('Cập nhật thành công')
      }).catch((err) => {
        console.log(err.message)
      })
  }



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
       
       <Text style={{color:'red', textAlign:'center', marginTop:20, fontWeight:600}}>{erro}</Text>
       
      <TouchableOpacity style={{alignItems:'center', 
      justifyContent:'center',
      alignSelf:'center',
       marginTop:'12%',
        backgroundColor:color.xanh,
         width:'85%', padding:10, 
         marginStart:'15%',
         marginEnd:'15%',
         borderRadius:20,
         elevation:10
      
         }}  onPress={CheckPass}>
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