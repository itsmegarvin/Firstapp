import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    // you can simply use api without try/catch also
    try {
      let result = await fetch(url);
      result = await result.json();
      result=(JSON.stringify(result, null, 2)); // Convert object to a string for display
      alert(result)
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    getApiData();
  },[]);

  return (
    <View >
      <Text >API Call Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;

/*
>here i have used alert because my version didn't support console.warn and within that alert i have used stringify to convert json format to the string because alert only supports strings.
>The getApiData function is declared as async, which means it can use await to pause execution until promises are resolved.
*/
