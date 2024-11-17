/* Status bar in React-Native */
import React,{useState} from "react";
import { View, Button, StyleSheet, StatusBar } from "react-native";

const App = () => {

  const [hide,setHide]= useState(true)
  const [barStyle,setBarStyle]= useState("default")

  return (
    <View style={styles.main}>
      <StatusBar 
        backgroundColor="blue" 
        barStyle={barStyle} 
        hidden={hide} 
      />
      <Button title="Toggle status bar" onPress={()=>setHide(!hide)}/>
      <Button title=" update bar style " onPress={()=>setBarStyle("dark-content")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center"
  },
});

export default App;
