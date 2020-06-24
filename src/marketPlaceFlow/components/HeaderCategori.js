import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function HeaderCategori() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/img/marketPlace/headerSneakers.png')} 
        resizeMode="contain" 
        style={{width:'100%',height:200}}
      />
      <Text style={styles.tittle}>Las mejores zapatillas de Madrid</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:4,
    marginBottom:8,
    alignItems: 'center',
  },
  tittle:{
    color: '#8a97ad',
    fontFamily: 'Muli',
    paddingTop:8,
    fontSize: 14,
    fontWeight: '400',
  }
})