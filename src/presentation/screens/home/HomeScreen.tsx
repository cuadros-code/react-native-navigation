import { View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/PrimaryButton'

export const HomeScreen = () => {

  const navigation = useNavigation()

  const onNavigate = ( route: string ) => {
    navigation.navigate( route as never )
  }

  return (
    <View style={globalStyles.container}>
      <PrimaryButton 
        onPress={() => onNavigate('Products')}
        label='Productos'
      />

      <PrimaryButton 
        onPress={() => onNavigate('Settings')}
        label='Settings'
      />
    </View>
  )
}
