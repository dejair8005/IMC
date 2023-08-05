import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#ccd6bd',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    title: {
      fontSize: 35,
    },
    Imput: {
        borderWidth: 2, // Largura da borda
        borderColor: '#000', // Cor da borda
        borderRadius: 15, // Opcional: Arredondar as bordas
        paddingHorizontal: 10, // Espaçamento interno horizontal para o texto dentro do TextInput
        paddingVertical: 8, // Espaçamento interno vertical para o texto dentro do TextInput
        width: '100%',        
        marginBottom: 28,
            

    },
    Display1: {
        width: '99%',
        flex: 2,
        fontSize: 40,
        //backgroundColor: '#0f0'
        },
    Display2: {
        flex: 3,      

    },
    Botao: {
        width: '50%'
    }
})