import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import color from "./color";
import ItemHoaDon from "./ItemHoaDon";

const SachHomNayMuon = (props) => {
  const list = [1,2,3,4,5]
  return (
    <View style={{padding:10,flex:1}}>
      <View style={{ flexDirection: "row"}}>
        <View style={{flex:1,marginRight:5}}>
          <View style={{ margin: 5 }}>
            <TextInput placeholder="Tìm kiếm(dd/mm/yyyy)" />
          </View>
          <View
            style={{ height: 1, backgroundColor: "gray", marginHorizontal: 5 }}
          ></View>
        </View>
        <View style={{justifyContent:'center'}}>
          <TouchableOpacity
            style={{
              width: 100,
              backgroundColor: color.xanh,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{color:'white'}}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{marginTop:20,padding:10,flexDirection:'row'}} >
        <Text style={{marginRight:10}}>Tổng tiền</Text>
        <Text  >22222222222222 vnđ</Text>
      </View>
      <View style={{marginLeft:10,flexDirection:'row',marginBottom:20}} >
      <Text style={{marginRight:10}}>Tổng số</Text>
      <Text  >12 phiếu mượn</Text>
    </View>
      <View style={{flex:1}}>
        <FlatList
        data={list}
        renderItem={({item})=>
        <ItemHoaDon />
      }
        />
      </View>
      
    </View>
  );
};

export default SachHomNayMuon;

const styles = StyleSheet.create({});