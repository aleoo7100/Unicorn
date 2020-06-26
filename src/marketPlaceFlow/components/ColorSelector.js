import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

export default function ColorSelector({onPressColor,selectedColor=null,colors=[]}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Elige un color</Text>
      <FlatList
        data={colors}
        horizontal
        keyExtractor={(item,index) => index.toString()}
        ItemSeparatorComponent={()=><View style={{width:4}}/>}
        renderItem={({item})=>
          <TouchableOpacity 
            onPress={()=>onPressColor(item.color)}
            style={selectedColor===item.color?{...styles.colorContainerTrue,borderColor: item.color}:styles.colorContainerFalse}
          >
            <View style={{...styles.color,backgroundColor: item.color,}}/>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"100%"
  },
  text:{
    color: '#000000',
    fontFamily: 'Muli-Bold',
    fontSize: 18,
    letterSpacing: -0.9,
    marginBottom:8
  },
  colorContainerTrue:{
    borderWidth:1,
    padding: 3,
    borderRadius:50
  },
  colorContainerFalse:{
    padding: 4,
    borderRadius:50
  },
  color:{
    width:44,
    height:44,
    borderRadius:50
  }
})