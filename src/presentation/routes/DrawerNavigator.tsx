import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColor } from '../theme/theme';
import { View, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const dimensions = useWindowDimensions()

  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />}

      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width > 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColor.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColor.primary,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 20,
        }
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>

  );
}

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          borderRadius: 50,
          margin: 30,
          backgroundColor: globalColor.primary,
        }}
       />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}