import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function Imput(props) {


      
        
  return(
    <View>
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