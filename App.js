import React, { useEffect, useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Alert } from "react-native";

function App() {
  const [data, setData] = useState("");

  const getApiData = async () => {
    const url = "http://192.168.101.11:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.dataWrapper}>
              <View>
                <Text>NAME</Text>
              </View>
              <View>
                <Text>ID</Text>
              </View>
              <View>
                <Text>EMAIL</Text>
              </View>
              <View>
                <Text>OPERATION</Text>
              </View>
            </View>

      {data.length
        ? data.map((item, index) => (
            <View style={styles.dataWrapper}>
              <View style={{flex:1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex:1}}>
                <Text>{item.id}</Text>
              </View>
              <View style={{flex:1}}>
                <Text>{item.email}</Text>
              </View>
              <View style={{flex:1}}>
                <Button title="delete"></Button>
              </View>
              <View style={{flex:1}}>
                <Button title="update"></Button>
              </View>
            </View>
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"skyblue",
    margin:10,
    padding:10,
    alignItems:"center"
  },
});

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
