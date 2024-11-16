/* Pressable in React-Native*/
import React from "react";
import { Text, View, StyleSheet, Pressable,Alert  } from "react-native";

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => {
          alert("normal press");
        }}
        onLongPress={()=>{
          console.warn("long press")
        }}
        onPressIn={() => {
          console.log("press in");
        }}
        onPressOut={() => {
          Alert.alert("press out");
        }}
        style={styles.pressableBtn}
      >
        <Text style={styles.pressableTxt}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
  },
  pressableBtn: {
    backgroundColor: "cornflowerblue",
    padding: 10,
    margin: 20,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 5,
  },
  pressableTxt: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default App;

/*

Pressable is a touchable component that responds to various user interactions with customizable feedback.

onPress: Fires when the user taps and releases.
onPressIn: Fires when the user starts pressing.
onPressOut: Fires when the user stops pressing.
onLongPress: Fires on prolonged press.
disabled: Disables interaction.

here from the time i learned pressable ,console.warn didn't worked due updation so i had to use Alert

delay time for long press is 500ms that is half a second

*/
