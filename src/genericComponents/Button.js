import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'; 

export default function Button({tittle,onPress,loading}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#fea0a8', '#ff7783']} style={styles.linearGradient}>
        {loading?
          <ActivityIndicator color="#FFF"/>
        :
          <Text style={styles.buttonText}>
            {tittle}
          </Text>
        }
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    minHeight:50,
    borderRadius:16,
    overflow:'hidden'
  },
  linearGradient:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color:"#FFF",
    fontSize:18,
    fontWeight:'bold'
  }
})
