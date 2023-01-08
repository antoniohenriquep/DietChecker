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
    <View style = {styles.slidersArea}>

      <View style={styles.sliders}>
      <Text>Carboidratos: {carb}</Text>
      <VerticalSlider
          value={carb}
          disabled={false}
          min={5}
          max={100}
          onChange={(value) => {
            setCarb(value)
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
        />
        </View>
      <View style={styles.sliders}>
      <Text>Proteínas: {prot}</Text>
      <VerticalSlider
          value={prot}
          disabled={false}
          min={5}
          max={100}
          onChange={(value) => {
            setProt(value)
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
        />
      </View>
      <View style={styles.sliders}>
      <Text>Gorduras: {lip}</Text>
      <VerticalSlider
          value={lip}
          disabled={false}
          min={5}
          max={100}
          onChange={(value) => {
            setLip(value)
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
        />
      </View>
    </View>
    <Button
      title='Concluir'
      onPress={() =>{
        verifyMacros()
      }}/>
   </View>
  );
}

const styles = StyleSheet.create({
    slidersArea:{
      flexDirection:'row',
      alignContent:'space-around',
      justifyContent:'space-around'
    },
    sliders:{
      justifyContent:'center',
      alignItems:'center'
    }
});