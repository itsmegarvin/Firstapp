// post api from the textinput and simple form.

import React, { useEffect, useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Alert } from "react-native";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const saveData = async () => {
    const url = "http://192.168.101.8:3000/users";
    const result = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body :JSON.stringify({name, age, email})
      });
    result = await result.json();
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        post api with input fields and form data
      </Text>
      <TextInput
        style={styles.inputStyle}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="enter name"
      />
      <TextInput
        style={styles.inputStyle}
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="enter age"
      />
      <TextInput
        style={styles.inputStyle}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="enter email"
      />

      <Button title="submit" onPress={saveData} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "skyblue",
    margin: 10,
    padding: 10,
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
