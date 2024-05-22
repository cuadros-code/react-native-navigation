import { Pressable, Text, View } from 'react-native'
import { useEffect } from 'react'
import { globalStyles } from '../../theme/theme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/PrimaryButton'
import { RootStackProps } from '../../routes/StackNavigator'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackProps>>()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          onPress={() => { navigation.dispatch( DrawerActions.toggleDrawer() ) }}
        >
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  

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
