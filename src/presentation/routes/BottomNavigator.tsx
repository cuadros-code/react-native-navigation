import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        }
      }}
    >
      <Tab.Screen 
        name="Tab1" 
        options={{ 
          title: 'Tab 1', 
          tabBarIcon: ({color}) => (<Icon color={color} name='home-outline' />) 
        }} 
        component={Tab1Screen} 
      />
      <Tab.Screen 
        name="Tab2" 
        options={{ 
          title: 'Tab 2', 
          tabBarIcon: ({color}) => (<Icon color={color} name='file-tray-stacked-outline' />)
        }} 
        component={TopTabNavigator} 
      />
      <Tab.Screen 
        name="Tab3" 
        options={{ 
          title: 'Tab 3', 
          tabBarIcon: ({color}) => (<Icon color={color} name='cog-outline' />) 
        }} 
        component={StackNavigator} 
      />
    </Tab.Navigator>
  );
}