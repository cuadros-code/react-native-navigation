import { View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/PrimaryButton'
import { RootStackProps } from '../../routes/StackNavigator'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackProps>>()

  return (
    <View style={globalStyles.container}>
      <PrimaryButton 
        onPress={() => navigation.navigate('Products')}
        label='Productos'
      />

      <PrimaryButton 
        onPress={() => navigation.navigate('Settings')}
        label='Settings'
      />
    </View>
  )
}
