import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function StartSelector({value=0,setValue=()=>{}}) {

  function fullStart() {
    return(
      <Image 
        source={require('../../assets/img/icons/startGolden.png')} 
        resizeMode="contain"
        style={{width:40,height:40,margin:4}}
      />
    )
  }
  function emptyStart() {
    return(
      <Image 
        source={require('../../assets/img/icons/startGrey.png')} 
        resizeMode="contain"
        style={{width:40,height:40,margin:4}}
      />
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setValue(1)}>
        {value>0?fullStart():emptyStart()}
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setValue(2)}>
        {value>1?fullStart():emptyStart()}
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setValue(3)}>
        {value>2?fullStart():emptyStart()}
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setValue(4)}>
        {value>3?fullStart():emptyStart()}
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setValue(5)}>
        {value>4?fullStart():emptyStart()}
      </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginVertical:16
  }
})