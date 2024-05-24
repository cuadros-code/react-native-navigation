import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';

interface Props {
  size?: number,
  name: string,
  color?: string, 
}

const Icon = ({ name = 'rocket', size = 20, color= 'black' }: Props) => {
  return (
    <Icons name={name} size={size} color={color} />
  )
}

export default Icon