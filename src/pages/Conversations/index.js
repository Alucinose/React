import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, FlatList, Image, Scrollview} from 'react-native'
import background from '../../assets/bg.jpg'

const DATA = [
    {
      id: '1',
      avatar: 'https://d181w3hxxigzvh.cloudfront.net/wp-content/uploads/2017/09/Ornn_Splash_Tile_0.jpg',
      name: 'Juliano Mazeu',
      msng: 'Você me parece merecer isso, não me decepcione.'
    },
    {
      id: '2',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_16.jpg',
      name: 'Anderson Faramilio',
      msng: 'URRRRHGHHHHHH.'
    },
    {
      id: '3',
      avatar: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2019/07/legiao_y4a5qBzRwTXeLMpEF0QYldtIJ19i6cgHNsjbPOfK_v.jpg.jpeg',
      name: 'Felipe Oliveira',
      msng: 'É pão mermo...'
    },
  ];


  //Retorna somente uma view
  function Item({ avatar, name, msng }) {
    return (
      <View style={styles.item}>
        <Image source={{uri:avatar}}style={styles.avatar}/>
        <View style={styles.spaceText}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{msng}</Text>
        </View>

      </View>
    );
  }
  
//Você pode alterar os valores
class Conversations extends Component {
    render() {
        return(
         <ImageBackground source={background} style ={styles.background}> 
            
        <FlatList
        data={DATA}
        renderItem={({ item }) => <Item avatar={item.avatar} 
                                          name= {item.name} 
                                          msng = {item.msng}/>}
        keyExtractor={item => item.id}
      />

         </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
    },item: {
        backgroundColor: '#666',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        
      },
      title: {
        fontSize: 19,
      },
      avatar: {
          width: 72,
          height: 72,
          borderRadius: 100,
      },
      spaceText:{
          marginLeft: 7
      }
    
})
    

export default Conversations