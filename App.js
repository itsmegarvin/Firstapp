import React from "react";
import { useState } from "react";  //in RN if use word the understand that it is hook
import { Text, View, Button} from "react-native";

const App= ()=>
{
  const [name, SetName]= useState("Garvin")  //name is for giving default value garvin and setname is for giving update value.
  let data="Phil"

  //important one
  function UpdateName(){
    SetName("Raheem")
    data="Foden"
  }
  return(
    <View>
      <Text>{name}</Text> 
      <Text>{data}</Text> 
      <Button title="first button"  color={"red"}  onPress={UpdateName} />
    </View>
  );
}



export default App; 

/*o/p is like
  garvin
  phil
  red button 
so when the button is pressed then the o/p is like 
  Raheem
  phil 
  red button 

from the result we can conclude that the varible wont re-render the functional component


And important thing is we cannot use the state

*/ 




