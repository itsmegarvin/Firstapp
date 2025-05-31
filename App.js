//simple post api to json server

import React,{useEffect, useState} from "react"
import {Button,View, Text, StyleSheet} from "react-native"

function App () 
{ 
  const data={
      "name":"sam",
      "email":"sam@test",
      "id":5
    }
  

  const postApi= async ()=>{
    const url="http://192.168.101.8:3000/users";
    const result=  await fetch(url,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    result= await result.json();
  };


  useEffect(()=>{
    postApi();
  },[])
  return(
    <View style={styles.main}>
      <Text style={{fontSize:40}}>simple post api in json server</Text>
      <Button title="post" onPress={()=>(postApi)}></Button>
    </View>
  )
};

const styles= StyleSheet.create({
    main:{
      flex:1
    }
})

export default App;
/*
1. first we learn to fetch and make use of api found in internet like      jsonplaceholder.
2. then make fake api/ domi api using json server because to test put,patch,delete we must use our own api we can't from the internet.
3. install json server using command 
        npm install -g json-server
            make folder inside project as api/db.json and again run,
        json server --watch db.json
            this runs api locally in local port.  like http:localhost//3000  paste this in browser to use

            Task	                Needs Browser?
        Running JSON Server	            ❌ No
        Making requests to it	          ❌ No
        Viewing response in browser	    ✅ Optional
        
        learn to use postman

4. now to make your api accessible to the devices running on the same network, use commands
        ipconfig
        json server --host 0.0.0.0 db.json
            --host 0.0.0.0 makes api accessible to all the devices connected in same network
        then goto browser and paste ip address and port like 192.168.108.1:3000


*/
