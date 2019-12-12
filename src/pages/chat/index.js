import React, {Component} from 'react'
import background from '../../assets/op.png'
import { View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native'
import{ TextInput, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'


const DATA1 = [
    {
        id: 1,
        idUser: 1,
        msng: 'Pudim'
    },
    {
        id: 2,
        idUser: 2,
        msng: 'Chocolate'
    },
    {
        id: 3,
        idUser: 3,
        msng: 'Sorvete'
    }
]

class Chat extends Component {
    render() {
        return (
            <React.Fragment>
            <ImageBackground source={background} style={styles.backgroundView}>
                <FlatList 
                data={DATA1} 
                renderItem={({ item }) => 
                <React.Fragment>
                {
                    item.idUser === 1 ? (
                        <View style ={styles.friend}>
                            <Text style={styles.colorText2}>{item.msng}</Text>
                        </View>
                    ) : (
                            <View style= {styles.my}>
                                <Text style={styles.colorText}>{item.msng}</Text>
                            </View>
                        )
                }
               </React.Fragment>
                }
                    keyExtractor={item => item.id}
                />
                </ImageBackground>
                <View style={styles.viewSend}>
                    <TextInput style={styles.inputMessage} placeholder= 'Mensagem' placegolderTextColor= '#000000'/>
                    <TouchableOpacity style={styles.buttonSend}>
                        <Icon size ={40} style={styles.icon} name='send'/>
                    </TouchableOpacity>
                </View>
            </React.Fragment>

        )
    }
}

const styles = StyleSheet.create ({
    backgroundView:{
        flex: 1,
    },
    friend:{
        marginTop: 5,
        marginBottom: 5,
        padding: 20,
        width: '50%',
        borderRadius: 20,
        backgroundColor: '#dbd7d7',
        left: 180
    },
    my:{
        marginTop: 5,
        marginBottom: 5,
        padding: 20,
        width: '50%',
        borderRadius: 20,
        backgroundColor: '#5c5656'
    },
    colorText:{
        color: '#ffffff',
    },
    colorTex2:{
        color: '#000000'
    },
    viewSend: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    inputMessage: {
        width: '85%',
        paddingLeft: 20,
        borderRadius: 100,
        backgroundColor: '#676280'
    },
    buttonSend: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 100,
    },
    Icon: {
        marginTop: 5
    }
})
export default Chat