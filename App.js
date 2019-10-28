/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, View, Text, Button, Alert, TouchableOpacity, TouchableHighlight} 
  from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.text} >Este é apenas um texto demonstrativo para aquelas pessoas que precisam criar um texto
        e estão sem a criatividade e disposição para criar o mesmo, sendo que as pessoas preguiçosas
        são as melhores do mundo e visa a la lasanha!
      </Text>
      <Text style={styles.question}>Questão 1</Text>
      <Text style={styles.text}>Clique no botão</Text>
        <Button style={styles.btn}
        title= 'Aperte aqui.'
        onPress= {()=> Alert.alert('Botão pressionado') } />

      <Text style={styles.question}>Question 2</Text>
        
<View style={{alignItems:'center'}}>

        <TouchableOpacity style={styles.btn}
          onPress= {() => Alert.alert('Botão pressionado')} >
          <Text style={styles.btnText}>Clique no botão </Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    question: {
      color: '#ffffff',
      backgroundColor: '#585c5b',
      alignItems: 'center',
      fontSize: 20,
      textAlign: 'center'
    },

    title: {
      backgroundColor: '#585c5b',
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30
    },

    container: {
      flex: 1,
      backgroundColor: '#de7cd7',
      
    },

    text:{
      fontSize: 20
    },

    btn:{
      borderRadius: 15,
      color: '#ffffff',
      backgroundColor: '#ffffff',
      width: 200,
      alignItems: 'center',
    },

    btnText:{
      fontSize: 25,
      textAlign: 'center',


    },
    
    backgroundView:{



    }
  }
);


export default App;
