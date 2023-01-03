import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberSelector from './src/Componentes/NumberSelector';




export default function App() {

  const [carb, setCarb] = useState(0)
  var timer = null

function segurar()
{
  var i = carb
  console.log("Segurou")
  console.log(timer)
  
  if(!timer)
  {
  timer = setInterval(() =>{ 
    i++
    setCarb(i)
  },250)
  }else{
    clearInterval(timer)
    timer = null
  }
  console.log("Saiu")
}

function apertar()
{
  setCarb(carb++)
}

function soltar()
{
  isPressed = false
  clearInterval(timer)
  //timer = null

  console.log('Soltou')
}


 return (
    <View style={styles.areaSelectors}>
      <NumberSelector
      //aperta = {() =>segurar()}
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