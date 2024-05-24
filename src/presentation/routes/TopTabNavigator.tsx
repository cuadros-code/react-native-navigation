import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ProfileScreen } from '../screens/profile/ProfileScreen'
import { AboutScreen } from '../screens/about/AboutScreen'
import HamburgerMenu from '../components/HamburgerMenu'

const Tab = createMaterialTopTabNavigator()

const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  )
}

export default TopTabNavigator