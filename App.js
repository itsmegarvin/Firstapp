import React from "react";
import { Text, View, Button } from "react-native";

function FirstPress(){
  console.warn("first button pressed")
}

const App = () => 
{
  function SecondPress(){
    console.warn("second button pressed")
  }
  const ThirdPress= (name)=>{
    console.warn(name)
  }

  return(
    <View>
      <Text>Button and onpress event</Text>
      <Button title="first press"  color={"green"}  onPress={FirstPress} >  </Button>
      <Text>for second press</Text>
      <Button title="second press"  color={"blue"}  onPress={SecondPress} />
      <Text>for third press</Text>
      <Button title="third press"  color={"skyblue"}  onPress={ ()=>ThirdPress("garvin")} />
    </View>
  );
}

export default App;
