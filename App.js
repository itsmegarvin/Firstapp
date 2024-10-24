
// concept of toggle, show and hide
import React, { useState, useEffect} from "react";
import { Text, View, Button } from "react-native";

function App() {
  const[show, setShow]= useState(true);

  return(
    <View>
    <Text style={{fontSize:30, color:'orange'}}>useEffect while unmounting</Text>
    <Button  title= "toggle " color={"green"} onPress={()=>setShow(!show)}/> 
  
      {
        show ? <User/> : null
      }
  </View>
  );
}


const User = () => {

  useEffect(()=>{
    return ()=>{console.warn("useEffect called")}    
})

  return(
    <View>
      <Text style={{fontSize:20, color:'orange'}}> user component </Text>
    </View>
  );
}


export default App;

/*

>so this simple concept of toggle, hide and show is how we unmount the UI.
> so for  LCM (lifecycle methods) basically while unmounting(hiding component), useEffect wont work. But works for showing.
> IMP Qn
> why is there return in useEffect hook?
> we have to make small change in the useEffect adding return function.
> As a result useEffect is called for unmounting and not for mounting, just opposite than before. 
> so then what is the use of this unmounting even the UI is hidden from the application?????
> perfect example is to remove the timers.
*/
