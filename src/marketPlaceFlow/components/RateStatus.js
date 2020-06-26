import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function RateStatus () {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
        <Text style={styles.rateText}>Valoraciones</Text>
        <Text style={styles.verTodoText}>Ver todo</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
        <View style={{alignItems: 'center',}}>
          <Text style={styles.point}>4.1</Text>
          <Text style={styles.subPoint}>de 5</Text>
        </View>
        <View style={{alignItems: 'flex-end',}}>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <View style={{width: 140,height: 3,backgroundColor: '#f4f7fd',marginLeft:8}}>
              <View style={{width: 110,height: 3,backgroundColor: '#fea0a8',}}/>
            </View>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <View style={{width: 140,height: 3,backgroundColor: '#f4f7fd',marginLeft:8}}>
              <View style={{width: 30,height: 3,backgroundColor: '#fea0a8',}}/>
            </View>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <View style={{width: 140,height: 3,backgroundColor: '#f4f7fd',marginLeft:8}}>
              <View style={{width: 15,height: 3,backgroundColor: '#fea0a8',}}/>
            </View>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <View style={{width: 140,height: 3,backgroundColor: '#f4f7fd',marginLeft:8}}>
              <View style={{width: 5,height: 3,backgroundColor: '#fea0a8',}}/>
            </View>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image source={require('../../assets/img/icons/startGrey.png')} resizeMode="contain" style={{width:16,height:16}} />
            <View style={{width: 140,height: 3,backgroundColor: '#f4f7fd',marginLeft:8}}>
              <View style={{width: 10,height: 3,backgroundColor: '#fea0a8',}}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginBottom:16
  },
  rateText:{
    color: '#000000',
    fontFamily: 'Muli-Bold',
    fontSize: 18,
    letterSpacing: -0.9,
    marginBottom:8
  },
  verTodoText:{
    color: '#8a97ad',
    fontFamily: 'Muli-Bold',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  point:{
    color: '#535e71',
    fontFamily: 'Muli-Bold',
    fontSize: 49,
    letterSpacing: -2.45,
  },
  subPoint:{
    color: '#8a97ad',
    fontFamily: 'Muli-Bold',
    fontSize: 16,
    letterSpacing: -0.8,
  }
})