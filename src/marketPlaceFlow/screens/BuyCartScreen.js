import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import HeaderBar from '../../genericComponents/HeaderBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Context} from '../../GlobalContext'
import ShopingCard from '../components/ShopingCard'

export default function BuyCartScreen({navigation}) {
  const {
    state: { shopingList},
    dispatch: { setShopingList },
  } = useContext(Context);

  function deleteProduct(id) {
    alert(id)
  }
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar onPressBack={()=>navigation.goBack()} tittle={"Carrito"} />
      <FlatList
        data={shopingList||[]}
        keyExtractor={item => item.id}
        style={{width:'100%',paddingHorizontal:16}}
        ListFooterComponent={()=><View style={{height:16}}/>}
        renderItem={({item})=>
          <ShopingCard
            id={item.id}
            tittle={item.tittle}
            price={item.price}
            imgUri={item.imgUri}
            cuantity={item.cuantity}
            onDelete={deleteProduct}
          />
        }
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
  }
})