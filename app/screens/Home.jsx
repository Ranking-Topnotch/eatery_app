import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";
import NearbyResturant from "../components/NearbyResturant";
import Divider from "../components/Divider";
import NewFoodList from "../components/NewFoodList";
import FastestDistance from "../components/FastestDistance";
import HomeCategories from "../components/HomeCategories";

const Home = () => {
  const [ selectedCategory, setSeletedCategory ] = useState(null)
  const [ selectedSection, setSelectedSection ] = useState(null)
  const [ selectedValue, setSelectedValue ] = useState(null)
  const [ selectedChoice, setSelectedChoice ] = useState(null)

  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />

          <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={{borderBottomEndRadius: 30, borderBottomStartRadius: 30}}
          >
            <CategoryList 
              setSelectedCategory={setSeletedCategory}
              setSelectedSection={setSelectedSection}
              setSelectedValue={setSelectedValue}
            />

            <ChoicesList 
              setSelectedSection={setSelectedSection}
              setSelectedChoice={setSelectedChoice}
            />

            { selectedCategory !== null && selectedSection !== null ? (
              <View>
                <Heading heading={`Browse ${selectedValue}`} onPress={()=>{}}/>

                <HomeCategories />
              </View>
            ) : 
              <View>
                <Heading heading={'Nearby Resturants'} onPress={()=>{}}/>
            
                <NearbyResturant />  

                <Divider />

                <Heading heading={'Try Something New'} onPress={()=>{}}/>
            
                <NewFoodList />

                <Divider />

                <Heading heading={'Resturant Near you'} onPress={()=>{}}/>
            
                <FastestDistance />
            </View> }

            
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
