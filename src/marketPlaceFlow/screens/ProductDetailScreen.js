import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBar from '../../genericComponents/HeaderBar'
import { ScrollView } from 'react-native-gesture-handler'
import StartIndicator from '../components/StartIndicator'
import ColorSelector from '../components/ColorSelector'
import AddProductSelector from '../components/AddProductSelector'
import CommentCard from '../components/CommentCard'
import RateBox from '../components/RateBox'
import RateStatus from '../components/RateStatus'
import { Context } from '../../GlobalContext'

export default function ProductDetailScreen({navigation,route}) { 
  const [product, setProduct] = useState({})
  const [selectedColor, setSelectedColor] = useState(null)
  const {
    state: { shopingList },
    dispatch: { setShopingList },
  } = useContext(Context);

  useEffect(() => {
    route.params?.item&&didMount(route.params.item)

    console.log(route.params?.item)
  }, [])

  function didMount(item) {
    setProduct(item)
    if(item.colors){
      setSelectedColor(item.colors[0].color)
    }
  }

  function addProduct(cuantity) {
    product.cuantity=cuantity;
    let productExist = shopingList.find(item=>item.id===product.id);
    if(productExist){
      // productExist
    }{
      const newShopingList=shopingList||[];
      newShopingList.push(product)
      setShopingList(newShopingList);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar tittle={"Sneakers!!!"} onPressBack={()=>navigation.goBack()} onPressBookmark={()=>{}} onPressShare={()=>{}} />

      <ScrollView>
        <View style={{width:'100%',paddingHorizontal:16}}>
          <Image 
            source={product.imgUri} 
            resizeMode="cover" 
            style={{width:'100%',height:340,borderRadius:16}} 
          />
        </View>

        <View style={{width:'100%',marginVertical:16,paddingHorizontal:16}}>

          <Text style={styles.tittle}>{product.tittle}</Text>

          <View style={styles.sectionOne}>
            <View style={styles.rowContent}>
              <StartIndicator value={product.starts} />
              <Text style={styles.estartsCuantiti}>(594)</Text>
            </View>
            <View style={styles.rowContent}>
              {product.oldPrice&&
                <Text style={styles.oldPrice}>${product.oldPrice}</Text>
              }
              <Text style={styles.price}>${product.price}</Text>
            </View>
          </View>

          <Text style={styles.description}>{product.description}</Text>

          {product.colors&& 
            <ColorSelector 
              colors={product.colors} 
              selectedColor={selectedColor} 
              onPressColor={setSelectedColor} 
            />
          }

          <AddProductSelector addProduct={addProduct} />

          <RateStatus/>

          <RateBox/>

          <CommentCard 
            tittle={"Excelente prenda"} 
            description={"El producto llegó en perfectas condiciones y es tal cual se muestra en la foto, tiene excelentes acabados y es perfecto para cualquier tipo de clima"} 
          />

        </View>
      </ScrollView>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor: '#FFF',
  },
  tittle:{
    color: '#000000',
    fontFamily: 'Muli-Black',
    fontSize: 18,
  },
  sectionOne:{
    width:'100%', 
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  rowContent:{
    flexDirection:'row',
    alignItems: 'center'
  },
  estartsCuantiti:{
    marginLeft:6,
    color: '#cdd4e0',
    fontFamily: 'Muli-Black',
    fontSize: 16,
    fontWeight: '900',
  },
  oldPrice:{
    marginRight:6,
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    fontSize: 22,
    letterSpacing: -1.1,
    textDecorationLine:"line-through"
  },
  price:{
    color: '#fea0a8',
    fontFamily: 'Muli-Regular',
    fontSize: 24,
    letterSpacing: -1.1,
  },
  description:{
    marginVertical:16,
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    fontSize: 16,
  }
})