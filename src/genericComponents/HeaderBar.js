import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HeaderBar({tittle="",onPressBookmark=null,onPressShare=null,onPressBack=null,onPressCart=null}) {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
          <Image source={require('../assets/img/icons/backArrow.png')} resizeMode="contain" style={{width:24,height:24}}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.tittle}>{tittle}</Text>
      <View style={{flex:1,flexDirection:'row',justifyContent: 'flex-end',}}>
        {onPressBookmark&&(
          <TouchableOpacity onPress={onPressBookmark} activeOpacity={.9} >
            <Image 
              source={require('../assets/img/icons/bookmarkBlack.png')}
              resizeMode="contain"
              style={{width:24,height:24,margin:6}}
            />
          </TouchableOpacity>
        )}
        {onPressShare&&(
          <TouchableOpacity onPress={onPressShare} activeOpacity={.9} >
            <Image 
              source={require('../assets/img/icons/share.png')}
              resizeMode="contain"
              style={{width:24,height:24,margin:6}}
            />
          </TouchableOpacity>
        )}
        {onPressCart&&(
          <TouchableOpacity onPress={onPressCart} activeOpacity={.9} >
            <Image 
              source={require('../assets/img/icons/cart.png')}
              resizeMode="contain"
              style={{width:24,height:24,margin:6}}
            />
          </TouchableOpacity>
        )}
      </View>
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
    fontFamily: 'Muli-Bold',
    fontSize: 18,
    letterSpacing: -0.9,
  }
})