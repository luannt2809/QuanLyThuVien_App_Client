import {
  StyleSheetView,
  Text,
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import color from "./color";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Khac = (props) => {
  const navigation = useNavigation();
  const [objAccountInfo, setobjAccountInfo] = useState({});
  const getAccountInfo = async () => {
    try {

      const value = await AsyncStorage.getItem("Login");
      if (value !== null) {
        setobjAccountInfo(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = async () => {
    try {
      await AsyncStorage.setItem("Logout", "");
      props.navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const Version=()=>{
    Alert.alert(
      'Thông báo',
      'Phiên bản 0.0.0.1',
      [
      
        { text: 'Ok', onPress: () => console.log('OK') }
      ],
      { cancelable: false }
    );
  }
  /////
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      // khi màn hình được hiển thị sẽ gọi vào hàm này
      // gọi hàm load dữ liệu
      getAccountInfo();
    });

    return unsubscribe;
  }, [props.navigation]);
  return (
    <View>

    <View style={{backgroundColor:'white',
    
      alignItems:'center',
       borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       padding:10
       }}>
        <Image
          source={{ uri: objAccountInfo.avatar ? objAccountInfo.avatar : null }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            marginRight: 15,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        > {objAccountInfo.fullname}</Text>
        <Text>{objAccountInfo.email}</Text>

        <TouchableOpacity style={{backgroundColor:color.xanh, flexDirection:'row', padding:5,
        width:80,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:10,
        elevation:5
        }} onPress={() => props.navigation.navigate("Profile")}>
          <Text style={{color:'white', fontWeight:"bold",marginEnd:5}} >Xem</Text>
          <AntDesign
            name="right"
            size={20}
            color="white"
            style={{ justifyContent: "center", }}
          />
        </TouchableOpacity>
    </View>

      <View style={{backgroundColor:'white', marginTop:10, paddingTop:10,
      borderTopStartRadius:20,
      borderTopEndRadius:20,
      
       height:'100%'}}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              margin: 15,
              backgroundColor: color.xanh,
              padding: 10,
              elevation: 10,
              borderRadius: 10,
              alignContent: "center",
            }}
            onPress={() => props.navigation.navigate('UpdateBills')}
          >
            <Feather
              name="edit"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "700" }}
            >
              Sửa phiếu mượn
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <AntDesign
                name="right"
                size={20}
                color="white"
                style={{ justifyContent: "center" }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              margin: 15,
              backgroundColor: color.xanh,
              padding: 10,
              elevation: 10,
              borderRadius: 10,
              alignContent: "center",
            }} onPress={Version}
          >
            <Octicons name="versions" size={24} color="white" style={{marginEnd:20}}/>
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "700" }}
            >
              Phiên Bản
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <AntDesign
                name="right"
                size={20}
                color="white"
                style={{ justifyContent: "center" }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              margin: 15,
              backgroundColor: color.xanh,
              padding: 10,
              elevation: 10,
              borderRadius: 10,
              alignContent: "center",
            }}
            onPress={Logout}
          >
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "700" }}
            >
              Đăng Xuất
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <AntDesign
                name="right"
                size={20}
                color="white"
                style={{ justifyContent: "center" }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  );
};

export default Khac;

const styles = StyleSheet.create({});
