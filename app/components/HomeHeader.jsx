import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AssetImage from './AssetImage'
import { UserReversedGeoCode } from '../context/UserReversedGeoCode'
import { UserLocationContext } from '../context/UserLocationContext'
import { COLORS, SIZES } from '../constants/theme'
import * as Location from 'expo-location';

const HomeHeader = () => {
    const { address, setAddress } = useContext(UserReversedGeoCode)
    const { location, setLocation } = useContext(UserLocationContext)
    const [ time, setTime ] = useState(null)

    useEffect(() => {
        if( location !== null ){
            reversedGeoCode( location.coords.latitude, location.coords.longitude )
        }
    }, [ location ]);

    //converting the longitude and latitude to actual address
    const reversedGeoCode = async ( latitude, longitude ) => {
        const reversedGeoCodeAddress = await Location.reverseGeocodeAsync({
            latitude: latitude,
            longitude: longitude 
        });

        setAddress(reversedGeoCodeAddress[0])  
        const greeting = getTimeofDay() 
        setTime(greeting)
    }

    const getTimeofDay = () => {
        const now = new Date()
        const hour = now.getHours();
        
        if( hour >= 0 && hour < 12 ){
            return "🌅"
        }else if( hour >= 12 < 12 ){
            return '☀️'; 
        }else{
            return '🌙'
        }
    }

    return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.outerStyle}>
                <AssetImage 
                    data={require('../../assets/images/profile.jpg')}
                    width={50}
                    height={50}
                    mode={'cover'}
                    radius={99}
                />
            </View>

            <View style={styles.headerStyle}>
                <Text style={styles.heading}>Deliverying to</Text>
                <Text style={styles.location}>{`${address.city} ${address.name}`}</Text>
            </View>
        </View>

        <Text style={{fontSize: 36}}>{time}</Text>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    outerStyle: {
        marginBottom: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
    },

    headerStyle: {
        marginLeft: 15,
        justifyContent: 'center'
    },

    heading: {
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: COLORS.secondary
    },

    location: {
        fontFamily: 'regular',
        fontSize: SIZES.small+2,
        color: COLORS.secondary
    }
})