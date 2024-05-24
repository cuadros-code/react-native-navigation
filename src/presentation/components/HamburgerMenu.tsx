import { useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import Icon from './Icon'

const HamburgerMenu = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer() ) }
        >
          <Icon name='menu-outline' size={30} />
        </Pressable>
      )
    })
  }, [])

  return (
    <></>
  )
}

export default HamburgerMenu