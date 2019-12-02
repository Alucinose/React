import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/bg.jpg' //Imagem fundo
import logo from '../../assets/logo.png'
import Error from '../../components/Error'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component{

    //Estado 
    state = {
     
        email: '',
        password: ''
    }
    //Responsável pelo nosso login
    handleSubmit = async () =>{
        //Enviando dados do nosso usuário para rota de autenticação
        const response = await Axios.post('http://10.51.47.64:3000/auth',{
        email: this.state.email,
        password:  this.state.password
    })
        console.log(response)
    }

    //Armazenar dados do nosso usuário no local storage
    setStorage = async ( data ) => {
       await AsyncStorage.setItem('@user', data)
       const value = AsyncStorage.getItem('@user')
       console.log( value )
    }

    render(){

        console.log(this.state)
    return (
        <ScrollView>
            <ImageBackground source={background} style={styles.background}>
                <Image source={logo} style={styles.image} />
                {/* ---------- COMPONENTE ERRO ---------- */}
                {<Error icon="block" text="Erro! Login ou senha inválido"/>}

                <View style = {styles.viewLogin}>
                    <View style={styles.sectionStyle}>
                        <Icon name="email" color="#fff" style={styles.iconStyle} />
                        <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.input} onChangeText= {( text) => this.setState({ email: text })} />
                    </View>
                    <View style={styles.viewPassword}>
                        <Icon name="lock" color="#fff" style={styles.iconStyle} />
                        <TextInput secureTextEntry={true} placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.input} onChangeText= {( text) => this.setState({ password: text})} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => this.props.navigation.navigate('Register')}>
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
}

//Nossos estilos de páginas
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 700

    },
    viewLogin: {
        backgroundColor: '#2F3236',
        width: '80%',
        padding: 15,
        marginTop: 10
    },
    input: {
        width: '100%',
        padding: 0,
        paddingLeft: 30,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#000'
        
    },
    button: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 5,
        alignItems: 'center'
    },
    image: {
        width: 285,
        height: 225,
    },
    forgotPassword: {
        marginTop: 10,
        marginBottom: -20
    },
    scrollView: {
        flex: 1
        //marginHorizontal: 10,
    },
    iconStyle:{
        position: "absolute",
        left: 0,
        fontSize: 20,

    },
    viewPassword:{
    marginTop: 20,
    }
  


    
    
})

export default Login