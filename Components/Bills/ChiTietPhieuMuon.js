import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import color from "../color";
import ItemSachMuon from "./ItemSachMuon";
import { API_URL } from "../../API__/api";

const ChiTietPhieuMuon = ({route}) => {
  const [objBill,setobjBill] = useState({});
  const {idBills} = route.params
  const getData = ()=>{
    let uri = API_URL+"bill/"+idBills;
    fetch(uri).then((res)=>res.json()).then((res_json)=>{
       setobjBill(res_json.data); 
  })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <View style={{ padding: 10,flex:1}}>
      <View
        style={{ backgroundColor: "#eeeeee", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "gray" }}>Người mượn:</Text>
        <Text style={{ fontSize: 30 }}>{objBill.fullname}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <Text>Ngày mượn: {objBill.dateRent}</Text>
          <Text>Ngày trả: {objBill.datePay}</Text>
        </View>
        <View>
          <Text style={{ color: color.xanh }}>Trạng thái</Text>
          {
            objBill.status == 0 ?(
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{ color: "red" }}>Đang mượn</Text>
                </View>
            ):
            (
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:color.xanh}}>Đã trả</Text>
                </View>
              
            )
          }
         
        </View>
      </View>
      <View
        style={{ backgroundColor: "gray", height: 1, marginTop: 10 }}
      ></View>
      <View style={{ marginTop: 30 }}>
        <Text>Danh sách sách</Text>
      </View>
      <View style={{flex:1}}>
        <FlatList data={objBill.bookId} renderItem={({ item }) => <ItemSachMuon DataItem = {item}/>} />
      </View>
      <View style={{height:70,padding:10,flexDirection:'row',backgroundColor:color.xanhNhat,borderRadius:10,margin:10}}>
        <Text style={{flex:1,color:color.xanh,fontWeight:'bold'}}>Tổng tiền</Text>
        <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:color.xanh}}>{objBill.totalPrice} vnđ</Text>

        </View>
      </View>
    </View>
  );
};

export default ChiTietPhieuMuon;

const styles = StyleSheet.create({});
