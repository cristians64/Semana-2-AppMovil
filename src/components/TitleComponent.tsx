import React from 'react';
import { Text } from 'react-native';
import { styles } from '../theme/Apptheme';

interface Props{
    title:String;
}

export const TitleComponent = ({title}:Props) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}
