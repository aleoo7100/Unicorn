import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../genericComponents/Button'

export default function AddProductSelector({addProduct,loading}) {
  const [cuantity, setCuantity] = useState(1)
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <TouchableOpacity onPress={()=>setCuantity(x=>x>1?x-1:x)} >
          <Image 
            source={require('../../assets/img/icons/less.png')} 
            resizeMode="contain" 
            style={{width:20,height:20,marginVertical:12,marginHorizontal:20}} 
          />
        </TouchableOpacity>
        <Text style={styles.text}>{cuantity}</Text>
        <TouchableOpacity onPress={()=>setCuantity(x=>x+1)} >
          <Image 
            source={require('../../assets/img/icons/more.png')} 
            resizeMode="contain" 
            style={{width:20,height:20,marginVertical:12,marginHorizontal:20}} 
          />
        </TouchableOpacity>
      </View>
      <Button tittle="Agregar" onPress={()=>addProduct(cuantity)} loading={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginVertical:16,
    flexDirection:'row',
  },
  counter:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'#f0f6ff',
    paddingVertical: 8,
    flexDirection:'row',
    alignItems: 'center',
    marginRight:16
  },
  text:{
    color: '#000000',
    fontFamily: 'Muli-Regular',
    fontSize: 24,
    letterSpacing: -1.2,
    marginHorizontal:8
  }
})