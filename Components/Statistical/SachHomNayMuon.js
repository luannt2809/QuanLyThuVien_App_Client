import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import color from "../color";
import ItemHoaDon from "../Bills/ItemHoaDon";
import { API_URL } from "../../API__/api";

const SachHomNayMuon = (props) => {
  const list = [1,2,3,4,5]
  const [countbillDay, setcountbillday] = useState()
  const [DateCurrent, setDateCurrent] = useState(null)
  const [listBillRent, setlistBillRent] = useState([])
  const [data, setdata] = useState([])

  const date = () => {
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
      const response = await fetch(API_URL + "statiscalByDateRent?dateRent=" + DateCurrent);
      const jsonSP = await response.json();
      setcountbillday(jsonSP.data.countBillStatus);
      setlistBillRent(jsonSP.data.billStatus);
      setdata(jsonSP.data);
      //sconsole.log(listBillRent);
     // console.log(jsonSP.data.countBillStatus);
    } catch (error) {
      console.log(error);
    }
  }


  React.useEffect(()=>{
    date();
    getDataRent();
  })

  return (
    <View style={{padding:10,flex:1}}>
      <View style={{ flexDirection: "row"}}>
        <View style={{flex:1,marginRight:5}}>
          <View style={{ margin: 5 }}>
            <TextInput placeholder="Tìm kiếm(yyyy/mm/dd)" />
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
          >
            <Text style={{color:'white'}}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{marginTop:20,padding:10,flexDirection:'row'}} >
        <Text style={{marginRight:10}}>Tổng tiền</Text>
        <Text style={{color:'red'}} >{data.totalBill} vnđ</Text>
      </View>
      <View style={{marginLeft:10,flexDirection:'row',marginBottom:20}} >
      <Text style={{marginRight:10}}>Tổng số</Text>
      <Text  >{countbillDay}</Text>
    </View>
      <View style={{flex:1}}>
        <FlatList
        data={listBillRent}
        renderItem={({item})=>
          <ItemHoaDon DataItem={item} />
      }
        />
      </View>
      
    </View>
  );
};

export default SachHomNayMuon;

const styles = StyleSheet.create({});