import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import background from '../../assets/bg.jpg' //Imagem fundo
import logo from '../../assets/logo.png'

function Login() {
    return(
        <ScrollView>
         <ImageBackground source={background} style ={styles.background}>
             <Image source = {logo} style ={styles.image} />
             <View style = {styles.viewLogin}>
                <TextInput placeholder= 'Digite seu e-mail' placeholderTextColor='#fff' style={styles.input}/>
                <TextInput secureTextEntry={true} placeholder= 'Digite sua senha' placeholderTextColor='#fff' style={styles.input}/>
                <TouchableOpacity style={styles.button}>                  
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                   <Text> Register </Text>
                </TouchableOpacity>
                
             </View>
            <View>
            <TouchableOpacity style={styles.forgotPassword} >
                    <Text>Forgot password</Text>
                </TouchableOpacity>
            </View>

         </ImageBackground>
         </ScrollView>
    )
}

//Nossos estilos de páginas
const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 700
        
    },
    viewLogin:{
        backgroundColor: '#2F3236',
        width: '80%',
        padding: 15,
        marginTop: 40
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
        width: 285,
        height: 225,
      
    },
    forgotPassword:{
        marginTop: 10,
        marginBottom:-20
    },
    scrollView:{
        flex: 1
        //marginHorizontal: 10,
    }
})

export default Login