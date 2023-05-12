import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
let duLieubook = [
    { id: 1, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 2, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 3, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 4, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
    { id: 5, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 }

]
const numColumns = 2;

const TimkiemSach = (props) => {

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
                    <Text style={{textAlign:"left", alignItems:'flex-start', fontStyle:'italic', textDecorationLine:'underline'}}>Chi Tiết</Text>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View>
          <View style={{
              padding: 7,
              width: '95%',
              marginTop: 5,
              marginBottom: 5,
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 10,
              marginLeft: 10
          }}>
              <EvilIcons name="search" size={24} color="black" style={{ marginLeft: 1, marginRight: 4 }} />
              <TextInput placeholder='Search' style={styles.input}
              // underlineColorAndroid="transparent"
              >
              </TextInput>
          </View>

          <View style={{height:'91%', backgroundColor:'white', marginTop:5, borderTopLeftRadius:10, borderTopRightRadius:10}}>
              <FlatList
                  data={duLieubook}
                  keyExtractor={item => item.id}
                  renderItem={renderBook}
                  showsHorizontalScrollIndicator={false}
                  numColumns={numColumns}
                
              >
              </FlatList>
          </View>
    </View>
  )
}

export default TimkiemSach

const styles = StyleSheet.create({
    imageSP2: {
        width: 100, height: 120,
        borderRadius: 10
    },
    itembook: {
        width: '50%',
        margin: 10,
        marginEnd: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
})