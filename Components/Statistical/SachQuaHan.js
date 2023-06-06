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

const SachQuaHan = (props) => {
  var datecurrent = moment().format("YYYY/MM/DD");

  const [list,setList] = useState([]);
  const [total,setTotal] = useState(0);
  const [count,setCount] = useState(0);
  const getData = () =>{
    let uri = API_URL+"statiscalByStatus?status=0"
    fetch(uri).then((res)=>res.json()).then((res_json)=>{
      let list = [];
      res_json.data.billStatus.forEach((item)=>{
        if(datecurrent>item.datePay){
          list.push(item);
        }
      })
      setList([...list]);
      setCount(list.length);
      
      var tong = 0;
      list.forEach((item)=>{
        tong +=item.totalPrice;
      })
      setTotal(tong);
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <View style={{padding:10,flex:1}}>
      <View style={{marginTop:20,padding:10,flexDirection:'row'}} >
        <Text style={{marginRight:10}}>Tổng tiền</Text>
        <Text  >{total} vnđ</Text>
      </View>
      <View style={{marginLeft:10,flexDirection:'row',marginBottom:20}} >
      <Text style={{marginRight:10}}>Tổng số</Text>
      <Text  >{count} phiếu mượn</Text>
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

export default SachQuaHan;

const styles = StyleSheet.create({});