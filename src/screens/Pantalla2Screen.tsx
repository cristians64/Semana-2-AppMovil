import React, { useState } from 'react'
import { Button,Text, View,TextInput, } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { TitleComponent } from '../components/TitleComponent';
import { styles } from '../theme/Apptheme';
import { Text1Component } from '../components/TextComponent';
import { InputComponent1 } from '../components/InputComponent1';


interface Props extends NativeStackScreenProps<any,any> {}

export const Pantalla2Screen = ({navigation}:Props) => {
  
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const handleDivide = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (num2 === 0) {
      setResultado(numero1 === '0' ? 'INDETERMINACIÓN' : 'NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResultado((num1 / num2).toString());
    }
  };
  
  
  
  return (
    <View style={styles.background2}>
      
      <TitleComponent title={"App para divir"} />

      <Text1Component text={"Numero 1"}></Text1Component>

      <InputComponent1
      keyboardType="numeric"
      value={numero1}
      onChangeText={setNumero1}
      />

      <Text1Component text={"Numero 2"}></Text1Component>

      <InputComponent1
      keyboardType="numeric"
      value={numero2}
      onChangeText={setNumero2}
      />

      
      <Button title="Dividir" onPress={handleDivide} />
      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
    
      <Button 
        
        title='REGRESAR'
        onPress={()=>navigation.navigate("Pantalla1")}
        />

    </View>

    

  )
}


