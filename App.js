import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Pages/Home';
import Macros from './src/Pages/Macros';


const Stack = createNativeStackNavigator()

export default function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Macros" component={Macros}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}