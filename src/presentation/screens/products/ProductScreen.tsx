import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackProps } from '../../routes/StackNavigator'
import { useEffect } from 'react'

export const ProductScreen = () => {

  const { id, name } = useRoute<RouteProp<RootStackProps, 'Product'>>().params
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, [])
  

  return (
    <View>
      <Text>Product Screen</Text>
      <Text>id: {id}</Text>
      <Text>name: {name}</Text>
    </View>
  )
}
