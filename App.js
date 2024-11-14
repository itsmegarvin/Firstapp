/* This is all about modal (dialog box)*/
import React,{useState} from "react";
import { Text, View, Button, StyleSheet, Modal } from "react-native";

function App() {

  const [showModal,setShowModal]= useState(false)

  return(
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal}>
        <View style= {styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Modal message is here for you</Text>
            <Button title= "close modal" onPress={()=>setShowModal(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="open modal" onPress={()=>setShowModal(true)} />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex:1,
    justifyContent:"flex-end"
  },
  centerView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 10,
    
  },
  modalText: {
    fontSize:20,
    padding: 10
  }
});



export default App;


/*

A modal/dialogue box in React Native is a temporary, overlaying component used to display important information or prompt user interaction without navigating away from the main screen.

modal takes the full screen by overwriting the context, so we should make use of transparency.

also use two views component at the starting of the modal.

Focused Content: Overlays the main screen to capture attention.
Prompt User Decisions: Used for confirmations, alerts, or important actions.
Show Extra Info: Reveals more details without changing screens.
Quick Input: Ideal for short forms or data entry.
Customizable Layout: Allows flexible sizing and positioning for varied content.

*/
