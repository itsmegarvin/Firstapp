import React from "react";
import {Text,View,Button} from "react-native";

function App()
{
  return(
    <View>  //why View? see takeawaypoint 4
        <Text style={{fontSize:40}}> first text</Text>
        <Button title='press me first '></Button>
        <Text style={{fontSize:40}}> second text</Text> 
        <Button title='press me second'></Button>
        
    </View>
  )
}

export default App;




