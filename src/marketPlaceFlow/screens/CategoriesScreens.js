import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBar from '../../genericComponents/HeaderBar'
import { FlatList } from 'react-native-gesture-handler'
import HeaderCategori from '../components/HeaderCategori'
import ProductItem from '../components/ProductItem'
import { Context } from '../../GlobalContext'

export default function CategoriesScreens({navigation}) {
  const [headerItems, setHeaderItems] = useState({});
  const [items, setItems] = useState([]);
  const {
    state: { shopingList},
  } = useContext(Context);

  useEffect(() => {
    didMount()
  }, [])

  function didMount() {
    setHeaderItems(SNEAKERS_CATEGORI.header);
    setItems(SNEAKERS_CATEGORI.items);
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar tittle={"Sneakers!!!"} onPressCart={()=>navigation.navigate('BuyCartScreen')} cuantity={shopingList.length} />
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
            onPress={()=>navigation.navigate('ProductDetailScreen',{item})}
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
      description:"Los tennis que se tomaron los 80’s están devuelta para darle un toque vieja escuela a tu look para lograr tener el mejor estilo casual.",
      imgUri:require('../../assets/img/marketPlace/item1/1.png'),
      colors:[{color:'#9fbcff'},{color:'#ff7062'},{color:'#ffdf9b'}],
      starts:4
    },
    {
      id:"2",
      tittle:"Tennis negros nike",
      price:"220",
      description:"Los tennis que se tomaron los 80’s están devuelta para darle un toque vieja escuela a tu look para lograr tener el mejor estilo casual.",
      imgUri:require('../../assets/img/marketPlace/item2/1.png'),
      starts:2
    },
    {
      id:"3",
      tittle:"Tennis deportivos nike azul oscuro",
      price:"220",
      oldPrice:"250",
      description:"Los tennis que se tomaron los 80’s están devuelta para darle un toque vieja escuela a tu look para lograr tener el mejor estilo casual.",
      imgUri:require('../../assets/img/marketPlace/item3/1.png'),
      colors:[{color:'#9fbcff'},{color:'#ff7062'},{color:'#ffdf9b'}],
      starts:3
    },
    {
      id:"4",
      tittle:"Airforce",
      price:"220",
      description:"Los tennis que se tomaron los 80’s están devuelta para darle un toque vieja escuela a tu look para lograr tener el mejor estilo casual.",
      imgUri:require('../../assets/img/marketPlace/item4/1.png'),
      colors:[{color:'#9fbcff'},{color:'#ff7062'},{color:'#ffdf9b'}],
      starts:4
    },
    {
      id:"5",
      tittle:"Tennis deportivos nike blancos",
      price:"220",
      description:"Los tennis que se tomaron los 80’s están devuelta para darle un toque vieja escuela a tu look para lograr tener el mejor estilo casual.",
      imgUri:require('../../assets/img/marketPlace/item5/1.png'),
      colors:[{color:'#9fbcff'},{color:'#ff7062'},{color:'#ffdf9b'}],
      starts:1
    },
    {
      id:"6",
      tittle:"Tennis deportivos",
      price:"220",
      description:"Los tennis que se tomaron los 80’s están devuelta para darle un toque vieja escuela a tu look para lograr tener el mejor estilo casual.",
      imgUri:require('../../assets/img/marketPlace/item6/1.png'),
      starts:3
    },
  ]
}