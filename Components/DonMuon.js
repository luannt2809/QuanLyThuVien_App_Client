import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import color from "./color";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import ItemSachPhieuMuon from "./ItemSachPhieuMuon";
const DonMuon = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePay, setDatePay] = useState(null);
  const [dateRent, setDateRent] = useState(null);
  const [fullname, setFullName] = useState("");
  const [anhMatTruoc, setAnhMatTruoc] = useState(null);
  const [anhMatSau, setAnhMatSau] = useState(null);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const pickImageSau = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      let _uri = result.assets[0].uri;
      let file_ext = _uri.substring(_uri.lastIndexOf(".") + 1);
      FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      }).then((res) => {
        setAnhMatSau("data:image:/" + file_ext + ";base64," + res);
        // console.log(anhMatSau);
      });
    }
  };
  const pickImageTruoc = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      let _uri = result.assets[0].uri;
      let file_ext = _uri.substring(_uri.lastIndexOf(".") + 1);
      FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      }).then((res) => {
        setAnhMatTruoc("data:image/" + file_ext + ";base64," + res);
        // console.log(anhMatTruoc);
      });
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const month = date.getMonth() + 1; // Thêm 1 vào giá trị tháng để hiển thị từ 1 đến 12
    const day = date.getDate();
    const year = date.getFullYear();
    if (day > 9) {
      if (month > 9) {
        setDatePay(`${year}/${month}/${day}`);
        hideDatePicker();
      } else {
        setDatePay(`${year}/0${month}/${day}`);
        hideDatePicker();
      }
    } else {
      if (month > 9) {
        setDatePay(`${year}/${month}/0${day}`);
        hideDatePicker();
      } else {
        setDatePay(`${year}/0${month}/0${day}`);
        hideDatePicker();
      }
    }
  };

  useEffect(() => {
    if (day > 9) {
      if (month > 9) {
        setDateRent(`${year}/${month}/${day}`);
        return;
      } else {
        setDateRent(`${year}/0${month}/${day}`);
        return;
      }
    } else {
      if (month > 9) {
        setDateRent(`${year}/${month}/0${day}`);
        return;
      } else {
        setDateRent(`${year}/0${month}/0${day}`);
        return;
      }
    }
  });
  return (
    <ScrollView
      style={{ padding: 10, flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        style={{
          margin: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/book.png")}
            style={{ width: 15, height: 15, marginRight: 10,tintColor:color.xanh,marginTop:3}}
          />
          <Text style={{ color: color.xanh, fontWeight: "bold",flex:1}}>
            Sách mượn
          </Text>
          <TouchableOpacity>
            <Text>Thêm sách mượn</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ItemSachPhieuMuon/>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/dolar.png")}
            style={{ width: 15, height: 15, marginRight: 10,marginTop:3}}
          />
          <Text style={{ color: color.xanh, fontWeight: "bold",flex:1}}>
            Tổng tiền
          </Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:color.xanhNhat,margin:10,padding:5,borderRadius:10}}>
        <Text style={{fontSize:20,color:color.xanh,fontWeight:'bold'}}>1231312</Text>
        <Text>
          vnđ
        </Text>
        </View>
        

      </View>
      <View
        style={{
          margin: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/user.png")}
            style={{ width: 15, height: 15, marginRight: 10 }}
          />
          <Text style={{ color: color.xanh, fontWeight: "bold" }}>
            Thông tin người mượn
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginLeft: 25,
            marginTop: 10,
            padding: 5,
            borderRadius: 5,
            marginRight: 5,
          }}
        >
          <TextInput placeholder="Nhập họ tên" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginLeft: 25,
            marginTop: 10,
            padding: 5,
            borderRadius: 5,
            marginRight: 5,
          }}
        >
          <TextInput placeholder="Nhập số điện thoại" />
        </View>
        {anhMatTruoc ? (
          <TouchableOpacity onPress={pickImageTruoc}>
            <Image
              onPress={() => console.log("Long")}
              source={{ uri: anhMatTruoc }}
              style={{
                width: 321.06,
                height: 204.52,
                marginLeft: 25,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 321.06,
              height: 204.52,
              borderWidth: 1,
              borderColor: "gray",
              marginLeft: 25,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={pickImageTruoc}
          >
            <Image
              source={require("../Image/add.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: color.xanh, marginTop: 10 }}>
              Ảnh mặt trước công dân
            </Text>
          </TouchableOpacity>
        )}

        {anhMatSau ? (
          <TouchableOpacity onPress={pickImageSau}>
            <Image
              source={{ uri: anhMatSau }}
              style={{
                width: 321.06,
                height: 204.52,
                marginLeft: 25,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 321.06,
              height: 204.52,
              borderWidth: 1,
              borderColor: "gray",
              marginLeft: 25,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={pickImageSau}
          >
            <Image
              source={require("../Image/add.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: color.xanh, marginTop: 10 }}>
              Ảnh mặt sau công dân
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          margin: 10,
          backgroundColor: "white",
          padding: 10,
          marginBottom: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../Image/bill.png")}
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
              tintColor: color.xanh,
            }}
          />
          <Text style={{ color: color.xanh, fontWeight: "bold" }}>
            Thông tin phiếu mượn
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Ngày mượn: {dateRent}</Text>
        </View>
        {datePay ? (
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text style={{ flex: 1 }}>Ngày trả: {datePay}</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={{ marginLeft: 10, color: color.xanh }}>
                Chọn lại
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text>Ngày trả: </Text>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={{ marginLeft: 10, color: color.xanh }}>
                Chọn ngày
              </Text>
            </TouchableOpacity>
          </View>
        )}
       
      </View>
      <TouchableOpacity
        style={{marginBottom:30,justifyContent:'center',alignItems:'center',backgroundColor:color.xanh,padding:10,borderRadius:5}}
      >
          <Text style={{fontSize:18,color:'white'}}>Đặt hàng</Text>
        </TouchableOpacity>
      <View>
      
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </ScrollView>
  );
};

export default DonMuon;

const styles = StyleSheet.create({});
