import { FlatList, Image, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';


const numColumns = 2;
const Loaisach = (props) => {

    var url = 'http://192.168.1.17:3000/api/categorys';
    const [Listcategory, setListcategory] = useState([])
    const [reloading, setreloading] = useState(false)
    const [img_base64, setiimg_base64] = useState(null)
    const [isLoading, setisLoading] = useState(true)


    const renderCategory = ({ item }) => {
        return (
         
            <View style={styles.itemcategory}>
              {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
                <TouchableOpacity onPress={() => props.navigation.navigate("SachTheLoai")}>
                    <View style={{marginEnd:10}}> 
                        <Image source={{ uri: item.image ? item.image : null }} style={styles.imageSP} />
                    </View>
              </TouchableOpacity>
             
                  
                <View style={{flexDirection:'column'}}>
                    <Text style={{ fontWeight: 'bold', color: '#333333',fontSize:15}}>{item.name}</Text>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <EvilIcons name="location" size={24} color="#584CF4" />
                        <Text style={{ fontWeight: '500', color: '#584CF4', textAlign:'center', }}>Kệ 1</Text>
                       
                    </View>
                  
                </View>
               

            </View>
        )
    }

    const getData = async () => {

        try {
            const response = await fetch(url); //lấy dữ liệu về 
            const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
            console.log(jsonSP);
            setListcategory(jsonSP.data);

        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    const realoadData = React.useCallback(() => {
        setreloading(true); ///set trang thai 
        getData();
        //moo phong doi reload, neesu laf reload tu sever that thi khong can );
        setTimeout(() => {
            setreloading(false);
        }, 2000);
    })

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // do something
            getData();
      
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

              <View style={{height:'90%', paddingEnd:20, backgroundColor:'white'}}>
                  <FlatList
                      data={Listcategory}
                      keyExtractor={item => item._id}
                      renderItem={renderCategory}
                      showsHorizontalScrollIndicator={false}
                      numColumns={numColumns}
                   
                  refreshControl={
                      <RefreshControl refreshing={reloading} onRefresh={realoadData} />
                  }
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
        width: '50%',
        margin: 10,
        marginEnd: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },


    columnWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
})