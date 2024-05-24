import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';

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
        options={{ title: 'Tab 1', tabBarIcon: ({color}) => (<Text style={{ color }} >Tab 1</Text>) }} 
        component={Tab1Screen} 
      />
      <Tab.Screen 
        name="Tab2" 
        options={{ title: 'Tab 2', tabBarIcon: ({color}) => (<Text style={{ color }} >Tab 2</Text>) }} 
        component={TopTabNavigator} 
      />
      <Tab.Screen 
        name="Tab3" 
        options={{ title: 'Tab 3', tabBarIcon: ({color}) => (<Text style={{ color }} >Tab 3</Text>) }} 
        component={Tab3Screen} 
      />
    </Tab.Navigator>
  );
}