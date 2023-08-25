import * as React from 'react';
import { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Imput from './src/componentes/Imput'
import Estilos from './src/componentes/Estilos'



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;








/*export default function App() {

  let txta = "Digite sua altura ex: 1.80"
  let txtp = "Digite seu peso ex 63.0"

  
  const [altura, setAltura]=useState('0');
  const [peso, setPeso]=useState('0');


  
  const [imc, setImc]=useState (0);
  const calcimc = (a,p)=>{
    const calculatedimc = p / (a * a)
    setImc(calculatedimc.toFixed(2))    
  };
  



  return (
    <NavigationContainer>
      <View style={Estilos.conteiner}>
        <View style={Estilos.Display1}>
            <Text style={Estilos.title}>Calculadora de IMC</Text>


            <Imput txt={txta} valor={(n)=>{setAltura(n)}}/>
            <Imput txt={txtp} valor={(n)=>{setPeso(n)}}/>
            
            <Button
            title="Calcular"
            onPress={() => {
              calcimc(parseFloat(altura), parseFloat(peso));
            }}
            
            />  
        </View>


        <View style={Estilos.Display2}>
        {imc !== 0?    
        <View >
          <Text>Resuldado</Text>
          
          <Text>
            Seu imc é: {imc}
            
          </Text>
          
        </View>
        : false}

        </View>   

      </View>
    </NavigationContainer>
    
  );
}
*/



