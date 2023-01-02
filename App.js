import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberSelector from './src/Componentes/NumberSelector';




export default function App() {

  const [carb, setCarb] = useState(0)
  var timer = null

function segurar()
{
  let i = carb
  timer = setInterval(() =>{
    i++
    setCarb(i)
  },250)
}

function apertar()
{
  setCarb(carb++)
}

function soltar()
{
  clearInterval(timer)
  timer = null
}
 return (
    <View style={styles.areaSelectors}>
      <NumberSelector
      //aperta = {() =>apertar()}
      segura = {() =>segurar()}
      solta = {() =>soltar()}
      placeholder = {carb.toString()}/>

    </View>
  );
}

const styles = StyleSheet.create({
  areaSelectors:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})