import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function StartIndicator({value=5}) {

  function fullStart() {
    return(
      <Image 
        source={require('../../assets/img/icons/startGolden.png')} 
        resizeMode="contain"
        style={{width:24,height:24}}
      />
    )
  }
  function emptyStart() {
    return(
      <Image 
        source={require('../../assets/img/icons/startGrey.png')} 
        resizeMode="contain"
        style={{width:24,height:24}}
      />
    )
  }

  return (
    <View style={styles.container}>
      {fullStart()}
      {value>1?fullStart():emptyStart()}
      {value>2?fullStart():emptyStart()}
      {value>3?fullStart():emptyStart()}
      {value>4?fullStart():emptyStart()}
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row'
  }
})