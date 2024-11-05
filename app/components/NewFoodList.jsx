import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import Food from './Food'
import { useNavigation } from '@react-navigation/native'

const NewFoodList = () => {
    const navigation = useNavigation()
// onPress navigate to the food-nav(App.js) which has the FoodNavigation
//which in inturn has the pass the data to the foodPage
    const renderItem = ({ item }) => (
        <Food item={item} onPress={ () => navigation.navigate('food-nav', item) }/>
    )

  return (
    <View style={{marginLeft: 12, marginBottom: 10}}>
      <FlatList 
        data={uidata.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={renderItem}
      />
    </View>
  )
}

export default NewFoodList

const styles = StyleSheet.create({})