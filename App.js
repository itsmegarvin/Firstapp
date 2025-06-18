

import React, {  use, useState } from "react";
import {View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = ()=>{

  const[name,setName]= useState("")

  const setData= async()=>{
    await AsyncStorage.setItem("name","garvin poe")
  }
  const getData= async()=>{
    const name= await AsyncStorage.getItem("name")
    alert(name);
    setName(name)
  }
  const removeData=async ()=>{
    await AsyncStorage.removeItem("name")
    setName("")
  }
  return(
    <View style={{flex:1,padding:15}}>
      <Text style={{fontSize:30, color:"skyblue"}}>async storage in RN{name}</Text>
      <View style={{marginBottom:5}}>
      <Button title="set data" onPress={setData} />
      </View>
      <Button title="get data" onPress={getData}/>
      <View style={{marginTop:5}}>
      <Button title="remove data" onPress={removeData}/>
      </View>
    </View>
  )
}

export default App;

/*
  Asynchronous storage
  >used for permanent storage.
  >once you data wont lost even if app is refreshed,shutdown or minmized.
  >even after you open app after many days it wont be lost.
  >but if the app's cache is removed or the app is uninstalled or the app is logged out then data will get lost
  >here i have make the use of state to understand properly as well. for eg if the app is refreshed or shut off then the component wont show the value of state or what is inside the state eg {name} but if getData is clicked then only the name is shown because the name was stored in asynchronous storage and state was not.
*/


