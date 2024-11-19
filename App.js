/* (eg webview package) in React-Native */
import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const App = () => {

  const[show, setShow]= useState(false)

  return (
    <View style={styles.main}>
      {
        show
        ?
        <View style={styles.modal}>
        <View style={styles.body}>
          <Text>our custom modal</Text>
          <Button title="close" color="cornflowerblue" onPress={()=>setShow(false)}/>
        </View>
        </View>
        :
        null
      }
      <Button title="open custom modal" color="cornflowerblue" onPress={()=>{setShow(true)}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#fff",
    height: 200,
    width: 300,
    justifyContent: "flex-end",
    padding: 20,
    borderRadius: 10,
  },
});

export default App;

/*


*/
