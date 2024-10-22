import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("hello");
  });

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
>basically state, props, lifecycle methods are the concepts of class component. so inorder to use these concepts in functional component facebook introduced hooks in react.js and reactnative. Also useState is used for states and useEffect is used for lifecycle methods.

>useEffect, mounts(loads) the functional component initially by calling itself, also whenever there is changes in the code either in state/props then it again calls itself.

>we can only use the hook useEffect to only mount the component using the array like ,[]  we call this as useEffect as componentDidMount.

*/
