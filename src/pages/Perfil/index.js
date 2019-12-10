import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import background from '../../assets/bg.jpg' //Imagem fundo
import Icon from 'react-native-vector-icons/MaterialIcons'
import perfil from '../../assets/perfil.png'
import ImagePicker from 'react-native-image-picker'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'



class Perfil extends React.Component {

 //Nosso state (estado)
    state = {
        //photo: ele irá armazenar o caminho do nosso avatar no smartphone
        photo: '',
        description: '',
        telephone: '',
        id: '',
        token: '',
    }

    //Nosso component DidMount
    async componentDidMount() {
        const user = await AsyncStorage.getItem('@user')

        

        //Transformando nossa string em objeto
        const { userExists, token } = JSON.parse(user)

        //Setando o id do nosso usuário no estado
        this.setState({ id: userExists.id, token: token })

      
        
    }

    //Alterando imagem do perfil
    hlandleChooseAvatar() {
        ImagePicker.showImagePicker(response => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = response.uri ;
          
              this.setState({
                photo: source
              });
            }
          });
    }
    //Envia os dados do usuário
    async handleSubimt() {
        //Pegando o id e token do usuário dentro do state
   
        console.log(this.state)
      
      

        //Enviando nossas propriedades do state para nossa rota de update
        const {data} = await Axios.put(`http://10.51.47.64:3000/users/${this.state.id}`, this.state, {
        headers: {Authorization: "Bearer " + this.state.token }
    })
        
    }
   
    render (){
        //Pegando avatar do State(estado)
        const { photo } = this.state

        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background}>
                <View>
                    <TouchableOpacity style={styles.button}>
                    <Icon name = "dehaze" color="#666" style={styles.iconStyle}/> 
                    </TouchableOpacity>
                </View>

                <View>                
                    <TouchableOpacity onPress={() => this.hlandleChooseAvatar()} >
                        {
                            photo ?
                            <Image source={photo} style={styles.image}/>
                            :
                            <Image source={perfil} style={styles.image} />
                        }
                    
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.text}> Perfil profissional</Text>
                </View>

                <View style={styles.textAreaContainer}>
                    <View style={styles.iconText}>
                        <Icon name="create" color="#666" size={25} />
                    </View>
                    
                    <TextInput placeholder= 'Digite um texto curto sobre você! ' 
                    textAlign= {"center"}
                    placeholderTextColor='#666' 
                    onChangeText={( text) => this.setState({ description: text})}
                    style={styles.textArea} 
                    numberOfLines={10} multiline ={true}/>
                    
                </View>

                <View><Text style={styles.textContato}> Contato</Text></View>

                <View> 
                <Icon name="phone" 
                    color="#666" 
                    style={styles.iconPhone} />
                    <TextInput placeholder= '(**) *****-****' 
                   onChangeText={(text) => this.setState ({ telephone: text})}  />
                    
                </View>

                <View>
            <TouchableOpacity style={styles.buttonRegister} onPress={() => this.handleSubimt()}>   
                <Text style= {{color: '#fff'}}> Confirm </Text>
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