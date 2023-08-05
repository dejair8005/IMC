import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

// criar estilo em um Arquivo separado

import Imput from './src/componentes/Imput'


export default function App() {

  let txta = "Digite sua altura ex: 1.80"
  let txtp = "Digite seu peso ex 63.0"

  
  const [altura, setAltura]=useState('0');
  const [peso, setPeso]=useState('0');


  
  const [imc, setImc]=useState (0);
  const calcimc = (a,p)=>{
    const calculatedimc = p / (a * a)
    setImc(calculatedimc)    
  };
  



  return (
    <View style={styles.container}>
      <View style={{flex:2}}>
          <Text style={styles.title}>Calculadora de IMC</Text>


          <Imput txt={txta} valor={(n)=>{setAltura(n)}}/>
          <Imput txt={txtp} valor={(n)=>{setPeso(n)}}/>
          
          <Button
          title="Calcular"
          onPress={() => {
            calcimc(parseFloat(altura), parseFloat(peso));
          }}
          
          />  
      </View>


      {imc !== 0?    
      <View style={{flex:1}}>
        <Text>Resuldado</Text>
        
        <Text>
          Seu imc é: {imc}
          
        </Text>
        
      </View>
      : false}

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccd6bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40
  }
});


