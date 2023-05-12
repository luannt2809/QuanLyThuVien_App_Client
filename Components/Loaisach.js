import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';


let duLieu = [
    { id: 1, name: 'Hài Hước ', vitri:"Kệ 4A" },
    { id: 2, name: 'Kinh Dị ', vitri: "Kệ 4A" },
    { id: 3, name: 'Tình Yêu ', vitri: "Kệ 4A" },
    { id: 4, name: 'Hài Hước ', vitri: "Kệ 4A" },
    { id: 5, name: 'Hài Hước ', vitri: "Kệ 4A" },
    { id: 6, name: 'Hài Hước ', vitri: "4A" },
    { id: 7, name: 'Hài Hước ', vitri: "4A" },
    { id: 8, name: 'Kinh Dị ', vitri: "4A" },
    { id: 9, name: 'Tình Yêu ', vitri: "4A" },
    { id: 10, name: 'Hài Hước ', vitri: "4A" },
    { id: 11, name: 'Kinh Dị ', vitri: "4A" },
    { id: 12, name: 'Tình Yêu ', vitri: "4A" },
]

const numColumns = 2;
const Loaisach = (props) => {

    const renderCategory = ({ item }) => {
        return (
         
            <View style={styles.itemcategory}>
              {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
                <TouchableOpacity onPress={() => props.navigation.navigate("SachTheLoai")}>
                    <View style={{marginEnd:10}}> 
                        <Image source={require('../assets/truyen-ngon-tinh-18.jpg')} style={styles.imageSP} />
                    </View>
              </TouchableOpacity>
             
                  
                <View style={{flexDirection:'column'}}>
                    <Text style={{ fontWeight: 'bold', color: '#333333',fontSize:18}}>{item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <EvilIcons name="location" size={24} color="#584CF4" />
                        <Text style={{ fontWeight: '500', color: '#584CF4' }}>{item.vitri}</Text>
                       
                    </View>
                  
                </View>
               

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

              <View style={{height:'90%', paddingEnd:20}}>
                  <FlatList
                      data={duLieu}
                      keyExtractor={item => item.id}
                      renderItem={renderCategory}
                      showsHorizontalScrollIndicator={false}
                      numColumns={numColumns}
                      columnWrapperStyle={styles.columnWrapper}
                  />

              </View>

    </View>
  )
}

export default Loaisach

const styles = StyleSheet.create({

    imageSP: {
        width: 70, height: 70,
        borderRadius:10
    },

    itemcategory: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        flexDirection:'row',
        width: '45%',
        backgroundColor:'white',
        borderRadius:15, 
        marginStart:10,
        marginEnd:1
   
    },
    columnWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
})