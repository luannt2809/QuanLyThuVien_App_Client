import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import BottomNavigation from './Components/BottomNavigation';
import DoanhThuNgayChiTiet from './Components/DoanhThuNgayChiTiet';
import color from './Components/color';
import ChiTietPhieuMuon from './Components/ChiTietPhieuMuon';
import SachDangMuon from './Components/SachDangMuon';
import SachQuaHan from './Components/SachQuaHan';
import SachHomNayTra from './Components/SachHomNayTra';
import SachHomNayMuon from './Components/SachHomNayMuon';
import ItemHoaDon from './Components/ItemHoaDon';
import DoanhThuThangChiTiet from './Components/DoanhThuThangChiTiet';
import Loaisach from './Components/Loaisach';
import TimkiemSach from './Components/TimkiemSach';

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
