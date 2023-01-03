import React from 'react';
import { View, Pressable, Text, StyleSheet, TextInput} from 'react-native';

export default function NumberSelector(props) {
 return (
   <View
   style={styles.componentArea}>


    <Pressable 
    style ={({pressed}) => [
        {backgroundColor: pressed ? '#1c4966' : '#59bcff'},
        styles.button]}
    onLongPress = {props.segura}
    //onPressIn ={props.aperta}
    onPressOut = {props.solta}>

        
        <Text 
        style = {styles.textButton}>+</Text>
    </Pressable>

    
    <TextInput 
    style={styles.input}
    placeholder={props.placeholder}/>


    <Pressable style ={({pressed}) => [
        {backgroundColor: pressed ? '#1c4966' : '#59bcff'},
        styles.button]}>
        <Text
        style = {styles.textButton}
        >-</Text>
    </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
    componentArea:{
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    button:{
        width:90,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    textButton:{
        fontWeight:'bold',
        fontSize:26       
    },
    input:{
        backgroundColor:'gray',
        width:90,
        height:60,
        borderRadius:16,
        marginTop:5,
        marginBottom:5
    }
})