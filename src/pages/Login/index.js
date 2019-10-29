import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import background from '../../assets/bg.jpg' //Imagem fundo
import logo from '../../assets/logo.png'

function Login() {
    return(
         <ImageBackground source={background} style ={styles.background}>
             <Image source = {logo} style ={styles.image} />
             <View style = {styles.viewLogin}>
                <TextInput placeholder= 'Digite seu e-mail' placeholderTextColor='#fff' style={styles.input}/>
                <TextInput placeholder= 'Digite sua senha' placeholderTextColor='#fff' style={styles.input}/>
                <TouchableOpacity style={styles.button}>                  
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                   <Text> Register </Text>
                </TouchableOpacity>
             </View>
         </ImageBackground>
    )
}

//Nossos estilos de páginas
const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    viewLogin:{
        backgroundColor: '#2F3236',
        width: '90%',
        padding: 15,
        marginTop: 200
    },
    input:{
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    },
    button:{
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 5,
        alignItems: 'center'
    },
    image:{
        width: 300,
        height: 300
    }
})

export default Login