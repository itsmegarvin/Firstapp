//search with api

import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";

const App = ()=>{

  const[data,setData]=useState([])

  const SearchUser = async (text)=>{
    const url=`http://192.168.101.5:3000/users?q=${text}`
    let result= await fetch(url)
    result= await result.json()
    if(result){
        setData(result)
    }
  }

  return(
    <View style={{view:1}}>
      <TextInput
        style={{fontSize:20, borderColor:"skyblue", borderWidth:1, margin:15}}
        placeholder="search"
        placeholderTextColor={"skyblue"}
        onChangeText={(text)=>SearchUser(text)}
      />
      {
        data.length
        ?
        data.map((item)=>
          <View >
            <Text>{item.name}</Text>
          </View>
        )
        :
        null
      }

    </View>
  )
}

export default App;
