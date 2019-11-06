import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import background from '../../assets/bg.jpg' //Imagem fundo
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/MaterialIcons'
import perfil from '../../assets/perfil.png'


class Perfil extends React.Component {

 //Nosso state (estado)
    state = {
        avatar: perfil,
        name: 'juju',
        age: '25',
        height: '1.87',
    }

    //Alterando imagem do perfil
    hlandleChooseAvatar() {
        this.setState({
            name: 'kleber',
            age: 32
        })
    }
   
    render (){
        //Pegando avatar do State(estado)
        const { avatar, name, age } = this.state

        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background}>
                <View>
                    <TouchableOpacity style={styles.button}>
                    <Icon name = "dehaze" color="#666" style={styles.iconStyle}/> 
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>{name + age}</Text>
                    <TouchableOpacity onPress={() => this.hlandleChooseAvatar()} >
                    <Image source={avatar} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.text}> Perfil profissional</Text>
                </View>

                <View style={styles.textAreaContainer}>
                    <View style={styles.iconText}>
                        <Icon name="create" color="#666" size={25} />
                    </View>
                    
                    <TextInput placeholder= 'Digite um texto curto sobre você! ' textAlign= {"center"} placeholderTextColor='#666' 
                style={styles.textArea} numberOfLines={10} multiline ={true}/>
                    
                </View>

                <View><Text style={styles.textContato}> Contato</Text></View>

                <View> 
                <Icon name="phone" color="#666" style={styles.iconPhone} />
                    <TextInput placeholder= '(**) *****-****' />
                </View>

                <View>
            <TouchableOpacity style={styles.buttonRegister}>   
                <Text style= {{color: '#fff'}}> Register </Text>
            </TouchableOpacity>
                </View>
        
                </ImageBackground>
            </ScrollView>


        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        height: 700
    },
    iconStyle: {
        fontSize: 30,
        left: "50%",
        position: "absolute",
    },
    button:{
        padding: 15,
        height: 30,
        left: "45%",
    },
    button2:{
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        height: 45,
        borderRadius: 5,
        position: "absolute",
    },
    image: {
        width: 245,
        height: 245,
        borderRadius: 150,
        marginTop: 30
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20

    },
    input:{
        width: '100%',
        padding: 0,
        paddingLeft: 30,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#000'

    },
    textArea:{
        height: 120,
        justifyContent: "flex-start"
    },
    textAreaContainer:{
        borderColor: '#000',
        borderWidth: 1,
        padding: 1,
        width: '80%',
        alignItems: 'center'
    },
    iconText:{
        left: "45%" ,
        fontSize: 30,
    },
    textContato:{
        marginTop:10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    iconPhone:{
        textAlign: 'center',
        fontSize: 25,
        position: 'absolute',
        right: "25%",
        marginTop: 10

    },
    buttonRegister:{
        backgroundColor: "#666",
        padding: 5,
        width: 200,
        alignItems: 'center',
        marginTop: "3%"
    }
})


export default Perfil