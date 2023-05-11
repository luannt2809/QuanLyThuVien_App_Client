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
        <Stack.Screen name='ChiTietPhieuMuon' component={ChiTietPhieuMuon}/>
        <Stack.Screen name='SachDangMuon' component={SachDangMuon}/>
        <Stack.Screen name='SachQuaHan' component={SachQuaHan}/>
        <Stack.Screen name='SachHomNayTra' component={SachHomNayTra}/>
        <Stack.Screen name='SachHomNayMuon' component={SachHomNayMuon}/>
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
