
// concept of toggle, show and hide
import React, { useState} from "react";
import { Text, View, Button } from "react-native";

function App() {
  const[show, setShow]= useState(true);

  return(
    <View>
    <Text style={{fontSize:30, color:'orange'}}>Show hide and toggle</Text>
    {/* <Button  title= "hide component" color={"blue"} onPress={()=>setShow(false)}/>
    <Button  title= "show component" color={"green"} onPress={()=>setShow(true)}/> */} 
    <Button  title= "toggle component" color={"green"} onPress={()=>setShow(!show)}/> 
  
      {
        show ? <User/> : null
      }
  </View>
  );
  

}

const User = () => {
  return(
    <View>
      <Text style={{fontSize:20, color:'orange'}}> user component </Text>
    </View>
  );
}


export default App;

/*

>so this simple concept of toggle, hide and show is how we unmount the UI.
> this concept is alsoo used in lifecycle methods.
*/
