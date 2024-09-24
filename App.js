import React,{useState} from "react"; 
import { Text, TextInput, View, StyleSheet, Button} from "react-native";


const App= () => //component name always capital
{
  const [name, setName] = useState(""); //for  textinput placeholder fullname
  const [email, setEmail] = useState("");//for textinput placeholder email
  const [password, setPassword] = useState("");//for textinput placeholder password
  const [display,setDisplay]= useState(true);

  const clearinputs = ()=>{
    setName(""),
    setEmail(""),
    setPassword(""),
    setDisplay(false)
  }
   return(
    <View >
      <Text style={{fontSize:30 }}> Simple Form</Text>

      <TextInput
        style={styles.textinput}
        placeholder="full name"
        onChangeText={(text)=> setName(text)}//updates default name state to text entered.
        value={name}//for clearing textinput whose value is name therfore null.
      />

      <TextInput
        style={styles.textinput}
        placeholder="email"
        onChangeText={(text)=> setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.textinput}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text)=> setPassword(text)}
        value={password}
      />

      <Button title="print details" color={"green"}  onPress={()=>setDisplay(true)}/>
      {
        display? //means if display true then
          <View>
            <Text style={{fontSize:20}}>Your name is: {name}</Text>
            <Text style={{fontSize:20}}>Your email is: {email}</Text>
            <Text style={{fontSize:20}}>Your password is: {password}</Text>
          </View>
        :null//: means if display false
      }
        

      <View style={{marginTop:10}}>
        <Button title="Clear details"  onPress={clearinputs}></Button>
      </View>


    </View>
  );
}

//internal styling
const styles = StyleSheet.create({
  textinput:{
    fontSize:25,
    borderColor:'skyblue', 
    backgroundColor:"orange",
    borderWidth:2, 
    margin:20,//gives margin from all four sides
    borderRadius:100,
    borderColor:"black",
    textAlignVertical:'center',
    textAlign:"center",
    height:50
    

  }
})



export default App;

/*
>Text input needs state compulsorily as that given input is sometimes needed to be erased/changed/updated
>onChangeText is only for textInput not for text, button and others
>also for each textinput we can make different state as we can see that in various projects, but we can include all the textinputs in one state as well.
>here in above code for three textinput three state are required and for printing the details another state is required. for clearing the details its better to make separate function and make the available states null. 


*/ 




