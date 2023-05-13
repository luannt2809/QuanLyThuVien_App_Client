import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import color from "./color";

const ItemSachPhieuMuon = () => {
  const [soLuong, setSoLuong] = useState(1);
  const TangSoLuong = ()=>{
    let tang = soLuong+1
    setSoLuong(tang);
  }
  const GiamSoLuong = ()=>{
    if(soLuong!=1){
        let giam = soLuong-1
        setSoLuong(giam);
    }
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
            uri: "https://marketplace.canva.com/EAD5DFBuM78/1/0/1003w/canva-c%E1%BA%B7p-%C4%91%C3%B4i-trong-c%E1%BB%8F-khoa-h%E1%BB%8Dc-vi%E1%BB%85n-t%C6%B0%E1%BB%9Fng-s%C3%A1ch-b%C3%ACa-eRK4o7m6a6c.jpg",
          }}
          style={{ height: 50, width: 30, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Sach moi cung</Text>
          <Text>Giá mượn: 123</Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Text>Số lượng</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {soLuong == 1 ? (
              <TouchableOpacity>
                <Image
                  source={require("../Image/delete.png")}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
              onPress={GiamSoLuong}
              >
                <Image
                  source={require("../Image/minus.png")}
                  style={{ width: 13, height: 13,marginTop:2 }}
                />
              </TouchableOpacity>
            )}

            <Text
              style={{
                marginHorizontal: 10,
                color: color.xanh,
                fontWeight: "bold",
              }}
            >
              {soLuong}
            </Text>
            <TouchableOpacity
            onPress={TangSoLuong}
            >
              <Image
                source={require("../Image/addsach.png")}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  tintColor: color.xanh,
                }}
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
