import React, { useState }  from 'react'
import { Button, Text, View,StyleSheet,TextInput, TouchableOpacity  } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'



interface Props extends NativeStackScreenProps<any,any> {}

export const Pantalla1Screen = ({navigation}:Props) => {  

    return (
    <View style={{
        backgroundColor:"rgb(62, 212, 222)",
        flex:1
    }}>
        <Text style={{
            color:"gold",
            textAlign:"center",
            fontSize:40,
            marginBottom:40
        }}>Inicio de sesion</Text>
        

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
        
        title='Iniciar sesion'
        onPress={()=>navigation.navigate("Pantalla2")}
        />

        <TouchableOpacity style={styles.Button} 
        onPress={()=>navigation.navigate("Pantalla2")}>
        <Text style={{textAlign:"center"}}>¿No tienes una cuenta? Registrate ahora</Text>
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


