
// use of ,[] for useEffect hook as ComponentDidMount
import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("hello");
  },[]);  //very much important step , therfore use of ,[]

  function rmCount() {
    setCount(0);
  }

  return (
    <View>
      <Text style={{ fontSize: 40, color: "green" }}>
        useEffect for lifecycle methods
      </Text>
      <Text style={{ fontSize: 30, color: "blue" }}>
        Current count: {count}
      </Text>
      <Button title="increase count" onPress={() => setCount(count + 1)} />
      <View style={{ marginTop: 10 }}>
        <Button title="clear count" onPress={rmCount} />
      </View>
    </View>
  );
}

export default App;

/*

>we can only use the hook useEffect to only mount the component using the array like ,[]  we call this as useEffect as componentDidMount.

*/
