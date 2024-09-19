import React from "react";
import { Text, View, Button} from "react-native";

let data = 10101010101010;

function Firstbutton(){
  let data=20
  console.warn(data)
}

const App= ()=>{
  return(
    <View>
      <Text>{data}</Text>
      <Button title="first button"  color={"red"}  onPress={Firstbutton} />
    </View>
  );
}

//the output of text is not updated to 20 because the function is not called, so if we need the same value as of button therfore 101010101010 then we need state.

export default App;
