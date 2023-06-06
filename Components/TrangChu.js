import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import color from "./color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../API__/api";
import moment from "moment";

const TrangChu = (props) => {
  const [obju, setobju] = useState({});
  const [data, setdata] = useState([]);
  const [totalMonth, setTotalMonth] = useState(0);
  const [phieuMuonDenHanTra,setPhieuMuonDenHanTra] = useState(0);
  const [phieuMuonChuaDenHanTra,setPhieuMuonChuaDenHanTra] = useState(0);
  const [phieuMuonQuaHanTra,setPhieuMuonQuaHanTra] = useState(0);
  const [refreshing, setRefreshing] = React.useState(false);
  const datecurrent = moment().format("YYYY/MM/DD");
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
    getData();
    DoanhThuThangNay();
    PhieuMuonDenNgayTra();
    PhieuMuonChuaDenHanTra();
    PhieuMuonQuaHanTra();
    getDataRent();
  }, []);

  const DoanhThuThangNay = () => {
    let uri = API_URL + "bills";
    fetch(uri)
      .then((res) => res.json())
      .then((res_json) => {
        let listBillsByMonth = res_json.data.filter(
          (item) =>
            item.dateRent.substring(0, 7) == datecurrent.substring(0, 7)
        );
        let tong = 0;
        listBillsByMonth.forEach((item)=>{
          tong += parseFloat(item.totalPrice);
        })
        setTotalMonth(tong);
      });
  };

  const PhieuMuonDenNgayTra = () =>{
    let uri = API_URL+"billsDatePay?datePay="+datecurrent+"&status=0";
    fetch(uri).then((res)=>res.json()).then((res_json)=>
    setPhieuMuonDenHanTra(res_json.data.length)
    )
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Login");

      if (value !== null) {
        setobju(JSON.parse(value));
        // console.log(obju._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PhieuMuonChuaDenHanTra = () =>{
    let uri = API_URL+"bills"
    let data1 = moment("2023/12/01");
    fetch(uri).then((res)=>res.json()).then((res_json)=>{
      let list = [];
      res_json.data.forEach((item)=>{
        if(datecurrent<item.datePay){
          list.push(item);
        }
      })
      setPhieuMuonChuaDenHanTra(list.length);
    })
  }

  const PhieuMuonQuaHanTra = () =>{
    let uri = API_URL+"statiscalByStatus?status=0"
    fetch(uri).then((res)=>res.json()).then((res_json)=>{
      let list = [];
      res_json.data.billStatus.forEach((item)=>{
        if(datecurrent>item.datePay){
          list.push(item);
        }
      })
      setPhieuMuonQuaHanTra(list.length);
    })
  }

  useEffect(() => {
    getData();
    DoanhThuThangNay();
    PhieuMuonDenNgayTra();
    PhieuMuonChuaDenHanTra();
    PhieuMuonQuaHanTra();
    getDataRent();
  }, []);

  const getDataRent = async () => {
    try {
      const response = await fetch(
        API_URL + "statiscalByDateRent?dateRent=" + datecurrent
      );
      const jsonSP = await response.json();
      setdata(jsonSP.data);
      console.log(jsonSP.data.countBillStatus);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  // React.useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     // do something
  //     getData();
  //     date();
  //     getDataRent();

  //   });

  //   return unsubscribe;
  // }, [props.navigation]);

  return (
    <ScrollView 
    
    style={{ flex: 1 }}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
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
          <Image
            source={{ uri: obju.avatar ? obju.avatar : null }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>

        <View>
          <Text style={{ fontSize: 20, color: "white" }}>Xin chào,</Text>
          <Text style={{ fontSize: 30, color: "white" }}>{obju.fullname}</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
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
                <Text style={{ color: "gray" }}>{datecurrent}</Text>
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
              <Text style={{ color: "gray" }}>{datecurrent}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{totalMonth}</Text>
              <Text style={{ marginLeft: 5, flex: 1 }}>vnđ</Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("DoanhThuThangChiTiet")
                }
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
                <Text style={{ color: "gray" }}>{datecurrent}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{data.countBillStatus}</Text>

              <Text style={{ marginLeft: 5, flex: 1 }}>phiếu mượn</Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("SachHomNayMuon", {
                    dateRent: datecurrent,
                  })
                }
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
                <Text style={{ color: "gray" }}>{datecurrent}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{phieuMuonDenHanTra}</Text>

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
                <Text style={{ color: "gray" }}>{datecurrent}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{phieuMuonChuaDenHanTra}</Text>

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
                <Text style={{ color: "gray" }}>{datecurrent}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 40 }}>{phieuMuonQuaHanTra}</Text>

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
    </ScrollView>
  );
};

export default TrangChu;

const styles = StyleSheet.create({});
