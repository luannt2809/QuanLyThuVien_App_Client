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

const DoanhThuNgayChiTiet = (props) => {
  const [list,setList] = useState([]);
  const [countBills,setCountBills] = useState("");
  const [total,setTotal] = useState("");
  const [search,setSearch] = useState("");
  var datecurrent = moment().format('YYYY/MM/DD');
  const getDataByDate = () =>{
    let uri = API_URL+"statiscalByDateRent?dateRent="+datecurrent;
    if(search.length == 0){
      fetch(uri).then((res)=>res.json()).then((res_json)=>{
        setList([...res_json.data.billStatus]);
        setCountBills(res_json.data.countBillStatus);
        setTotal(res_json.data.totalBill);
      })
    }
    else{
      uri = API_URL+"statiscalByDateRent?dateRent="+search;
      fetch(uri).then((res)=>res.json()).then((res_json)=>{
        setList([...res_json.data.billStatus]);
        setCountBills(res_json.data.countBillStatus);
        setTotal(res_json.data.totalBill);
        console.log("long");
      })
    }
  }
  const getData = () =>{
    let uri = API_URL+"statiscalByDateRent?dateRent="+datecurrent;
    fetch(uri).then((res)=>res.json()).then((res_json)=>{
      setList([...res_json.data.billStatus]);
      setCountBills(res_json.data.countBillStatus);
      setTotal(res_json.data.totalBill);
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <View style={{padding:10,flex:1}}>
      <View style={{ flexDirection: "row"}}>
        <View style={{flex:1,marginRight:5}}>
          <View style={{ margin: 5 }}>
            <TextInput placeholder="Tìm kiếm(dd/mm/yyyy)" onChangeText={(Text)=>setSearch(Text)}/>
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
            onPress={getDataByDate}
          >
            <Text style={{color:'white'}}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{marginTop:20,padding:10,flexDirection:'row'}} >
        <Text style={{marginRight:10}}>Tổng tiền</Text>
        <Text  >{total} vnđ</Text>
      </View>
      <View style={{marginLeft:10,flexDirection:'row',marginBottom:20}} >
        <Text style={{marginRight:10}}>Tổng số</Text>
        <Text  >{countBills} phiếu mượn</Text>
      </View>
      <View style={{flex:1}}>
        <FlatList
        data={list}
        renderItem={({item})=>
        <ItemHoaDon DataItem={item}/>
      }
        />
      </View>
      
    </View>
  );
};

export default DoanhThuNgayChiTiet;

const styles = StyleSheet.create({});
