import { FlatList, Image, RefreshControl, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import color from '../color'
import API, { API_URL } from '../../API__/api'
const numColumns2 = 2;


const Sach = (props) => {
 

  const [reloading, setreloading] =useState(false)
  const [Listcategory, setListcategory] = useState([])
  const [Listbooks, setListbooks] = useState([])
  const [img_base64, setiimg_base64] = useState(null)
  const [isLoading, setisLoading] = useState(true)



  const renderCategory = ({ item }) => {
    return (
      
      <View style={styles.itemcategory}>
        <TouchableOpacity>
          {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
          <Image source={{ uri: item.image ? item.image : null }} style={styles.imageSP} />

        </TouchableOpacity>
        <Text style={{ fontWeight: '400', color: '#333333' }}>{item.name}</Text>

      </View>
    )
  }

  const renderBook = ({ item }) => {
    return (

      <View style={styles.itembook}>
        <TouchableOpacity onPress={() => props.navigation.navigate("ChiTietSach", {id:item._id})}>
          {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
          <Image source={{ uri: item.image ? item.image : null }} style={styles.imageSP2} />

        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: '#333333' , fontSize:18 }}>{item.name}</Text>
        <Text style={{ fontWeight: '300', color: '#333333' }}>{item.author}</Text>
        <Text style={{ fontWeight: '600', color: 'red' }}>$ {item.priceRent}</Text>
      </View>
    )
  }

  const getData = async () => {

    try {
      const response = await fetch(API_URL+'categorys'); //lấy dữ liệu về 
      const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
      //console.log(jsonSP);
      setListcategory(jsonSP.data);

    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  }

  const getDataBooks = async () => {

    try {
      const response = await fetch(API_URL+'books'); //lấy dữ liệu về 
      const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
      //console.log(jsonSP);
      setListbooks(jsonSP.data);

    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  const realoadData = React.useCallback(() => {
    setreloading(true); ///set trang thai 
   getData();
    getDataBooks();
    //moo phong doi reload, neesu laf reload tu sever that thi khong can );
    setTimeout(() => {
      setreloading(false);
    }, 2000);
  })

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // do something
     getData();
      getDataBooks();
    });

    return unsubscribe;
  }, [props.navigation]);

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
              <EvilIcons name="search" size={24} color={color.xanh} style={{ marginLeft: 1, marginRight: 4 }} />
              <Text placeholder='Search' style={styles.input}
              // underlineColorAndroid="transparent"
              >
                Search
              </Text>
            </View>

          </TouchableOpacity>
         
          <View style={{}}>
            <FlatList
              data={Listcategory}
              keyExtractor={item => item._id}
           
            refreshControl={
              <RefreshControl refreshing={reloading} onRefresh={realoadData} />
            }
              showsHorizontalScrollIndicator={false}
              horizontal
            renderItem={renderCategory}
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
            <EvilIcons name="search" size={24} color={color.xanh} style={{ marginLeft: 1, marginRight: 4 }} />
            <Text placeholder='Search' style={styles.input}
            // underlineColorAndroid="transparent"
            >
              Search
            </Text>
          </View>
          </TouchableOpacity>

            <View style={{height:'77%'}}>
              <FlatList
                data={Listbooks}
                keyExtractor={item => item._id}
           
             
                numColumns={numColumns2}
                showsHorizontalScrollIndicator={false}
                horizontal={false}

            refreshControl={
              <RefreshControl refreshing={reloading} onRefresh={realoadData} />
            }
            renderItem={renderBook}
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