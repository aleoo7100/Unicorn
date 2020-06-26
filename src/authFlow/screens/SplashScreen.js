import React, { useEffect, useContext } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen ({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      verifiAuth()
    }, 2000);
  }, [])

  async function verifiAuth() {
    navigation.replace('CategoriesScreens')
  }

  return (
      <LinearGradient colors={['#fea0a8', '#ff7783']} style={styles.container}>
        <Text style={styles.text}>
          21Unicorn
        </Text>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor: '#0BACEA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:30,
    color:'#fff',
    fontFamily:'Muli-Bold'
  }
})