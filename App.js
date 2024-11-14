/* This is all about Activity indicator (loader)*/
import React,{useState} from "react";
import { Text, View, Button, StyleSheet, ActivityIndicator } from "react-native";

function App() {
  const [show,setShow] = useState(false)
  const displayLoader=()=>{
    setShow(true)

    setTimeout(()=>{
       setShow(false)
      },4000);
  }

  return (
    <View style={styles.main}>
      <Text style={{fontSize:30, color:'green'}}>Concept of Activity indicator</Text>

      {/* loader 1 */}
      <ActivityIndicator size="large" color="skyblue" animating={show}/>
      <Button title='loader' onPress={displayLoader}/>

      {/* loader 2 */}

      {
        show ? <ActivityIndicator size="large" color="skyblue"/>  : null 
      }
 

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
});

export default App;

/*
>so basically the concept of activity indicator(loader) is easy , tyo hamlai screen ma chayeko bela ma ghumeko dekhauxa ni ho tei nai activity indicator ho.
> Activity indicator is useful when api fetches data/information from the server.
> We can add more than one activity indicator.
> In ios there is only three size of the activity loader therfore large, medium and small.
> In android size of the activity loader therfore can be found as large, medium , small and any number can be given.
*/
