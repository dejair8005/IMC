import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Estilos from './Estilos'


export default function Imput(props) {


      
        
  return(
    <View style={Estilos.Imput}>
      <TextInput
         placeholder={props.txt}
         keyboardType="numeric"
         onChangeText={props.valor}            
        />        
    </View>
        
  );
}








/*<TextInput
         
         onChangeText={(valor)=>{setAltura(valor)}}
         onChangeText={(valor)=>{setPeso(valor)}}
        />*/    