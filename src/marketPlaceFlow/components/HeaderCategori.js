import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function HeaderCategori({data={}}) {
  return (
    <View style={styles.container}>
      <Image 
        source={data.imgUri} 
        resizeMode="contain" 
        style={{width:'100%',height:200}}
      />
      <Text style={styles.tittle}>{data.tittle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:6,
    marginBottom:8,
    alignItems: 'center',
  },
  tittle:{
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    paddingTop:8,
    fontSize: 14,
  }
})