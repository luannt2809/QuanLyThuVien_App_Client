import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
const numColumns = 2;

const TimkiemSach = (props) => {
    var url_book = 'http://192.168.1.11:3000/api/books';

    const [reloading, setreloading] = useState(false)
    const [Listbooks, setListbooks] = useState([])
    const [img_base64, setiimg_base64] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    const renderBook = ({ item }) => {
        return (

            <View style={styles.itembook}>
                <TouchableOpacity onPress={() => props.navigation.navigate("ChiTietSach", {id:item._id})}>
                    {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
                    <Image source={{ uri: item.image ? item.image : null }} style={styles.imageSP2} />

                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 18, textAlign:'center' }}>{item.name}</Text>
                <Text style={{ fontWeight: '300', color: '#333333' }}>{item.author}</Text>
                <Text style={{ fontWeight: '600', color: 'red' }}>$ {item.priceRent}</Text>
            </View>
        )
    }

    const getDataBooks = async () => {

        try {
            const response = await fetch(url_book); //lấy dữ liệu về 
            const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
            console.log(jsonSP);
            setListbooks(jsonSP.data);

        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    const realoadData = React.useCallback(() => {
        setreloading(true); ///set trang thai 
        getDataBooks();
        //moo phong doi reload, neesu laf reload tu sever that thi khong can );
        setTimeout(() => {
            setreloading(false);
        }, 2000);
    })

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // do something
      
            getDataBooks();
        });

        return unsubscribe;
    }, [props.navigation]);
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
                  data={Listbooks}
                  keyExtractor={item => item._id}
                  renderItem={renderBook}
                  showsHorizontalScrollIndicator={false}
                  numColumns={numColumns}
                  refreshControl={
                      <RefreshControl refreshing={reloading} onRefresh={realoadData} />
                  }
                
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