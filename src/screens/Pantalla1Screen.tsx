import React  from 'react'
import { Button,  View, Image  } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { TitleComponent } from '../components/TitleComponent'
import { styles } from '../theme/Apptheme'



interface Props extends NativeStackScreenProps<any,any> {}

export const Pantalla1Screen = ({navigation}:Props) => {  

    return (
    <View style={styles.background1}>

        <TitleComponent title={"Bienvenido"} />
        

        <Image 
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/867/880/non_2x/official-symbol-olympic-games-tokyo-2020-japan-and-torch-fire-abstract-design-illustration-logo-sign-icon-free-vector.jpg' }} 
        style={styles.image} 
      />
        
        <Button 
        
        title='Acceder'
        onPress={()=>navigation.navigate("Pantalla2")}
        />

        

        

    </View>
  )
}





