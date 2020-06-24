import React, { useEffect, useContext } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

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
    <View style={styles.container}>
      {/* <Image source={require('../../assets/img/logoFondoBlue.png')} style={{width:200,height:200}} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor: '#0BACEA',
    justifyContent: 'center',
    alignItems: 'center'
  }
})