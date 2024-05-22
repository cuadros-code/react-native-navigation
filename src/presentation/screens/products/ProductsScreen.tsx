import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackProps } from '../../routes/StackNavigator'

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
]

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackProps>>()

  return (
    <View style={ globalStyles.container }>
      <Text style={{ marginBottom: 10, fontSize: 25, }}>Products</Text>
      <FlatList 
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={ () => navigation.navigate('Product', { id: item.id, name: item.name } ) }
            label={item.name}
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 25, }}>Ajustes</Text>

      <PrimaryButton 
        onPress={ () => navigation.navigate('Settings') }
        label='Ajustes'
      />
    </View>
  )
}
