import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StartIndicator from './StartIndicator'

export default function CommentCard({tittle,description}) {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{tittle}</Text>
      <StartIndicator value={4}/>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    padding: 16,
    borderWidth:1,
    borderColor:'#f0f6ff',
    borderRadius:10
  },
  tittle:{
    color: '#000000',
    fontFamily: 'Muli-Black',
    fontSize: 16,
    letterSpacing: -0.8,
    marginBottom:8,
  },
  description:{
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    fontSize: 16,
    marginTop:12
  }
})