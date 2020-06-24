import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBar from '../../genericComponents/HeaderBar'
import { FlatList } from 'react-native-gesture-handler'
import HeaderCategori from '../components/HeaderCategori'

export default function CategoriesScreens() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar tittle={"Sneakers!!!"} />
      <FlatList
        data={[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"}]}
        keyExtractor={item => item.id}
        style={{width:'100%',paddingHorizontal:12}}
        numColumns={2}
        ListHeaderComponent={()=>
          <HeaderCategori/>
        }
        renderItem={({item})=>
          <View style={{flex:1,height:100,margin:4,backgroundColor:'#abc',}}>
            <Text>{item.id}</Text>
          </View>
        }
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor: '#FFF',
  }
})