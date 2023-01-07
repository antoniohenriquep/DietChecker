import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


export default function Home() {

  const navigation = useNavigation()

  return (
   <View>
    <Text>Ola</Text>
    <Button title='Navegar' onPress={() => navigation.navigate('Macros')}/>
   </View>
  );
}

const styles = StyleSheet.create({
    
});