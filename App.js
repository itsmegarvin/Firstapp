import React from "react"; 
import { Text, View, StyleSheet} from "react-native";
import Exstyles from './src/components/externalStyles'


const App= () => //component name always capital
{
   return(
    <View>
      <Text style={{fontSize:30, color:"red" }}>INLINE STYLE</Text>

      <Text style={styles.textbox}>INTERNAL STYLE</Text> 
      <Text style={styles.textbox}>INTERNAL STYLE</Text> 
      <Text style={Exstyles.textbox}>EXTERNAL STYLE</Text> 
      <Text style={[styles.textbox, Exstyles.textbox, {borderColor:"pink"}, {borderWidth:5}]}>This is hybrid </Text>
    </View>
  );
}

const styles= StyleSheet.create({
  textbox:{ //here we can give any name instead textbox and styles
    color:"#fff",
    fontSize:40,
    backgroundColor:"orange",
    marginBottom:10,
    padding:10,
    borderRadius:100,
    height:100,
    textAlignVertical:"center",
    textAlign:"center",
    borderColor:"red",//bordercolor appears along with borderwidth
    borderWidth:4
  }
})


export default App;

/*
> so styles are inline,internal,external and hybrid
>for inline style={{}}
>for internal style={styles.textbox} and separate component for style as 
 const styles = StyleSheet.create({
  textbox:{
    color:blue,
    fontSize:25
  }
 })

 >for external style we make separate file and make same component as in internal but just replace const with export default. 
 >for hybrid just make array of the objects inside styles.


*/ 




