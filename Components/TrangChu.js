import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import color from "./color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../API__/api";

const TrangChu = (props) => {

  const [profile, setprofile] = useState(null)
  const [obju, setobju] = useState({})
  const [DateCurrent, setDateCurrent] = useState(null)
  const [data, setdata] = useState([])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Login")

      if (value !== null) {
        setobju(JSON.parse(value));
       // console.log(obju._id);
      }
    } catch (error) {

      console.log(error);
    }
  }

  



  const date=()=>{
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    //const getDate = year + "/" + month + "/" + day;

    if (day > 9) {
      if (month > 9) {
        setDateCurrent(`${year}/${month}/${day}`);
      } else {
        setDateCurrent(`${year}/0${month}/${day}`);
      }
    } else {
      if (month > 9) {
        setDateCurrent(`${year}/${month}/0${day}`);
      } else {
        setDateCurrent(`${year}/0${month}/0${day}`);
      }
    }
  }



  const getDataRent = async () => {
    try {
      const response = await fetch(API_URL + "statiscalByDateRent?dateRent=" +DateCurrent);
      const jsonSP= await response.json();
      setdata(jsonSP.data);
      console.log(jsonSP.data.countBillStatus);
    } catch (error) {
       console.log(error);
    }
  }

  React.useEffect(()=>{
    //console.log(year);
    getData();
    getDataRent();
    date();
  
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
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Image source={{ uri: obju.avatar ? obju.avatar : null }}
            style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }}
          />
        </TouchableOpacity>
      
        <View>
          <Text style={{ fontSize: 20, color: "white" }}>Xin chào,</Text>
          <Text style={{ fontSize: 30, color: "white" }}>{obju.fullname}</Text>
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
              <Text style={{ color: "gray" }}>{DateCurrent}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{data.totalBill}</Text>

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
            <Text style={{ color: "gray" }}>{DateCurrent}</Text>
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
              <Text style={{ color: "gray" }}>{DateCurrent}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{data.countBillStatus}</Text>

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
              <Text style={{ color: "gray" }}>{DateCurrent}</Text>
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
              <Text style={{ color: "gray" }}>{DateCurrent}</Text>
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
              <Text style={{ color: "gray" }}>{DateCurrent}</Text>
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
