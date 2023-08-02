import React from 'react';
import { Text, View, Button } from 'react-native';

export default props => {

function botaoteste(){
    return <Text>Teste</Text>
}
 
//const imc = peso / (altura * altura)
  return (
    <View>
      <Button
        title='Calcular'
        onPress={botaoteste}
      />
    </View>
  );
};














/*if(imc < 16.9){
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
  }*/