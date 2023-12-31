import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function App() {

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
        <Text>Calculadora de IMC</Text>
        <TextInput
         placeholder="Digite sua altura ex: 1.80"
         keyboardType="numeric"   
         onChangeText={(valor)=>{setAltura(valor)}}
        />
        
        <TextInput
          placeholder="Digite seu peso ex 63.0"
          keyboardType="numeric"
          onChangeText={(valor)=>{setPeso(valor)}}
        />

        {/* Use an arrow function as the callback */}
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
});



