import React from 'react';
import { TextInput,  View, TextInputProps } from 'react-native';
import { styles } from '../theme/Apptheme';


// Definir los tipos de las propiedades que el componente aceptará
interface CustomInputProps extends TextInputProps {
  
}

export const InputComponent1: React.FC<CustomInputProps> = ({ ...textInputProps }) => {
  return (
    <View >
      
      <TextInput
      style={styles.input}
      {...textInputProps}
      />
    </View>
  );
};
