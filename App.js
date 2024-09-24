import React,{useState} from "react"; 
import { Text, TextInput, View, StyleSheet, Button} from "react-native";


const App= () => //component name always capital
{
  const [name, setName] = useState("");
   return(
    <View>
      <Text style={{fontSize:30, color:"blue" }}>HANDLE TEXTINPUT</Text>
      <Text style={{fontSize:20}}> Your name is :{name} </Text>
      
      <TextInput
        style={styles.textinput}
        placeholder="Enter your name"
        onChangeText={(text)=>setName(text)}
        value={name} //this makes the value of Textinput to null
      />

      <Button title="Clear" onPress={()=>setName("")}/>
    </View>
  );
}

//internal styling
const styles = StyleSheet.create({
  textinput:{
    fontSize:25, 
    borderColor:'blue', 
    borderWidth:2, 
    margin:20//gives margin from all four sides
  }
})



export default App;

/*
>Text input needs state compulsorily as that given input is sometimes needed to be erased/changed/updated
>onChangeText is only for textInput not for text, button and others


*/ 




