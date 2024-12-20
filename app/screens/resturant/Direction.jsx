import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { RestaurantContext } from '../../context/RestaurantContext'
import GoogleMapView from '../../components/GoogleMapView'
import { COLORS, SIZES } from '../../constants/theme'

const Direction = () => {
  const { restaurantObj, setRestaurantObj } =useContext(RestaurantContext)
  const coords = restaurantObj.coords
 
  const onDirectionClick = () => {
    const url = Platform.select({
      ios: 'maps:' + coords.latitude + ',' + coords.longitude,
      android: 'geo:' + coords.latitude + ',' + coords.longitude + '?z=16'
    })
    Linking.openURL(url)
  }
  return (
    <View>
      <GoogleMapView placeList={[coords]} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', margin: 12}}>
        <Text style={[styles.small, { width: SIZES.width/1.6}]}>{coords.address}</Text>
      
        <TouchableOpacity style={styles.ratingBtn} onPress={onDirectionClick}>
          <Text>Direction</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Direction

const styles = StyleSheet.create({
  small: {
    fontSize: 13,
    fontFamily: 'regular',
    color: COLORS.gray,
  },

  ratingBtn:{
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: 12,
    padding: 6
  }
})