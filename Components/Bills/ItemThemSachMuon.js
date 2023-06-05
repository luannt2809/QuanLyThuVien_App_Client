import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../color'
import listBookByOrder from '../ListBookByOrder/listBookByOrder'

const ItemThemSachMuon = (props) => {
  const {name,image,priceRent,quantity,_id} = props.DataItem
  const [soLuong, setSoLuong] = useState(1);
  const AddBookMuon = ()=>{

    
    for(var i=0;i<listBookByOrder.length;i++){
      if(name == listBookByOrder[i].nameBook){
        var index = listBookByOrder.findIndex(item=>item.idBook == _id);
        const newList = [...listBookByOrder];
        const objUpdate = newList[index];
        var totalQuantity = parseInt(objUpdate.quantity)+parseInt(soLuong);
        listBookByOrder.splice(index,1);
        const objBook = {
          idBook:_id,
          image:image,
          nameBook:name,
          priceRent:priceRent,
          quantity:totalQuantity
        }
        listBookByOrder.push(objBook);
        props.GetData();
        Alert.alert("Thông báo","Thêm thành công");
        return;
      }
    }
      const objBook = {
        idBook:_id,
        image:image,
        nameBook:name,
        priceRent:priceRent,
        quantity:soLuong
      }
      listBookByOrder.push(objBook);
      props.GetData();
      alert("Thêm thành công")
  }
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
    <View style={{margin:10,padding:15,backgroundColor:color.xanhNhat,flexDirection:'row'}}>
      <View>
        
      <Image
        source={{uri:image}}
        style={{height:70,width:50,borderRadius:5}}
        />
      </View>
      <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
        <Text style={{fontSize:18}}>
        {name}
        </Text>
        <Text style={{color:'gray'}}>Giá mượn: {priceRent} vnđ</Text>
        <Text style={{color:'gray',marginTop:10}}>Số lượng: {quantity}</Text>
      </View>
      <View style={{justifyContent:'center'}}>
        <TouchableOpacity style={{backgroundColor:color.xanh,padding:10,borderRadius:10}}
        onPress={AddBookMuon}
        >
        <Text style={{color:'white'}}>Mượn</Text>
        </TouchableOpacity>

        <View style={{ flex: 0.5 }}>
          <Text>Số lượng</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            
              <TouchableOpacity
              onPress={GiamSoLuong}
              >
                <Image
                  source={require("../../Image/minus.png")}
                  style={{ width: 13, height: 13,marginTop:2 }}
                />
              </TouchableOpacity>

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
                source={require("../../Image/addsach.png")}
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
  )
}

export default ItemThemSachMuon

const styles = StyleSheet.create({})