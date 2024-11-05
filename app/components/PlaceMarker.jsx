import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const PlaceMarker = ({ coordinates }) => {
  return (
    <Marker title={coordinates.title} coordinate={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        lagitudeDelta: 0.0122,
        longitudeDelta: 0.0221
    }} />  
  )
}

export default PlaceMarker

const styles = StyleSheet.create({})