import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import Button from './Button';
export default props => {
   const[altura, setAltura] = useState('')
   const [peso, setPeso] = useState('')
   

let imcfaixa = 0
let classificacao = null
 
// em breve transformar essa função em switch case

  
   
   


  return (
    <>
        <TextInput 
            placeholder="Digite sua altura ex: 1.80"
            value={altura}
            onChangeText={text => setAltura(text)}
            
        />
        <TextInput 
            placeholder="Digite seu peso ex: 63.0"
            value={peso}
            onChangeText={text => setPeso(text)}
        />
        <Text>//Criado para testar os valores digidados</Text>
        <Text>Altura: {altura} </Text>
        <Text>Peso: {peso} </Text>
      
        <Button />
        
    </>
  );
};





