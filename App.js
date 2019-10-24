/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,

} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.text} >Este é apenas um texto demonstrativo para aquelas pessoas que precisam criar um texto
        e estão sem a criatividade e disposição para criar o mesmo, sendo que as pessoas preguiçosas
        são as melhores do mundo e visa a lasanha!
      </Text>
      <Text style={styles.question}>Questão 1</Text>
      <Text style={styles.text}>Não aperte o botão, a não ser que você queira, mas o aviso foi dado!</Text>
        <Button color= '#000000'
        title= 'Me aperte, eu sei que você quer isso.'
        onPress= {()=> Alert.alert('Parabéns, você me apertou!') } />

      <Text style={styles.question}>Question 2</Text>
      <Text style={styles.text}>Depois de ter apertado o primeiro botão, tenho certeza que você não irá querer
        apertar O SEGUNDO BOTÃO!!! </Text>
        <Button color= '#000000'
        title= 'Olá, bora me apertar amiguinho.'
        onPress= {() => Alert.alert('Eu sabia, você é curioso demais para não me apertar!')} />
     
      
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
      backgroundColor: '#de7cd7'
    },

    text:{
      fontSize: 20
    },
    
    backgroundView:{



    }
  }
);


export default App;
