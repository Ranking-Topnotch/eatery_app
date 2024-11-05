import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import uidata from '../constants/uidata'
import { COLORS } from '../constants/theme'

const ChoicesList = ({ setSelectedChoice, setSelectedSection }) => {
    const [ selected, setSelected ] = useState(null)

    const handlePress = ( item ) => {
      if( selected == item.value  ){
        setSelected(null)
        setSelectedChoice(null)
        setSelectedSection(null)
      }else{
        setSelected(item.value)
        setSelectedChoice(item.value)
        setSelectedSection('resturant')
      }
    }
  return (
    <View>
      <Text style={{
        marginLeft: 16,
        marginVertical: 12,
        fontSize: 16,
        fontFamily: 'bold'
      }}>
        Pick Resturant
      </Text>

      <FlatList 
        data={uidata.choiceList}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled
        keyExtractor={( item ) => item.id.toString()}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={() => handlePress(item)}
                style={{ 
                    backgroundColor : selected === item.value ? COLORS.secondary : COLORS.lightWhite,
                    height: 40,
                    borderRadius: 12,
                    marginHorizontal: 8,
                    justifyContent: "center"
                }}
            >
                <Text style={{
                  marginHorizontal: 10, 
                  fontFamily: 'regular',
                  fontSize: 13,
                  color: item.value === selected ? COLORS.lightWhite : COLORS.gray
                }}>
                  {item.name}
                </Text> 
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default ChoicesList

const styles = StyleSheet.create({})