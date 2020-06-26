import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Button from '../../genericComponents/Button'
import StartSelector from './StartSelector'

export default function RateBox() {
  const [value, setValue] = useState(0)
  const [tittle, setTittle] = useState("")
  const [description, setDescription] = useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.rateText}>Reseña</Text>
      <Text style={styles.califText}>Toca para calificar</Text>
      <StartSelector value={value} setValue={setValue} />
      <TextInput
        value={tittle}
        onChangeText={setTittle}
        placeholder={"Título (opcional)"}
        placeholderTextColor="#cdd4e0"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder={"Reseña (opcional)"}
        placeholderTextColor="#cdd4e0"
        sty
        style={styles.input}
      />
      <Button
        tittle={"Enviar"}
        onPress={()=>{}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginBottom:24
  },
  rateText:{
    color: '#000000',
    fontFamily: 'Muli-Bold',
    fontSize: 18,
    letterSpacing: -0.9,
    marginBottom:8
  },
  califText:{
    color: '#8a97ad',
    fontFamily: 'Muli-Regular',
    fontSize: 16,
  },
  input:{
    width:'100%',
    height:50,
    color: '#cdd4e0',
    fontFamily: 'Muli-Regular',
    fontSize: 18,
    lineHeight: 26,
    color:"#8a97ad",
    marginBottom:8
  }
})