import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import Button from './Button';
import Display from './Display'
export default props => {
   const[altura, setAltura] = useState('')
   const [peso, setPeso] = useState('')
   const imc = peso / (altura * altura)

let imcfaixa = 0
let classificacao = null
 
// em breve transformar essa função em switch case
if(imc < 16.9){
    imcfaixa=1
    classificacao="Muito abaixo do peso"     
  }
  else if (imc >= 17 && imc <= 18.4){
      imcfaixa=2
      classificacao="Abaixo do peso"
  }
  else if(imc >= 18.5 && imc <= 24.9){
    imcfaixa=3
    classificacao="Peso Normal"
  }
  else if (imc >= 25 && imc <= 29.9){
    imcfaixa=4
    classificacao="Acima do Peso"
  }
  else if (imc >= 30 && imc <= 34.9){
    imcfaixa=5
    classificacao="Obesidade Grau I"
  }
  else if (imc >= 35 && imc <= 40){
    imcfaixa=6
    classificacao="Obesidade Grau II"
  }
  else {
    imcfaixa=7
    classificacao="Obesidade Grau III"
  }
  
   
   


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
        <Display imc={imc} faixa={classificacao}/>
    </>
  );
};





