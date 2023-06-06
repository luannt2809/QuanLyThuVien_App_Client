import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import color from "../color";
import ItemHoaDon from "../Bills/ItemHoaDon";
import { API_URL } from "../../API__/api";
import moment from "moment";

const SachHomNayTra = (props) => {
  const datecurrent = moment().format("YYYY/MM/DD");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [search,setSearch] = useState("");
  const getData = () => {
    if(search.length == 0){
      let uri = API_URL + "billsDatePay?datePay=" + datecurrent + "&status=0";
      fetch(uri)
        .then((res) => res.json())
        .then((res_json) => {
          setList(res_json.data);
          let tong = 0;
          res_json.data.forEach((item)=>{
              tong +=item.totalPrice;
          })
          setTotal(tong);
          setCount(res_json.data.length);
        });
    }
    else{
      let uri = API_URL + "billsDatePay?datePay=" + search + "&status=0";
    fetch(uri)
      .then((res) => res.json())
      .then((res_json) => {
        setList(res_json.data);
        let tong = 0;
        res_json.data.forEach((item)=>{
            tong +=item.totalPrice;
        })
        setTotal(tong);
        setCount(res_json.data.length);
      });
    }
    
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <View style={{ margin: 5 }}>
            <TextInput placeholder="Tìm kiếm(dd/mm/yyyy)" onChangeText={(Text)=>setSearch(Text)}/>
          </View>
          <View
            style={{ height: 1, backgroundColor: "gray", marginHorizontal: 5 }}
          ></View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              width: 100,
              backgroundColor: color.xanh,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 5,
            }}
            onPress={getData}
          >
            <Text style={{ color: "white" }}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20, padding: 10, flexDirection: "row" }}>
        <Text style={{ marginRight: 10 }}>Tổng tiền</Text>
        <Text>{total} vnđ</Text>
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row", marginBottom: 20 }}>
        <Text style={{ marginRight: 10 }}>Tổng số</Text>
        <Text>{count} phiếu mượn</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={list}
          renderItem={({ item }) => <ItemHoaDon DataItem={item} />}
        />
      </View>
    </View>
  );
};

export default SachHomNayTra;

const styles = StyleSheet.create({});
