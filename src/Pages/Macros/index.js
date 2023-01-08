import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';





export default function Macros() {
  
  const [carb, setCarb] = useState(50)
  const [prot, setProt] = useState(30)
  const [lip, setLip] = useState(20)

  function verifyMacros()
  {
    if((carb + prot + lip) != 100)
    {
      alert('A soma bate 100')
    }
  }
  
  return (
   <View>
    <Text>Ola Macros</Text>
    <View>
      <Text>Carboidratos: {carb}</Text>
      <VerticalSlider
          value={1}
          disabled={false}
          min={0}
          max={100}
          onChange={(value) => {
            console.log("CHANGE", value);
          }}
          onComplete={(value) => {
            console.log("COMPLETE", value);
          }}
          width={50}
          height={300}
          step={1}
          borderRadius={5}
          minimumTrackTintColor={"gray"}
          maximumTrackTintColor={"tomato"}
          showBallIndicator
          ballIndicatorColor={"gray"}
          ballIndicatorTextColor={"white"}
        />
      <Text>Proteínas: {prot}</Text>
      <Slider
      value={prot} 
      minimumValue={5} 
      maximumValue ={90}
      onValueChange ={(value) => {setProt(Math.floor(value))}}/>
      <Text>Gorduras: {lip}</Text>
      <Slider
      value={lip} 
      minimumValue={5} 
      maximumValue ={90}
      onValueChange ={(value) => {setLip(Math.floor(value))}}/>

      <Button
      title='Concluir'
      onPress={() =>{
        verifyMacros()
      }}/>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    slidersArea:{
      flexDirection:'row'
    }
});