import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HeaderBar({tittle=""}) {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/img/icons/backArrow.png')} resizeMode="contain" style={{width:24,height:24}}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.tittle}>{tittle}</Text>
      <View style={{flex:1}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:60,
    padding:8,
    flexDirection:'row',
    alignItems: 'center',
  },
  backButton:{
    padding:8
  },
  tittle:{
    color: '#000000',
    fontFamily: 'Muli',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.9,
  }
})