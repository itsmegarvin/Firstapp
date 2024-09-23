import React from "react";  //in RN if use word the understand that it is hook
import { Text, View, Button} from "react-native";
import { useState } from "react";

const App= ()=> //component name always capital
{
  //let name ="garvin"
  const [name,setName]  = useState("garvin")
  return(
    <View>
      <Text style={{fontSize:30}}>concept of props</Text> 
      <Button title=" Update Props "  color={"skyblue"}  onPress={()=>setName("sagress")}  />
      <User name = {name} age="22" />
    </View>
  );
}

const User = (props)=>{//here props is arguement you can write any name instead props
  //console.warn(props)// this prints name="sagar". Also console.warn("props.name") prints sagar
  return(
    <View style={{backgroundColor:"pink", padding:"5"}}>
     <Text style={{fontSize:20}}> {props.name} </Text>
     <Text style={{fontSize:20}}> {props.age} </Text>
    </View>
  );
}


export default App; 

/*
>so props are arguement
>here in above code data passed from parent to child we can pass from child to parent as well which is called "lifting up state".
>here we have made the use of state because we need to update the value of variable named name.
>And importantly we cannot send the data assigned to state from one component to other, we must use props for that.
>Again whenever state updates it re-renders the component, whenever the props updates it re-renders the component but variable doesnot re-renders the component.
>in above code, separate function is not made to update the name of the state.

*/ 




