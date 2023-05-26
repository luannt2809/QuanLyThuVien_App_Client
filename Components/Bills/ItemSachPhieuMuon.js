import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import color from "../color";
import listBookByOrder from "../ListBookByOrder/listBookByOrder";

const ItemSachPhieuMuon = (props) => {
  const {idBook,quantity,nameBook,priceRent,image} = props.DataItem;
  
  const onDelete = ()=>{
    const index = listBookByOrder.findIndex(item=>item.idBook == idBook);
    listBookByOrder.splice(index,1);
    alert("Xóa thành công");
    props.GetData();
  }
  return (
    <View
      style={{
        margin: 10,
        backgroundColor: color.xanhNhat,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: image,
          }}
          style={{ height: 50, width: 30, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{nameBook}</Text>
          <Text>Giá mượn: {priceRent}</Text>
        </View>
        <View style={{ flex: 0.5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <View style={{justifyContent:'center',alignItems:'center',marginRight:20}}>
          <Text>Số lượng</Text>
          <Text>{quantity}</Text>
          </View>
          <View>
          <TouchableOpacity
          onPress={onDelete}
          >
          <Image
          source={require('../../Image/delete.png')}
          style={{height:15,width:15}}
          />
          </TouchableOpacity>
          </View>
          
        </View>
        
      </View>
    </View>
  );
};

export default ItemSachPhieuMuon;

const styles = StyleSheet.create({});
