import React, { Component } from 'react'
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/bg.jpg'
import perfil from '../../assets/perfil.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

class AddFriends extends Component {
    render() {
        return (
            <ImageBackground source={background} style={styles.background}>

                <View style={styles.userCard}>
                    <Image source={perfil} style={styles.imagePerfil} />
                    <View style={styles.userInfo}>
                        <Text style={styles.textName}>Juliano Mazeu</Text>
                    
                            <Text style={styles.textBox} numberOfLines={15} multiline={true}>Babababananana
                       </Text>
                        
                    </View>
                </View>

                <View style={styles.userButton}>
                 <TouchableOpacity>
                  <Icon name="check" color="#fff" style={styles.iconCheck} />
                 </TouchableOpacity>

                 <TouchableOpacity> 
                  <Icon name="close" color="#fff" style={styles.iconClose} />
                 </TouchableOpacity>

                 <TouchableOpacity> 
                  <Icon name="replay" color="#fff" style={styles.iconReplay} />
                 </TouchableOpacity>  
                 
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 700
    },
    userCard: {
        width: 320,
        height: 426,
        backgroundColor: '#c4c4c4',
        borderRadius: 3,
        marginBottom: '3%'
    },
    imagePerfil: {
        height: 316,
        width: '100%',
        borderRadius: 0,
        marginTop: 0,
        marginLeft: 0,
        borderRadius: 3
    },
    textBox: {
        width: '100%',
        height: 50,
        padding: 0,
        paddingLeft: 30,
        color: '#fff',
        marginTop: 5
    },
    textName: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 30,
        marginTop: 10
    },
    userInfo: {
        height: 80,
        width: '100%',
    },
    userButton:{
        width: 320,
        height: 60,
        backgroundColor: '#c4c4c4',
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: "space-around"
        
    },
    iconCheck:{        
        fontSize: 45,
        width:'100%',
        height: 200,
        marginTop: "10%"
    },
    iconClose:{
        fontSize: 45,
        width:'100%',
        height: 200,
        marginTop: "10%"
    },
    iconReplay:{
        fontSize: 45,
        width:'100%',
        height: 200,
        marginTop: "10%"
    }


})

export default AddFriends