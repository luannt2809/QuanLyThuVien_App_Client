import { StyleSheet, Text, TouchableOpacity, View,TextInput, Image,Alert } from 'react-native'
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { API_URL } from '../API__/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [passwd, setPasswd] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  ////////////
  const doLogin = ()=>{
    if(username.length==0){
      Alert.alert('Thông báo','Chưa nhập username');
      return;
    }
    if(passwd.length==0){
      Alert.alert('Thông báo','Chưa nhập password');
      return;
    }
    let url_login = API_URL+'login';
    const payLoad = {username:username,passwd:passwd};
    fetch(url_login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payLoad)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status==200) {
          // Đăng nhập thành công
          props.navigation.navigate("Bottom")
          Alert.alert('Thông báo', 'Đăng nhập thành công');
          console.log(data.data.fullname);
        } else if(data.status==204) {
          // Đăng nhập thất bại
          Alert.alert('Thông báo', 'Tên đăng nhập hoặc mật khẩu không đúng');
          
        } else{
          Alert.alert('Thông báo', 'Tài khoản không tồn tại');
        }
      })
      .catch(error => {
        console.log('Lỗi đăng nhập:', error);
        Alert.alert('Lỗi', 'Đã xảy ra lỗi trong quá trình đăng nhập');
      });
  }
  ///////////
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:"#fff",paddingTop:180}}>
      <Image style={{width:100,height:100,alignSelf:'center',marginBottom:40}} source={require('../assets//library.png')}/>
      <Text style={{color:'#584CF4',fontSize:20,fontWeight:'bold',marginBottom:30}}>Thư viện Ngũ Hảo Hán FPoly</Text>
      <View>
        <View style={styles.boxInput1}>
          <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//user.png')}/>
          <TextInput style={styles.boxInput2}  placeholder='Tên đăng nhập' textContentType={'username'}
          onChangeText={(txt)=>{setUsername(txt)}}
          />
        </View>
        <View style={styles.boxInput1}>
          <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//passwd.png')}/>
          <TextInput style={styles.boxInput2} placeholder='Mật khẩu' textContentType='password' secureTextEntry={!showPassword}
          onChangeText={(txt)=>{setPasswd(txt)}}
          />   
          {/* <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//hidepasswd.png')}/> */}

          <TouchableOpacity onPress={toggleShowPassword} style={{justifyContent:'center',marginTop:6}}>
            <Text>{showPassword ? <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//showpasswd.png')}/> : <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//hidepasswd.png')}/>}</Text>
            
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
      style={styles.boxBtn1}
      onPress={doLogin}
      >
        <Text style={{color:'#fff'}}>Đăng nhập</Text>
      </TouchableOpacity>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  boxBtn1:{
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:45,
    borderWidth:1,
    borderColor:"#584CF4",
    backgroundColor:'#584CF4',
    color:'#fff',
    marginTop:20,
    borderRadius:25
  },
  boxInput1:{
    width:300,
    height:50,
    fontSize:16,
    color:'black',
    flexDirection:'row',
    borderWidth:2,
    borderColor:"#EEEEEE",
    backgroundColor:"#EEEEEE",
    marginTop:10,
    padding:5,
    borderRadius:10,
  },
  boxInput2:{
    width:250,
    height:38,
    fontSize:16,
    color:'black',
    borderColor:"#EEEEEE",
    backgroundColor:"#EEEEEE",
    borderWidth:2,
    padding:5,
    borderRadius:10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  textBox: {
    fontSize: 20,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5,
  },
  texShowHide: {
    textAlign: 'center',
    fontSize:20,
    color: 'red'
  }
})