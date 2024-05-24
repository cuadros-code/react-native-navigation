import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackProps = {
  Home: undefined,
  Products: undefined,
  Product: { id: number, name: string },
  Settings: undefined
}

const Stack = createStackNavigator<RootStackProps>();

export const StackNavigator = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  

  return (
    <Stack.Navigator
     screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
     }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}