import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import * as Location from 'expo-location';
import BottomTab from './app/navigation/BottomTab';
import { UserLocationContext } from './app/context/UserLocationContext';
import { UserReversedGeoCode } from './app/context/UserReversedGeoCode';
import { RestaurantContext } from './app/context/RestaurantContext'
import FoodNavigation from './app/navigation/FoodNavigation';
import ResturantPage from './app/navigation/ResturantPage';
import Resturant from './app/screens/resturant/Resturant';
import AddRating from './app/screens/AddRating';
const Stack = createNativeStackNavigator();

export default function App() {
  const [ location, setLocation ] = useState(null)
  const [ address, setAddress ] = useState(null)
  const [ restaurantObj, setRestaurantObj ] = useState(null)
  const [ error, setErrorMsg ] = useState(null)
  
  const defaultAddress = { "city": "Shanghai", "country": "China", "district": "Pudong", "isoCountryCode": "CN", "name": "33 East Nanjing Rd", "postalCode": "94108", "region": "SH", "street": "Stockton St", "streetNumber": "1", "subregion": "San Francisco County", "timezone": "America/Los_Angeles" }
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() =>{
    ( async () => {
      setAddress(defaultAddress)

      // accessing user loaction
      let { status } = await Location.requestForegroundPermissionsAsync()
    
      if(status !== 'granted'){
        setErrorMsg('Permission to access location was denied')
        return;
      }

      //this return the coordinate of your current location
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })();
  }, [])

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }


  return (
    <UserLocationContext.Provider value={{ location, setLocation}}>
      <UserReversedGeoCode.Provider value={{ address, setAddress }}>
        <RestaurantContext.Provider value={{ restaurantObj, setRestaurantObj }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='bottom-navigation'
                component={BottomTab}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='food-nav'
                component={FoodNavigation}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='resturant-page'
                component={ResturantPage}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='resturant'
                component={Resturant}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='rating'
                component={AddRating}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </RestaurantContext.Provider >
      </UserReversedGeoCode.Provider>
    </UserLocationContext.Provider>
  );
}
