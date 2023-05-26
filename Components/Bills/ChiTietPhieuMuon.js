import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../color";
import ItemSachMuon from "./ItemSachMuon";

const ChiTietPhieuMuon = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <View style={{ padding: 10,flex:1}}>
      <View
        style={{ backgroundColor: "#eeeeee", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "gray" }}>Người mượn:</Text>
        <Text style={{ fontSize: 30 }}>Khuất Phi Long</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <Text>Ngày mượn: 2/23/2003</Text>
          <Text>Ngày trả: 20/23/2003</Text>
        </View>
        <View>
          <Text style={{ color: color.xanh }}>Trạng thái</Text>
          <Text style={{ color: "red" }}>Đang mượn</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: "gray", height: 1, marginTop: 10 }}
      ></View>
      <View style={{ marginTop: 30 }}>
        <Text>Danh sách sách</Text>
      </View>
      <View style={{flex:1}}>
        <FlatList data={list} renderItem={({ item }) => <ItemSachMuon />} />
      </View>
      <View style={{height:70,padding:10,flexDirection:'row',backgroundColor:color.xanhNhat,borderRadius:10,margin:10}}>
        <Text style={{flex:1,color:color.xanh,fontWeight:'bold'}}>Tổng tiền</Text>
        <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:color.xanh}}>12313123 vnđ</Text>

        </View>
      </View>
    </View>
  );
};

export default ChiTietPhieuMuon;

const styles = StyleSheet.create({});
