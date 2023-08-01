import React from 'react'
import {View, Text} from 'react-native'

import Tabela from './Table';

export default props => {
    return (
        <View>
            <Text> Resultado </Text>
            <View>
                <Text>{props.imc}</Text>
                <Text></Text>
            </View>
            <View><Text>{props.faixa}</Text></View>
            <Tabela/>
            
        </View>

    );
}

//criar um estilo aqui que será aplicado condicionalmente nano resultado, na tabela, e no valor
// Só é renderizado quando for clicar no botao calcular e deve cobrir toda a tela