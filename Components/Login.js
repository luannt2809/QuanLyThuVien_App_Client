import { StyleSheet, Text, TouchableOpacity, View,TextInput, Image } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';

// export class ShowHidePassword extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hidepassword: true
//     }
//   }
//   setPasswordVisibility = () => {
//     this.setState({hidepassword: !this.state.hidepassword});
//   }
//   render() {
//     return (
//       <View style={{marginTop:100}}>
//         <TextInput secureTextEntry={this.state.hidepassword} style={styles.textBox}></TextInput>
//         <TouchableOpacity onPress={this.setPasswordVisibility}>
//           <Text style={styles.texShowHide}>{!this.state.hidepassword ? 'Ẩn' : 'Hiện'}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }
// export default ShowHidePassword

const Login = (props) => {
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:"#fff",paddingTop:180}}>
      <Image style={{width:100,height:100,alignSelf:'center',marginBottom:40}} source={require('../assets//library.png')}/>
      <Text style={{color:'#584CF4',fontSize:26,fontWeight:'bold',marginBottom:30}}>Thư viện Ngũ Hảo Hán FPoly</Text>
      <View>
        <View style={styles.boxInput1}>
          <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//user.png')}/>
          <TextInput style={{paddingLeft:10}}  placeholder='Username' textContentType={'username'}/>
        </View>
        <View style={styles.boxInput1}>
          <Image style={{width:15,height:15,alignSelf:'center'}} source={require('../assets//passwd.png')}/>
          <TextInput style={{paddingLeft:10}} placeholder='Password' textContentType='password' secureTextEntry={true}/>
        </View>
      </View>
      <TouchableOpacity
      style={styles.boxBtn1}
      onPress={()=>props.navigation.navigate("Bottom")}
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
    fontSize:20,
    color:'black',
    flexDirection:'row',
    borderWidth:2,
    borderColor:"#EEEEEE",
    backgroundColor:"#EEEEEE",
    marginTop:10,
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