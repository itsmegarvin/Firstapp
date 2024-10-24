/* Styling button in RN using touchableHighlight and touchableOpacity */
import React from "react";
import {Text, View, StyleSheet, TouchableHighlight } from "react-native";

function App() {

  return(
    <View style={styles.main}>
          <TouchableHighlight>
            <Text style={styles.button}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.signup]}>Sign up</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.warning]}>warning</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={[styles.button, styles.error]}>error</Text>
          </TouchableHighlight>
        

    </View>
    
  );
}

const styles= StyleSheet.create({
    main:{
      flex:1,  // this considers the whole screen.
      // flexDirection:"row"
      backgroundColor:"cadetblue",
      margin:15
    },
    button:{
      fontSize:20,
      backgroundColor:"midnightblue",
      color:'#fff',
      textAlign:"center",
      margin:10,
      padding:5,
      borderRadius:10,
      shadowColor:"red",
      elevation:5,
      shadowOpacity:1
    },
    signup:{backgroundColor:"skyblue"},
    warning:{backgroundColor:"cornflowerblue"},
    error:{backgroundColor:"midnightblue"}

})



export default App;

/*
> types of blue color (blue,lightblue,darkblue,darkslateblue,skyblue,lightskyblue,lightsteelblue, mediumblue, mediumslateblue, midnightblue, navy, royalblue,slateblue,steelblue,cornflowerblue,cadetblue,dodgerblue)
> As we know that buttons cannot be styled like Text. But also with the use of touchableHighlight and touchableOpacity we can style the button.
*/
