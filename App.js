import React from "react";
import {Text,View,Button} from "react-native";


let name="garvin"
function fruit(){
  return mango;
}

const App = ()=>
{
  const age = 22
  return(
    <View>  
        <Text style={{fontSize:40}}> {fruit()} </Text>
        <Text style={{fontSize:40}}> {name} </Text>
        <Text style={{fontSize:40}}> {10*20}</Text>
        <Text style={{fontSize:40}}> {age}</Text>
        <Text style={{fontSize:40}}> {age>=15 ? "person is adult" : "person is not adult"}</Text>
        


        
        
    </View>
  )
}

export default App;




