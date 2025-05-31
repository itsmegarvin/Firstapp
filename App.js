import React,{useEffect, useState} from "react"
import {View, Text, StyleSheet, Alert} from "react-native"

function App () 
{ 
  const [data,setData]= useState([]);
  const getApiData = async ()=> {
      const url="http://192.168.101.8:3000/users";
      let result= await fetch (url);
      result=  await result.json();
      setData(result);
      Alert.alert("Error", "Failed to fetch data: " + error.message);
    
  }

  useEffect(()=>{
    getApiData();
  },[])
  
  
  return(
    <View style={styles.main}>
      <Text style={{fontSize:40, backgroundColor:"blue", color:"#fff"}}>call api from the json server</Text>
      {
        data.length
        ?
          data.map((item,index)=>
            <View style={styles.itemstyle}>
              <Text style={{fontSize:30}}>{item.id}</Text>
              <Text style={{fontSize:30}}>{item.email}</Text>
              <Text style={{fontSize:30}}>{item.name}</Text>
            </View>
          )
        :
        null
      }
    </View>
  )
};

const styles= StyleSheet.create({
    main:{
      flex:1
    },
    itemstyle:{
      fontSize:20,
      marginBottom:10,
      borderColor:"gray",
      borderWidth:2,
      shadowColor:"black",
      elevation:5,


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
