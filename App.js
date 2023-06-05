import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import BottomNavigation from './Components/Navigation/BottomNavigation';
import color from './Components/color';
import ChiTietPhieuMuon from './Components/Bills/ChiTietPhieuMuon';
import ItemHoaDon from './Components/Bills/ItemHoaDon';
import Loaisach from './Components/Categorys/Loaisach';
import TimkiemSach from './Components/Books/TimkiemSach';
import ChiTietSach from './Components/Books/ChiTietSach';

import ThemSachMuon from './Components/Bills/ThemSachMuon';
import Profile from './Components/Profile/Profile';
import ChangePassword from './Components/Profile/ChangePassword';
import SachTheoTheLoai from './Components/Books/SachTheoTheLoai';
import DoanhThuNgayChiTiet from './Components/Statistical/DoanhThuNgayChiTiet';
import SachDangMuon from './Components/Statistical/SachDangMuon';
import SachQuaHan from './Components/Statistical/SachQuaHan';
import SachHomNayTra from './Components/Statistical/SachHomNayTra';
import SachHomNayMuon from './Components/Statistical/SachHomNayMuon';
import DoanhThuThangChiTiet from './Components/Statistical/DoanhThuThangChiTiet';
import UpdateBills from './Components/Bills/UpdateBills';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:color.xanh

          },
          headerTitleStyle:{
            color:'white'
          },
          headerTintColor:'white'
        }}
      >
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Bottom" component={BottomNavigation} options={{headerShown:false}}/>  
        <Stack.Screen name='DoanhThuNgayChiTiet' component={DoanhThuNgayChiTiet} options={{title:"Doanh thu theo ngày"}}/>
        <Stack.Screen name='ChiTietPhieuMuon' component={ChiTietPhieuMuon} options={{title:"Chi tiết phiếu mượn"}}/>
        <Stack.Screen name='SachDangMuon' component={SachDangMuon} options={{title:"Phiếu mượn chưa đến hạn trả"}}/>
        <Stack.Screen name='SachQuaHan' component={SachQuaHan} options={{title:"Phiếu mượn quá hạn trả"}}/>
        <Stack.Screen name='SachHomNayTra' component={SachHomNayTra} options={{title:"Phiếu mượn hôm nay trả"}}/>
        <Stack.Screen name='SachHomNayMuon' component={SachHomNayMuon} options={{title:"Phiếu mượn hôm nay"}}/>
        <Stack.Screen name='ItemHoaDon' component={ItemHoaDon}/>
        <Stack.Screen name='DoanhThuThangChiTiet' component={DoanhThuThangChiTiet} options={{title:'Doanh thu theo tháng'}}/>
        <Stack.Screen name='Loaisach' component={Loaisach} options={{ title: 'Loại Sách' }} />
        <Stack.Screen name='TkSach' component={TimkiemSach} options={{ title: 'Tim Kiếm' }} />
        <Stack.Screen name='ChiTietSach' component={ChiTietSach} options={{ title: 'Chi Tiết Sách' }} />
        <Stack.Screen name='SachTheLoai' component={SachTheoTheLoai} options={{ title: 'Sách Theo Thể Loại' }} />
        <Stack.Screen name='ThemSachMuon' component={ThemSachMuon} options={{title:'Thêm sách mượn'}}/>
        <Stack.Screen name='Profile' component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name='Changepasswd' component={ChangePassword} options={{ title: 'Đổi mật khẩu' }} />
        <Stack.Screen name='UpdateBills' component={UpdateBills} options={{title:"Cập nhật phiếu mượn"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
