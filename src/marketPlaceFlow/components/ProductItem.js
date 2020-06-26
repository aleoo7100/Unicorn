import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ProductItem({item,onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.9} onPress={onPress}>
        <Image source={item.imgUri} resizeMode="contain" style={{width:'100%',height:180, borderRadius:12}} />
        <View style={{width:'100%',flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text style={styles.tittle}>{item.tittle}</Text>
            <View style={{width:'100%',flexDirection:'row'}}>
              {item.oldPrice&&<Text style={styles.oldPrice}>${item.oldPrice}</Text>}
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
          <TouchableOpacity style={{padding: 4,}}>
            <Image 
              source={require('../../assets/img/icons/bookmarkGrey.png')} 
              resizeMode="contain"
              style={{width:20,height:20}} 
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:6,
  },
  tittle:{
    flex:1,
    color: '#000000',
    fontFamily: 'Muli-Bold',
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 14.4,
  },
  price:{
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    fontSize: 12,
    letterSpacing: -0.6,
  },
  oldPrice:{
    marginRight:6,
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    fontSize: 12,
    letterSpacing: -0.6,
    textDecorationLine:"line-through"
  }
})
