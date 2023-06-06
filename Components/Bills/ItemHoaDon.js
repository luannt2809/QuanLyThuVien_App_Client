import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import color from "../color";
import { useNavigation } from "@react-navigation/core";
import { RadioButton } from "react-native-paper";
import { API_URL } from "../../API__/api";

const ItemHoaDon = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState("0");
  const handleRadioChange = (value) => {
    setChecked(value);
  };
  const updateBill = () =>{
    let uri = API_URL+"bill/"+_id
    let objBill = {
      status:1
    }
    fetch((uri),{
      method:"put",
      headers: { // Định dạng dữ liệu gửi đi
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( objBill  ) // chuyển đối tượng SP thành chuỗi JSON
    }).then((res)=>{
      Alert.alert("Thông báo","Cập nhật thành công");
      setModalVisible(false);
    })
  }
  const {
    _id,
    bookId,
    imgCCCD,
    dateRent,
    datePay,
    totalPrice,
    phone,
    fullname,
    status,
  } = props.DataItem;
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "white", borderRadius: 10, marginVertical: 10 }}
    >
      <View
        style={{
          backgroundColor: color.xanh,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>{fullname}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 10, flex: 1 }}>
          <Text style={{ color: color.xanh }}>Ngày mượn: {dateRent}</Text>
          <Text style={{ color: "red", marginTop: 5 }}>
            Ngày trả: {datePay}
          </Text>
        </View>
        <View style={{ marginRight: 10, marginTop: 10 }}>
          <Text>Trạng thái</Text>
          {status == 0 ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "red", flex: 1 }}>Chưa Trả</Text>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5,
                }}
                onPress={() => setModalVisible(true)}
              >
                <Image
                  source={require("../../Image/edit.png")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "blue" }}>Đã Trả</Text>
            </View>
          )}

          {/* <Text style={{color:'red'}}>{}</Text> */}
        </View>
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text>Số lượng mượn: {bookId.length}</Text>
      </View>
      <View style={{ backgroundColor: "gray", height: 1, margin: 10 }}></View>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image
            source={require("../../Image/tong_tien.png")}
            style={{ width: 30, height: 30 }}
          />
          <View>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
                fontSize: 18,
                color: "red",
              }}
            >
              {totalPrice} VNĐ
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChiTietPhieuMuon", { idBills: _id })
          }
        >
          <Text style={{ color: color.xanh }}>Chi tiết</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="none"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            opacity: 0.9,
            backgroundColor: "gray",
          }}
        >
          <View
            style={{ width: 300, backgroundColor: "white", borderRadius: 20 }}
          >
            <View
              style={{
                height: 50,
                backgroundColor: color.xanh,
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                Cập nhật trạng thái
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Text>Trạng thái</Text>
            </View>
            <View>
              <RadioButton.Group
                onValueChange={handleRadioChange}
                value={checked}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton value="0" />
                    <Text style={{ color: "red" }}>Chưa trả</Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton value="1" />
                    <Text>Đã trả</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View style={{ flexDirection: "row",padding:10}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 30,
                  backgroundColor: color.xanhNhat,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
                onPress={()=>setModalVisible(false)}
              >
                <Text>Đóng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 30,
                  backgroundColor: color.xanh,
                  justifyContent: "center",
                  marginLeft:10,
                  alignItems: "center",
                  borderRadius: 20,
                }}
                onPress={updateBill}
              >
                <Text>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ItemHoaDon;

const styles = StyleSheet.create({});
