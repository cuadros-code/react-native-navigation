import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {

  const navigation = useNavigation()

  const onNavigate = () => {
    navigation.navigate('Products' as never)
  }

  return (
    <View style={globalStyles.container}>
      <Pressable onPress={onNavigate} style={globalStyles.primaryColor}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable>
    </View>
  )
}
