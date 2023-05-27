import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Khac = (props) => {
  return (
    <View>
      <Text onPress={()=>props.navigation.navigate("Login")}>Khac</Text>
    </View>
  )
}

export default Khac

const styles = StyleSheet.create({})