import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
]

export const ProductsScreen = () => {

  const navigation = useNavigation()

  const onNavigate = ( route: string ) => {
    navigation.navigate( route as never )
  }

  return (
    <View style={ globalStyles.container }>
      <Text style={{ marginBottom: 10, fontSize: 25, }}>Products</Text>
      <FlatList 
        data={products}
        renderItem={(data) => (
          <PrimaryButton
            onPress={() => onNavigate('Product')}
            label={data.item.name}
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 25, }}>Ajustes</Text>

      <PrimaryButton 
        onPress={() => onNavigate('Settings')}
        label='Ajustes'
      />
    </View>
  )
}
