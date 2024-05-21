import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import { globalStyles } from '../theme/theme'

interface Props extends PressableProps {
  label: string
}

export const PrimaryButton = ( props: Props ) => {
  return (
    <Pressable {...props} style={globalStyles.primaryColor}>
      <Text style={globalStyles.buttonText}>
        {props.label}
      </Text>
    </Pressable>
  )
}
