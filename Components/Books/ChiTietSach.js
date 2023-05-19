import { FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import API, { API_URL } from '../../API__/api'


const ChiTietSach = ({route, navigation}) => {

    var url_chitiet = API_URL +'book/'+ route.params.id;
    

    const [ListchitietSach, setListchitietSach] = useState(null)
    const [Listbook, setListbook] = useState([])
    const [reloading, setreloading] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    const renderBook = ({ item }) => {
        return (

            <View style={styles.itembook}>
                <TouchableOpacity onPress={() => navigation.navigate("ChiTietSach", {id:item._id})}>
                    <Image source={{ uri: item.image ? item.image : null }} style={styles.imageSP2} />

                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontWeight: '300', color: '#333333' }}>{item.author}</Text>
                <Text style={{ fontWeight: '600', color: 'red' }}>$ {item.priceRent}</Text>
            </View>
        )
    }

    const getData = async () => {

        try {
            const response = await fetch(url_chitiet); //lấy dữ liệu về 
            const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
            console.log(jsonSP);
            setListchitietSach(jsonSP.data);

        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    const getDataBook = async () => {

        try {
            const response = await fetch(API_URL+'books'); //lấy dữ liệu về 
            const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
           // console.log(jsonSP);
            setListbook(jsonSP.data);

        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    const realoadData = React.useCallback(() => {
        setreloading(true); ///set trang thai 
        getData();
        getDataBook();
        //moo phong doi reload, neesu laf reload tu sever that thi khong can );
        setTimeout(() => {
            setreloading(false);
        }, 2000);
    })

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            getData();
            getDataBook();

        });

        return unsubscribe;
    }, [navigation.navigation]);
   
    
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                backgroundColor: 'white', position: 'absolute', top: 0,
                left: 0,
                right: 0,
                padding: 10,
                height: '60%'
            }}>
                <ScrollView style={{  }} >


                <View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            {ListchitietSach && <Image source={{ uri: ListchitietSach.image ? ListchitietSach.image : null }} style={{ width: 130, height: 180, borderRadius: 10, marginEnd: 10 }} />}  

                            <View style={{ width: '70%' }}>
                                {ListchitietSach && <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{ListchitietSach.name}</Text>} 
                                {ListchitietSach && <Text style={{ fontSize: 20 }}>Nxb: {ListchitietSach.nxb}</Text> } 
                                {ListchitietSach && <Text style={{ fontSize: 20 }}>Tác giả: {ListchitietSach.author}</Text> }
                                {ListchitietSach && <Text style={{ fontSize: 18 }}>Loại sách: {ListchitietSach.cateId.name} </Text>} 

                                {ListchitietSach && <Text style={{ fontSize: 18, color: 'red', fontStyle: 'italic' }}>Giá Bán: {ListchitietSach.priceBook} VNĐ</Text> } 
                                {ListchitietSach && <Text style={{ fontSize: 18, color: 'red', fontStyle: 'italic' }}>Giá Thuê: {ListchitietSach.priceRent} VNĐ</Text>}
                                {ListchitietSach && <Text style={{ fontSize: 18, color: 'black' }}>Số Lượng: {ListchitietSach.quantity}</Text>} 
                            </View>

                        </View>
                        {ListchitietSach && <Text style={{ flexWrap: 'wrap', fontSize: 18, marginTop: 5, fontStyle: 'normal' }}>Mô tả: {ListchitietSach.desc}
                        </Text>} 
                </View>
                </ScrollView>

            </View>



            <View style={{
                position: 'absolute', bottom: 0,
                left: 0,
                right: 0,
            }}>

                <View style={{ marginTop: 20, marginStart: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Sách liên quan</Text>
                </View>

                <View style={{
                    backgroundColor: 'white', borderRadius: 20, padding: 10, margin: 10, elevation: 5,
                }}>
                    <FlatList
                        data={Listbook}
                        keyExtractor={item => item._id}
                        renderItem={renderBook}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl refreshing={reloading} onRefresh={realoadData} />
                        }
                    >
                    </FlatList>

                </View>
            </View>

        </View>
    )
}

export default ChiTietSach

const styles = StyleSheet.create({

    imageSP2: {
        width: 50, height: 60,
        borderRadius: 10
    },
    itembook: {
        margin: 10,
        marginEnd: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
})