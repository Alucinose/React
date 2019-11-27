import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import background from '../../assets/bg.jpg' //Imagem fundo
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Axios from 'axios'


class Register extends React.Component{

        //Estado 
        state = {
            name: '',
            email: '',
            password: '',
            category: '',
        }

        handleSubmit = async () => {
            console.log( this.state )
           const testeAxios = await Axios.post('http://10.51.47.64:3000/users', this.state)
        }

    render(){
    return(
        <ScrollView>
        <ImageBackground source={background} style ={styles.background}>
        <Image source = {logo} style = {styles.image} />
        <View style = {styles.viewLogin}>
           <TextInput placeholder= 'Seu nome' placeholderTextColor='#fff' style={styles.input} 
              onChangeText={(text) => this.setState ({name: text})}/>
           <TextInput placeholder= 'Seu e-mail' placeholderTextColor='#fff' style={styles.input}
              onChangeText={(text) => this.setState ({email: text})}/>
           <TextInput secureTextEntry={true} placeholder= 'Digite sua senha' placeholderTextColor='#fff' style={styles.input}
              onChangeText={(text) => this.setState ({password: text})}/>
           <View style = {styles.buttonBox}>
           <RNPickerSelect  
            onValueChange={(value) => this.setState({ category: value }) }
            items={[
                { label: 'Developer', value: 'developer'},
                { label: 'Student', value: 'student' },
                { label: 'Teacher', value: 'teacher' },
                { label: 'Other', value: 'other' },
             ]}
        />
        </View>
           <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
           <Icon name = "check" color="#666" style={styles.iconStyle}/>    
              <Text> Register </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress = {() => props.navigation.navigate('Login')}>
           <Icon name = "arrow-back" color="#666" style={styles.iconStyle}/>
              <Text> Voltar </Text>
           </TouchableOpacity>
           
           
        </View>
       

    </ImageBackground>
    </ScrollView>
    )
}
}
//Nossos estilos de página
const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
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
        padding: 10,
        alignItems: 'center',
        height: 45,
        borderRadius: 5
    },
    image:{
        width: 285,
        height: 225,
        marginTop: 70
    },
    forgotPassword:{
        marginTop: 10,
        marginBottom:-20
    },
    scrollView:{
        marginHorizontal: 10,
    }/*,
    pickerSelect:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        color: '#fff',
        marginTop: 10,
        padding: 5,
        alignItems: 'center'
    }*/,
    buttonBox:{
   
        marginTop: 10,
        borderColor: '#2F3236',
        borderWidth: 2,
        backgroundColor: '#fff',
        height: 45,
        width: '100%',
        borderRadius: 5

    },iconStyle:{
        position: "absolute",
        left: 0,
        fontSize: 30,
        alignItems: 'center',
        marginTop: 6

    }
})

export default Register