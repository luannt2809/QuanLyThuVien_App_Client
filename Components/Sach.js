import { FlatList, Image, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

let duLieu = [
  { id: 1, name: 'Hài Hước '},
  { id: 2, name: 'Kinh Dị '},
  { id: 3, name: 'Tình Yêu '},
  { id: 4, name: 'Hài Hước ' },
  { id: 5, name: 'Hài Hước '},
  { id: 6, name: 'Hài Hước '},
  { id: 7, name: 'Hài Hước ' },
  { id: 8, name: 'Kinh Dị ' },
  { id: 9, name: 'Tình Yêu ' },
]

let duLieubook = [
  { id: 1, tensach: 'Sách 18+ 2023 ', tacgia:"Dũng", giamuon:200 },
  { id: 2, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 3, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 4, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },
  { id: 5, tensach: 'Sách 18+ 2023 ', tacgia: "Dũng", giamuon: 200 },


]
const numColumns = 5;
const numColumns2 = 2;


const Sach = (props) => {


  const renderCategory = ({ item }) => {
    return (
      
      <View style={styles.itemcategory}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Loaisach")}>
          {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
          <Image source={require('../assets/truyen-ngon-tinh-18.jpg')} style={styles.imageSP} />

        </TouchableOpacity>
        <Text style={{ fontWeight: '400', color: '#333333' }}>{item.name}</Text>

      </View>
    )
  }

  const renderBook = ({ item }) => {
    return (

      <View style={styles.itembook}>
        <TouchableOpacity onPress={() => props.navigation.navigate("ChiTietSach")}>
          {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
          <Image source={require('../assets/img_book.jpg')} style={styles.imageSP2} />

        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: '#333333' , fontSize:18 }}>{item.tensach}</Text>
        <Text style={{ fontWeight: '300', color: '#333333' }}>{item.tacgia}</Text>
        <Text style={{ fontWeight: '600', color: 'red' }}>$ {item.giamuon}</Text>
      </View>
    )
  }


  return (
      <View style={styles.container}>
      
        <View style={{ backgroundColor: 'white', margin: 5, elevation: 10, borderRadius: 10 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Loaisach")}>
            <View style={{
              padding: 7,
              width: '95%',
              marginTop: 10,
              marginBottom: 5,
              flexDirection: 'row',
              backgroundColor: '#EEEEEE',
              alignItems: 'center',
              borderRadius: 10,
              marginLeft: 10
            }}>
              <EvilIcons name="search" size={24} color="black" style={{ marginLeft: 1, marginRight: 4 }} />
              <Text placeholder='Search' style={styles.input}
              // underlineColorAndroid="transparent"
              >
                Search
              </Text>
            </View>

          </TouchableOpacity>
         
          <View style={{}}>
            <FlatList
              data={duLieu}
              keyExtractor={item => item.id}
              renderItem={renderCategory}
              showsHorizontalScrollIndicator={false}
               
              horizontal
            >
            </FlatList>
          </View>



        </View>

        <View style={{ backgroundColor: 'white', margin: 5, elevation: 10, borderRadius: 10 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("TkSach")} >

   
          <View style={{
            padding: 7,
            width: '95%',
            marginTop: 10,
            marginBottom: 5,
            flexDirection: 'row',
            backgroundColor: '#EEEEEE',
            alignItems: 'center',
            borderRadius: 10,
            marginLeft: 10
          }}>
            <EvilIcons name="search" size={24} color="black" style={{ marginLeft: 1, marginRight: 4 }} />
            <Text placeholder='Search' style={styles.input}
            // underlineColorAndroid="transparent"
            >
              Search
            </Text>
          </View>
          </TouchableOpacity>

            <View style={{marginBottom:20}}>
              <FlatList
                data={duLieubook}
                keyExtractor={item => item.id}
                renderItem={renderBook}
                numColumns={numColumns2}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
              >

              </FlatList>
            </View>

        </View>

      </View>

      

   
  )
}

export default Sach

const styles = StyleSheet.create({

  container:{
     height:'100%'
  },
  imageSP: {
    width: 30, height:30,borderRadius:5
  },
  imageSP2: {
    width: 100, height: 120,
    borderRadius:10
  },

  itemcategory: {
    margin: 10,
    marginEnd:1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  },

  itembook: {
    width:'50%',
    margin: 10,
    marginEnd: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
})