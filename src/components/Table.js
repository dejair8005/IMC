import React from 'react'
import {View, Text} from 'react-native'

export default props => {
    return (
        <View>
           <Text>Menor que 16.9  Muito abaixo do peso</Text>
           <Text>17 a 18,4       Abaixo do peso</Text>
           <Text>18,5 a 24,9     Peso normal</Text>
           <Text>25 a 29,9       Acima do peso</Text>
           <Text>30 a 34,9           Obesidade grau I</Text>
           <Text>35 a 40             Obesidade grau II</Text>
           <Text>Maior que 40    Obesidade grau III</Text>
            
        </View>

    );
}

// criar estilo aqui para fazer renderizacao condicional na tabela