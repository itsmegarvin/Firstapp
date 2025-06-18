//ref in react native

import React, { useRef  } from "react";
import { View, Text, TextInput, StyleSheet,Button,Alert } from "react-native";

const App = ()=>{

  const input= useRef();
  
  const Updateinput=()=>{
    input.current.focus();
    input.current.setNativeProps({
      fontSize:20,
      color:"green"
    })
  }
  return(
    <View style={styles.main}>
      <TextInput ref={input} placeholder="Enter name" style={styles.input}/>
      <TextInput placeholder="Enter Password" style={styles.input}/>
      <Button title="update input" onPress={Updateinput}/>
    </View>
  )
}


const styles= StyleSheet.create({
  main:{
    flex:1,
    padding:16
  },
  input:{
    fontSize:15,
    borderColor:"skyblue",
    borderWidth:3,
    margin:10
  }
})

export default App;

/*
  >ref is the property of the react js. since RN uses reactjs internally we can use this.
  >also ref manipulates dom 
  >meaning it can take the references of the component, make changes on it and yes styling as well.
  >but always you should use states,variables firstly, ref should be the last option if the changes cannot me made from the states and variables. 
*/
