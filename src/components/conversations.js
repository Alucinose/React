import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

function CardConversation({ avatar, name, msng }) {
    return (
      <View style={styles.item}>
        <Image source={{uri:avatar}}style={styles.avatar}/>
        <View style={styles.spaceText}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title} numberOfLines={2} >{msng}</Text>
        </View>

      </View>
    );
  }


  const styles = StyleSheet.create({
    background:{
        flex: 1
    },
    item: {
        backgroundColor: '#666',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',

        
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
          marginLeft: 7,
          width: "70%"
      }
    
})
    

  export default CardConversation