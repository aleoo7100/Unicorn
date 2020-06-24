import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBar from '../../genericComponents/HeaderBar'
import { FlatList } from 'react-native-gesture-handler'
import HeaderCategori from '../components/HeaderCategori'
import ProductItem from '../components/ProductItem'



export default function CategoriesScreens() {
  const [headerItems, setHeaderItems] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    didMount()
  }, [])

  function didMount() {
    setHeaderItems(SNEAKERS_CATEGORI.header);
    setItems(SNEAKERS_CATEGORI.items);
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar tittle={"Sneakers!!!"} />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        style={{width:'100%',paddingHorizontal:10}}
        numColumns={2}
        ListHeaderComponent={()=>
          <HeaderCategori data={headerItems} />
        }
        ListFooterComponent={()=><View style={{height:16}}/>}
        renderItem={({item})=>
          <ProductItem
            item={item}
          />
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

const SNEAKERS_CATEGORI = {
  header:{
    tittle:"Las mejores zapatillas de Madrid",
    imgUri:require('../../assets/img/marketPlace/headerSneakers.png')
  },
  items : [
    {
      id:"1",
      tittle:"Tennis clásicos vans old school",
      price:"220",
      oldPrice:"250",
      imgUri:require('../../assets/img/marketPlace/item1/1.png')
    },
    {
      id:"2",
      tittle:"Tennis negros nike",
      price:"220",
      imgUri:require('../../assets/img/marketPlace/item2/1.png')
    },
    {
      id:"3",
      tittle:"Tennis deportivos nike azul oscuro",
      price:"220",
      oldPrice:"250",
      imgUri:require('../../assets/img/marketPlace/item3/1.png')
    },
    {
      id:"4",
      tittle:"Airforce",
      price:"220",
      imgUri:require('../../assets/img/marketPlace/item4/1.png')
    },
    {
      id:"5",
      tittle:"Tennis deportivos nike blancos",
      price:"220",
      imgUri:require('../../assets/img/marketPlace/item5/1.png')
    },
    {
      id:"6",
      tittle:"Tennis deportivos",
      price:"220",
      imgUri:require('../../assets/img/marketPlace/item6/1.png')
    },
  ]
}