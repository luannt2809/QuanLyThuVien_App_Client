import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

let duLieubook = [
  { id: 1, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 2, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 3, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 4, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 5, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },


]
const numColumns = 5;
const numColumns2 = 2;
const SachTheoTheLoai = () => {

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
      </View>
    )
  }
  return (
    <View style={{flex:1}}>
       <View style={{margin:5,borderRadius:10, backgroundColor:'white', elevation:5, padding:5, flexDirection:'row'}}>
        <Image source={require('../assets/truyen-ngon-tinh-18.jpg')} style={{width:30, height:30, borderRadius:10}} />
         <Text style={{marginStart:10, fontWeight:'bold', fontSize:16}}>Tâm Lý 18+</Text>
      
       </View>
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
      <View style={{flex:2, backgroundColor:'white', borderTopRightRadius:10, borderTopLeftRadius:10, elevation:5, marginTop:5}}>
        <FlatList
          data={duLieubook}
          keyExtractor={item => item.id}
          renderItem={renderBook}
          showsHorizontalScrollIndicator={false}
          numColumns={numColumns2}
        >
        </FlatList>
      </View>
    </View>
  )
}

export default SachTheoTheLoai

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