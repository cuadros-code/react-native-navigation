import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './presentation/routes/DrawerNavigator';

export const App = () => {
  
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}