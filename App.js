import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Imput from './src/componentes/Imput';
import Estilos from './src/componentes/Estilos';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// HomeScreen component
function HomeScreen() {
  const navigation = useNavigation(); // Get the navigation prop

  // State variables
  const [altura, setAltura] = useState('0');
  const [peso, setPeso] = useState('0');

  // Function to calculate IMC
  const calcimc = (a, p) => {
    const calculatedimc = p / (a * a);
    navigation.navigate('Resultado', { imc: calculatedimc.toFixed(2) }); // Pass imc as a route parameter
  };

  let txta = "Digite sua altura ex: 1.80";
  let txtp = "Digite seu peso ex 63.0";

  return (
    <View style={Estilos.conteiner}>
      <View style={Estilos.Display1}>
        {/* Using the Imput component */}
        <Imput txt={txta} valor={(n) => { setAltura(n) }} />
        <Imput txt={txtp} valor={(n) => { setPeso(n) }} />

        {/* Calculate IMC and navigate to Resultado screen */}
        <Button
          title="Calcular"
          onPress={() => {
            calcimc(parseFloat(altura), parseFloat(peso));
          }}
        />
      </View>
    </View>
  );
}

// Resultado component
function Resultado({ route }) {
  const { imc } = route.params; // Access the imc parameter from route.params
  

  return (
    <View style={Estilos.conteiner}>
      <View style={Estilos.Display2}>
        {imc !== 0 ? (
          <View>
            <Text>Resultado</Text>
            <Text>Seu imc é: {imc}</Text>
          </View>
        ) : (
          <View>
            <Text>Aguardando</Text> {/* Display "Aguardando" when imc is 0 */}
          </View>
        )}
      </View>
    </View>
  );
}
// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculadora de IMC" component={HomeScreen} />
        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={{ title: 'Resultado do IMC' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
