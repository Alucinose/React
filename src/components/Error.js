import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Error( props ) {
    return(
        <View style = {styles.background}>
            <Icon name = {props.icon} style = {styles.iconError} />  
            <Text style = {styles.textError}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#ed702d',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 15,
        width: '80%',
        flexDirection: 'row'
    },
    textError:{
        fontSize: 15,
    },
    iconError:{
        fontSize: 25,
    }
})

export default Error