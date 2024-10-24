
import React from "react";
import { View, StyleSheet } from "react-native";

function App() {

  return(
    <View style={styles.main}>
        <View style={styles.box1}>
            <View style={styles.innerbox1}></View>
            <View style={styles.innerbox2}></View>
            <View style={styles.innerbox3}></View>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>

    </View>
    
  );
}

const styles= StyleSheet.create({
    main:{
      flex:1,  // this considers the whole screen.
      // flexDirection:"row"
    },
    box1:{
      flex:1,
      backgroundColor:"lightblue",
      flexDirection:"row"
    },
    box2:{
      flex:1,
      backgroundColor:"mediumslateblue"
    },
    box3:{
      flex:1, 
      backgroundColor:"midnightblue"
    },
    innerbox1:{
      flex:1,
      backgroundColor:"steelblue",
      margin:10
    },
    innerbox2:{
      flex:1,
      backgroundColor:"cornflowerblue",
      margin:10
    },
    innerbox3:{
      flex:1,
      backgroundColor:"royalblue",
      margin:10
    }

})



export default App;

/*
> Creating an responsive UI.
> its all about manipulating flex.
> types of blue color (blue,lightblue,darkblue,darkslateblue,skyblue,lightskyblue,lightsteelblue, mediumblue, mediumslateblue, midnightblue, navy, royalblue,slateblue,steelblue,cornflowerblue,cadetblue,dodgerblue)
*/
