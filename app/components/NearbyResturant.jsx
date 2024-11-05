import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import uidata from '../constants/uidata'
import Store from './Store'
import { useNavigation } from '@react-navigation/native'
import { RestaurantContext } from '../context/RestaurantContext'


const NearbyResturant = () => {
  const navigation = useNavigation()
  const  { restaurantObj, setRestaurantObj }  = useContext(RestaurantContext)

  return (
    <View style={{ marginLeft: 12 }}>
      <FlatList 
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={({ item }) => (
            <Store item={item} onPress={() => {navigation.navigate('resturant', item), setRestaurantObj(item) }}/>
        )}
      />
    </View>
  )
}

export default NearbyResturant

const styles = StyleSheet.create({})