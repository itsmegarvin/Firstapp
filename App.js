/* Status bar in React-Native */
import React from "react";
import { View, Text, StyleSheet, Platform} from "react-native";

const App = () => {
  return (
    <View >
      <Text style={{fontSize:25, color:"green"}}>platform: {Platform.OS}</Text>
      {/* for div box view is used*/}

      {/* if os is ios then box is red else orange. */}

      {
        Platform.OS=='ios'
        ?
        <View style={{backgroundColor:'red', height:100, width:100}}></View>
        :
        <View style={{backgroundColor:'orange', height:100, width:100}}></View>
      }

      {/* color of the text for the platform */}
    <Text style={styles.platformText}>Hello platform</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  platformText: {
    flex: 1,
    justifyContent: "center",
    // color of text for the platforms
    color:Platform.OS=="android" ? "orange" : "red"
  },
});

export default App;
