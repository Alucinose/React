import React, { Component } from 'react'
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/bg.jpg'
import perfil from '../../assets/perfil.png'

class AddFriends extends Component {
    render() {
        return (
            <ImageBackground source={background} style={styles.background}>

                <View style={styles.userCard}>
                    <Image source={perfil} style={styles.imagePerfil} />
                    <View style={styles.userInfo}>
                        <Text style={styles.textName}>Juliano Mazeu</Text>
                    
                            <Text style={styles.textBox} numberOfLines={15} multiline={true}>Batata Batata Batata Batata Batata Batata
                            Batata Batata Batata Batata Batata Batata Batata a Batata Batata Batata
                       </Text>
                        
                    </View>
                </View>

                <View style={styles.userButton}>
                  <Icon name="check" color="#fff" style={styles.iconCheck} />
                  <Icon name="close" color="#fff" style={styles.iconClose} />
                  <Icon name="replay" color="#fff" style={styles.iconReplay} />

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
    },
    iconCheck:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 45,
        width:'100%',
        height: 200,
    },
    iconClose:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 45,
        width:'100%',
        height: 200,
    },
    iconReplay:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 45,
        width:'100%',
        height: 200,
    }


})

export default AddFriends