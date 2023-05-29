import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from "../color";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../API__/api';

const Profile = (props) => {

    const [obju, setobju] = useState({})

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("Login")

            if (value !== null) {
                setobju(JSON.parse(value));
                //console.log(obju._id);
            }
        } catch (error) {

            console.log(error);
        }
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <View>
            <View style={{ backgroundColor: color.xanhNhat, height: '42%', width: '100%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, elevation: 10 }}>
                <Image source={{ uri: obju.avatar ? obju.avatar : null }}
                 
                    style={{ width: 80, height: 80, borderRadius: 100, marginRight: 15, alignSelf: 'center', marginTop: '5%' }}
                />
                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{obju.fullname}</Text>
                <Text style={{ textAlign: 'center', fontStyle: 'normal', fontSize: 15 }}>{obju.email}</Text>
            </View>

            <View style={{
                backgroundColor: 'white',
                width: '87%',
                height: '52%',
                elevation: 10,
                alignContent: 'center',
                alignSelf: 'center',
                marginTop: "-13%",
                borderRadius: 20,
                shadowRadius: 'white'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', marginStart: "5%", marginTop: 30, color: color.xanh, fontWeight: '800' }}>Username:</Text>
                    <Text style={{ textAlign: 'center', marginEnd: '5%', marginTop: 30 }}>{obju.username}</Text>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', margin: '5%' }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', marginStart: "5%", marginTop: 30, color: color.xanh, fontWeight: '800' }}>Password:</Text>
                    <Text style={{ textAlign: 'center', marginEnd: '5%', marginTop: 30, color:'red' }}>Change</Text>
                </View>

                <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', margin: '5%' }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', marginStart: "5%", marginTop: 30, color: color.xanh, fontWeight: '800' }}>Phân Quyền:</Text>
                    <Text style={{ textAlign: 'center', marginEnd: '5%', marginTop: 30 }}>Thủ thư</Text>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', margin: '5%' }} />
                <Text style={{color:color.xanh, fontWeight:'bold', textAlign:'center', fontSize:19}}>Group 9</Text>
            </View>
            <TouchableOpacity style={{alignSelf:'center', backgroundColor:color.xanh, margin:20, width:150,alignItems:'center',padding:10, borderRadius:20 }}
                onPress={() => { props.navigation.navigate('Changepasswd')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Đổi Mật Khẩu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})