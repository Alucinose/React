import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacityBase, Image, ScrollView } from 'react-native'
import background from '../../assets/bg.jpg' //Imagem fundo
import RNPickerSelect from 'react-native-picker-select'



function Register() {
    return (
        <ScrollView>
            <ImageBackground source={background} style={styles.background}>
                <View>
                    <text> Hello world</text>

                </View>

            </ImageBackground>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        height: 700

    }
})


export default Perfil