import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

let duLieubook = [
    { id: 1, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 2, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 3, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 4, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 5, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 }

]
const ChiTietSach = (props) => {

    const renderBook = ({ item }) => {
        return (

            <View style={styles.itembook}>
                <TouchableOpacity>
                    {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
                    <Image source={require('../assets/img_book.jpg')} style={styles.imageSP2} />

                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 18 }}>{item.tensach}</Text>
                <Text style={{ fontWeight: '300', color: '#333333' }}>{item.tacgia}</Text>
                <Text style={{ fontWeight: '600', color: 'red' }}>$ {item.giamuon}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("ChiTietSach")}>
                    <Text style={{ textAlign: "left", alignItems: 'flex-start', fontStyle: 'italic', textDecorationLine: 'underline' }}>Chi Tiết</Text>
                </TouchableOpacity>
            </View>
        )
    }


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
                <View style={{flexDirection: 'row'}}> 
                        <Image source={require('../assets/img_book.jpg')} style={{ width: 130, height: 170, borderRadius: 10, marginEnd: 10 }} />
                        <View style={{ flexDirection: 'column', width: '70%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Sách 18+ 2023</Text>
                            <Text style={{ fontSize: 20 }}>Tác giả: Nguyễn Văn Dũng</Text>
                            <Text style={{ fontSize: 18 }}>Loại sách: Tâm Lý</Text>
                            <Text style={{ flexWrap: 'wrap', fontSize: 15, marginTop: 5 }}>Mô tả: Rất nhiều thứ thú vị 
                            nằm trong này nhé em húpàafaas kjsgkfwkjfkjhakhfahflalfakjf;à;lsaf;là;kalfkakf'alf;salf;alfsa
                            kajhdkjsahdkjsahkjhsakjfhakjhfahhfksahj
                            </Text>
                            <Text style={{ fontSize: 20, color: 'red' }}>$2000</Text>


                        </View>
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
                        data={duLieubook}
                        keyExtractor={item => item.id}
                        renderItem={renderBook}
                        horizontal
                        showsHorizontalScrollIndicator={false}
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