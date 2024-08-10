import React from 'react'
import { Text } from 'react-native'
import { styles } from '../theme/Apptheme';

interface Props {
    text:String;
}

export const Text1Component = ({text}:Props) => {
  return (
    <Text style={styles.text} >{text}</Text>
  )
}
