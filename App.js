import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Interface from './src/components/Interface'

export default function App() {
  return (
    <View style={styles.container}>
      <Interface/>      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/* Instruçoes para  interface, esse progama deve conter duas  telas uma para
pegar os parametros para realizar o calculo e  outra para ser renderizada sobreponto
a outra  que  foi utilizada para pega os parametros, e essa nova tela  deve conter o resultado contendo a classificacao*/ 