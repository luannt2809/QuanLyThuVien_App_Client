import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = (props) => {
    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('Login');
        }, 3000);
    },[])
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})