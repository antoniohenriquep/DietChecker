import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';





export default function Macros() {
  
  const [carb, setCarb] = useState(50)
  const [prot, setProt] = useState(30)
  const [lip, setLip] = useState(20)
  
  return (
   <View>
    <Text>Ola Macros</Text>
    <View>
      <Text>Carboidratos: {carb}</Text>
      <Slider
      value={carb} 
      minimumValue={5} 
      maximumValue ={90}
      onValueChange ={(value) => {setCarb(Math.floor(value))}}/>
      <Text>Proteínas</Text>
      <Slider minimumValue={5} maximumValue ={90}/>
      <Text>Gorduras</Text>
      <Slider minimumValue={5} maximumValue ={90}/>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    slidersArea:{
      flexDirection:'row'
    }
});