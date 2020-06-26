import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LinearGradient from 'react-native-linear-gradient';

export default function ShopingCard({id,imgUri=null,tittle="",price="",cuantity="1",setCuantity=()=>{},onDelete=()=>{}}) {
  return (
    <Swipeable
      containerStyle={{marginTop:16}}
      friction={2}
      renderRightActions={()=>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#fea0a8', '#ff7783']} style={styles.linearGradient}>
          <TouchableOpacity onPress={()=>onDelete(id)} style={styles.rightContent}>
            <Image 
              source={require('../../assets/img/icons/trash.png')} 
              resizeMode="contain"
              style={{width: 20,height: 20}} 
            />
          </TouchableOpacity>
        </LinearGradient>
      }
    >
      <View style={styles.container}>
        <View>
          <Image 
            source={imgUri} 
            style={{width: 40,height: 40,borderRadius:10,overflow:'hidden'}} 
          />
          <TouchableOpacity style={styles.edit}>
            <Image 
              source={require('../../assets/img/icons/edit.png')} 
              resizeMode="contain" 
              style={{width:10,height:10}} 
            />
          </TouchableOpacity>
        </View>
        <View style={{flex:1,paddingHorizontal:8}}>
          <Text numberOfLines={1} style={styles.tittle}>{tittle}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={()=>setCuantity(id,(cuantity>1?cuantity-1:cuantity))} >
            <Image 
              source={require('../../assets/img/icons/less.png')} 
              resizeMode="contain" 
              style={{width:12,height:12,marginVertical:10,marginHorizontal:8}} 
            />
          </TouchableOpacity>
          <Text style={styles.text}>{cuantity}</Text>
          <TouchableOpacity onPress={()=>setCuantity(id,cuantity+1)} >
            <Image 
              source={require('../../assets/img/icons/more.png')} 
              resizeMode="contain" 
              style={{width:12,height:12,marginVertical:8,marginHorizontal:8}} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor: '#FFF',
    borderWidth:1,
    borderColor:'#f0f6ff',
    borderRadius:10,
    padding:16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linearGradient:{
    borderRadius:10
  },
  rightContent:{
    width:80,
    height:80,
    // borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'#f0f6ff',
    paddingVertical: 4,
    flexDirection:'row',
    alignItems: 'center',
  },
  text:{
    color: '#000000',
    fontFamily: 'Muli-Regular',
    fontSize: 15,
    letterSpacing: -1.2,
    marginHorizontal:8
  },
  tittle:{
    color: '#000000',
    fontFamily: 'Muli-Black',
    fontSize: 14,
  },
  price:{
    color: '#535e71',
    fontFamily: 'Muli-Bold',
    fontSize: 18,
  },
  edit:{
    padding:5,
    backgroundColor: '#FFF',
    borderWidth:1,
    borderColor:'#f4f7fd',
    position: 'absolute',
    borderRadius:12, 
    right:-8,
    top:-8
  }
})