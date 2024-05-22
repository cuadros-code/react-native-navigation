import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/PrimaryButton'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export const ProfileScreen = () => {

  const { top, bottom, left, right } = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top,
    }}>
      <Text>ProfileScreen</Text>

      <PrimaryButton 
        label='Abrir Menu'
        onPress={() => navigation.dispatch( DrawerActions.toggleDrawer() ) }
      />
    </View>
  )
}
