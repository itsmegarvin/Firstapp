
// use of ,[] for useEffect hook as ComponentDidMount
import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn(count);
  },[count]); //we can use as [count, data]


  //we can make separate useEffect for different state
  


  return (
    <View>
      <Text style={{ fontSize: 30, color: "green" }}>
              {data} useEffect as componentDidUpdate {count}
      </Text>
      <Button title="increase count" onPress={() => setCount(count + 1)} />
      <Button title="increase data" onPress={() => setData(data + 1)} />
    </View>
  );
}

export default App;

/*

>we can only use the hook useEffect to only mount the component using the array like ,[]  we call this as useEffect as componentDidMount.

*/
