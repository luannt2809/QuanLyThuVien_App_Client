import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import color from "./color";

const TrangChu = (props) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const getDate = day + "/" + month + "/" + year;
  useEffect(()=>{
    console.log(year);
  },[])

  return (
    <View style={{flex:1}}>
      <View
        style={{
          paddingLeft: 10,
          backgroundColor: "#584CF4",
          paddingBottom: 10,
          paddingTop: 40,
          flexDirection: "row",
          alignItems: "center",

        }}
      >
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }}
        />
        <View>
          <Text style={{ fontSize: 20, color: "white" }}>Xin chào,</Text>
          <Text style={{ fontSize: 30, color: "white" }}>Khuất Phi Long</Text>
        </View>
      </View>
      <ScrollView style={{flex:1}}>
      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/dolar.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ fontWeight: "bold", color: color.xanh }}>
            Báo cáo doanh thu
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: color.xanh, flex: 1 }}>
              Hôm nay
            </Text>
            <View style={{}}>
              <Text style={{ color: "gray" }}>{getDate}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 40 }}>12311234</Text>

            <Text style={{ marginLeft: 5, flex: 1 }}>vnđ</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("DoanhThuNgayChiTiet")}
            >
              <Text style={{ color: color.xanh }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ backgroundColor: "gray", height: 1, marginVertical: 10 }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: color.xanh, flex: 1 }}>
              Tháng này
            </Text>
            <Text style={{ color: "gray" }}>{getDate}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 40 }}>12311234</Text>
            <Text style={{ marginLeft: 5, flex: 1 }}>vnđ</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("DoanhThuThangChiTiet")}
            >
              <Text style={{ color: color.xanh }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/phieumuon.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ fontWeight: "bold", color: color.xanh }}>
            Báo cáo phiếu mượn hôm nay
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: color.xanh, flex: 1 }}>
              Tổng số
            </Text>
            <View style={{}}>
              <Text style={{ color: "gray" }}>{getDate}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 40 }}>20</Text>

            <Text style={{ marginLeft: 5, flex: 1 }}>phiếu mượn</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SachHomNayMuon")}
            >
              <Text style={{ color: color.xanh }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/phieumuon.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ fontWeight: "bold", color: color.xanh }}>
            Báo cáo phiếu mượn đến hạn trả
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: color.xanh, flex: 1 }}>
              Tổng số
            </Text>
            <View style={{}}>
              <Text style={{ color: "gray" }}>{getDate}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 40 }}>20</Text>

            <Text style={{ marginLeft: 5, flex: 1 }}>phiếu mượn</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SachHomNayTra")}
            >
              <Text style={{ color: color.xanh }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/phieumuon.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ fontWeight: "bold", color: color.xanh }}>
            Báo cáo phiếu mượn chưa đến hạn trả
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: color.xanh, flex: 1 }}>
              Tổng số
            </Text>
            <View style={{}}>
              <Text style={{ color: "gray" }}>{getDate}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 40 }}>20</Text>

            <Text style={{ marginLeft: 5, flex: 1 }}>phiếu mượn</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SachDangMuon")}
            >
              <Text style={{ color: color.xanh }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/phieumuon.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ fontWeight: "bold", color: color.xanh }}>
            Báo cáo phiếu mượn quá hạn trả
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: color.xanh, flex: 1 }}>
              Tổng số
            </Text>
            <View style={{}}>
              <Text style={{ color: "gray" }}>{getDate}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 40 }}>20</Text>

            <Text style={{ marginLeft: 5, flex: 1 }}>phiếu mượn</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SachQuaHan")}
            >
              <Text style={{ color: color.xanh }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default TrangChu;

const styles = StyleSheet.create({});
