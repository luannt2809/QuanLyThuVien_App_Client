import { FlatList, RefreshControl, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { API_URL } from '../../API__/api';


const numColumns2 = 2;
const SachTheoTheLoai = ({navigation, route}) => {

   const [Listbookcate, setListbookcate] = useState([])
   const [search, setsearch] = useState()
  const [reloading, setreloading] = useState(false)

  const renderBook = ({ item }) => {
    return (

      <View style={styles.itembook}>
        <TouchableOpacity>
          {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
          <Image source={{ uri: item.image ? item.image : null }} style={styles.imageSP2} />

        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 17, textAlign:'center' }}>{item.name}</Text>
        <Text style={{ fontWeight: '300', color: '#333333' }}>{item.author}</Text>
        <Text style={{ fontWeight: '600', color: 'red' }}>$ {item.priceRent}</Text>
      </View>
    )
  }



  const getData = async () => {

    try {
      const response = await fetch(API_URL +'books?cateId='+route.params.id); //lấy dữ liệu về 
      const jsonSP = await response.json(); // chuyển dũ liêu thành đt json
      console.log(jsonSP);
      setListbookcate(jsonSP.data);

    } catch (error) {
      console.error(error);
    } finally {
      setreloading(false);
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
    const unsubscribe = navigation.addListener('focus', () => {
      // do something

      getData();
    });

    return unsubscribe;
  }, [navigation.navigation]);

  return (
    <View style={{flex:1}}>
       <View style={{margin:5,borderRadius:10, backgroundColor:'white', elevation:5, padding:10, flexDirection:'row'}}>
        <Image source={{ uri: route.params.image ? route.params.image : null }} style={{width:30, height:30, borderRadius:10}} />
         <Text style={{marginStart:10, fontWeight:'bold', fontSize:16, justifyContent:'center', alignSelf:'center'}}>{route.params.name}</Text>
      
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
        { !Listbookcate ? (
          <Text style={{alignItems:'center', justifyContent:'center'}}>Không có sách nào</Text>
        ) : (
            <FlatList
              data={Listbookcate}
              keyExtractor={item => item._id}
              renderItem={renderBook}
              showsHorizontalScrollIndicator={false}
              numColumns={numColumns2}
              refreshControl={
                <RefreshControl refreshing={reloading} onRefresh={realoadData} />
              }
            >
            </FlatList>
        )}
        
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