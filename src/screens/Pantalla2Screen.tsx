import React from 'react'
import { Button,Text, View,StyleSheet,TextInput, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

interface Props extends NativeStackScreenProps<any,any> {}

export const Pantalla2Screen = ({navigation}:Props) => {
  return (
    <View style={{
        backgroundColor:"rgb(62, 212, 222)",
        flex:1
    }}>

        <Text style={{
            textAlign:"center",
            fontSize:40,
            marginBottom:40,
            color:"gold"
        }}>Registrarse</Text>
        
        <TextInput
            style={styles.input}
            
            placeholder="Correo Electrónico"
            keyboardType="email-address"
          />
        <TextInput
            style={styles.input}
            
            placeholder="Nombre de Usuario"
          />
        <TextInput
            style={styles.input}
            
            placeholder="Contraseña"
            secureTextEntry
          />
        
        <Button
        title='Registrarse'
        onPress={()=>navigation.navigate("Pantalla1")}
        />

        <TouchableOpacity style={styles.Button} 
        onPress={()=>navigation.navigate("Pantalla1")}>
        <Text style={{textAlign:"center"}}>¿Ya tienes una cuenta? Inicia sesion ahora</Text>
      </TouchableOpacity>

        
    </View>

  )
}

const styles = StyleSheet.create({
    
    input: {
        backgroundColor:"rgb( 174, 233, 237 )",
      height: 40,
      borderColor: 'gray',
      borderBottomWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    
    Button:{
        marginTop: 30,
        
      }
  });
