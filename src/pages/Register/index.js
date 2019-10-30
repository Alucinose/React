import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import background from '../../assets/bg.jpg' //Imagem fundo
import logo from '../../assets/logo.png'

function Register(){
    return(
        <ScrollView>
        <ImageBackground source={background} style ={styles.background}>
        <Image source = {logo} style ={styles.image} />
        <View style = {styles.viewLogin}>
           <TextInput placeholder= 'Seu nome' placeholderTextColor='#fff' style={styles.input}/>
           <TextInput placeholder= 'Seu e-mail' placeholderTextColor='#fff' style={styles.input}/>
           <TextInput secureTextEntry={true} placeholder= 'Digite sua senha' placeholderTextColor='#fff' style={styles.input}/>
           <RNPickerSelect style ={styles.pickerSelect} 
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Developer', value: 'developer'  },
                { label: 'Student', value: 'student' },
                { label: 'Teacher', value: 'teacher' },
                { label: 'Other', value: 'other' },
            ]}
        />
           <TouchableOpacity style={styles.button}>
              <Text> Register </Text>
           </TouchableOpacity>
           
        </View>
       

    </ImageBackground>
    </ScrollView>
    )
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
        padding: 5,
        alignItems: 'center'
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
    },
    pickerSelect:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        /*color: '#fff',
        marginTop: 10,
        padding: 5,
        alignItems: 'center'*/
    }
})

export default Register