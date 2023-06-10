import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import color from "../color";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import ItemSachPhieuMuon from "./ItemSachPhieuMuon";
import { Appearance } from "react-native";
import listBookByOrder from "../ListBookByOrder/listBookByOrder";
import { API_URL } from "../../API__/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DonMuon = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePay, setDatePay] = useState(null);
  const [dateRent, setDateRent] = useState(null);
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [anhMatTruoc, setAnhMatTruoc] = useState(null);
  const [anhMatSau, setAnhMatSau] = useState(null);
  const [listBookMuon, setListBookMuon] = useState([]);
  const [total, setTotal] = useState(0);
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const [obju,setobju] = useState("");
  const [modalVisible, setModalVisible] = useState(false);




  const AddBill = async () => {
    
    if (listBookMuon.length == 0) {
      Alert.alert("Thông báo","Bạn chưa chọn sách mượn");
      return;
    }
    if(fullname.length == 0){
      Alert.alert("Thông báo","Họ tên không được bỏ trống");
      return;
    }
    if(phone.length == 0){
      Alert.alert("Thông báo","Số điện không được bỏ trống");
      return;
    }
    
    if(anhMatTruoc == null){
      Alert.alert("Thông báo","Bạn chưa chọn ảnh mặt trước công dân");
      return;
    }
    if(anhMatSau == null){
      Alert.alert("Thông báo","Bạn chưa chọn ảnh mặt sau công dân");
      return;
    }
    if(datePay == null){
      Alert.alert("Thông báo","Bạn chưa chọn ngày trả sách");
      return;
    }



    const upateList = listBookMuon.map(
      ({ image, nameBook, priceRent, ...res }) => res
    );
    
    const objBill = {
      "bookId": upateList,
      "accountId": obju._id,
      "imageCCCD":[anhMatTruoc,anhMatSau],
      "datePay": datePay,
      "dateRent": dateRent,
      "fullname": fullname,
      "phone": phone,
      "status": 0,
      "totalPrice": total,
    };
    let uri_add_bill = API_URL + "bill";
    fetch(uri_add_bill, {
      method: "POST", // POST: Thêm mới, PUT: Sửa, DELETE: xóa, GET: lấy thông tin
      headers: {
        // Định dạng dữ liệu gửi đi
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objBill), // chuyển đối tượng SP thành chuỗi JSON
    })
      .then((response) => {
        
        
          setModalVisible(true);
          setAnhMatSau(null);
          setAnhMatTruoc(null);
          setFullName("");

          setPhone("");
          setDatePay(null);
          listBookByOrder.splice(0,listBookByOrder.length);
          onRefresh();
        
      })
      .catch((err) => {
        // catch để bắt lỗi ngoại lệ
        console.log(err.message);
      });
  };

  const pickImageSau = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      
    });
    if (!result.canceled) {
      let _uri = result.assets[0].uri;
      let file_ext = _uri.substring(_uri.lastIndexOf(".") + 1);
      FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      }).then((res) => {
        setAnhMatSau("data:image:/" + file_ext + ";base64," + res);
      });
    }
  };


  const pickImageTruoc = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
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
  const getTotal = () => {
    var tong = 0;
    for (var i = 0; i < listBookByOrder.length; i++) {
      tong +=
        parseFloat(listBookByOrder[i].priceRent) *
        parseInt(listBookByOrder[i].quantity);
    }
    setTotal(tong);
    console.log(tong);
  };
  const onRefresh = React.useCallback(() => {
    getTotal();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setListBookMuon([...listBookByOrder]);
  }, []);
  const getDataUser = async ()=>{
    let value = await AsyncStorage.getItem("Login")
    if (value !== null) {
      setobju(JSON.parse(value));
      return
    }
  }
  useEffect(() => {
    getDataUser();
    getTotal();
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
  }, []);
  const isDarkModeEnabled = () => {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme === "dark";
  };
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} />}
      nestedScrollEnabled={true}
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
            source={require("../../Image/book.png")}
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
              tintColor: color.xanh,
              marginTop: 3,
            }}
          />
          <Text style={{ color: color.xanh, fontWeight: "bold", flex: 1 }}>
            Sách mượn
          </Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ThemSachMuon", { GetData: onRefresh })
            }
          >
            <Text>Thêm sách mượn</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={listBookByOrder}
            renderItem={({ item }) => (
              <ItemSachPhieuMuon DataItem={item} GetData={onRefresh} />
            )}
            scrollEnabled={false}
          />
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
            source={require("../../Image/dolar.png")}
            style={{ width: 15, height: 15, marginRight: 10, marginTop: 3 }}
          />
          <Text style={{ color: color.xanh, fontWeight: "bold", flex: 1 }}>
            Tổng tiền
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.xanhNhat,
            margin: 10,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: color.xanh, fontWeight: "bold" }}>
            {total}
          </Text>
          <Text>vnđ</Text>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: 350,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../Image/user.png")}
              style={{ width: 15, height: 15, marginRight: 10,marginLeft: '5%' }}
            />
            <Text style={{ color: color.xanh, fontWeight: "bold" }}>
              Thông tin người mượn
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
            borderRadius: 5,
            width: 320,
          }}
        >
          <TextInput
          value={fullname}
            placeholder="Nhập họ tên"
            onChangeText={(Text) => setFullName(Text)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginTop: 10,
            padding: 5,
            borderRadius: 5,
            width: 320,
          }}
        >
          <TextInput
            value={phone}
            placeholder="Nhập số điện thoại"
            onChangeText={(Text) => setPhone(Text)}
          />
        </View>
        {anhMatTruoc ? (
          <TouchableOpacity onPress={pickImageTruoc}>
            <Image
              onPress={() => console.log("Long")}
              source={{ uri: anhMatTruoc }}
              style={{
                width: 321.06,
                height: 204.52,
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
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={pickImageTruoc}
          >
            <Image
              source={require("../../Image/add.png")}
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
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={pickImageSau}
          >
            <Image
              source={require("../../Image/add.png")}
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
            source={require("../../Image/bill.png")}
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
        style={{
          marginBottom: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.xanh,
          padding: 10,
          borderRadius: 5,
        }}
        onPress={AddBill}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Đặt hàng</Text>
      </TouchableOpacity>
      
      <View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          textColor={isDarkModeEnabled() ? "white" : "black"}
          backgroundColor={isDarkModeEnabled() ? "black" : "white"}
          datePickerContainerStyleIOS={{
            backgroundColor: isDarkModeEnabled() ? "black" : "white",
          }}
        />
      </View>
      
      <Modal
      visible={modalVisible}
      animationType="none"
      transparent={true}
      onRequestClose={()=>{
        setModalVisible(false);
      }}
      >
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'gray',opacity:0.9}}>
          <View style={{backgroundColor:color.xanh,width:300,padding:30,justifyContent:'center',alignItems:'center',borderRadius:20,zIndex:1}}>
            <Image
            source={require('../../Image/check.png')}
            style={{width:100,height:100}}
            />
            
            <View style={{margin:10}}>
              <Text style={{fontSize:22,color:'white'}}>Đặt thành công</Text>
            </View>
            
            <TouchableOpacity 
            style={{backgroundColor:'red',borderRadius:10,marginTop:20,padding:10,justifyContent:'center',alignItems:'center',width:250}}
            onPress={()=>setModalVisible(false)}
            >
              <Text style={{color:'white',fontWeight:'bold'}}>
                Đóng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default DonMuon;

const styles = StyleSheet.create({});
