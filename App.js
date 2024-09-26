import React from "react"; 
import { Text, View,StyleSheet, ScrollView } from "react-native";



const App= () => //component name always capital
{
  const Users= [//this is array
      {//this is object
        id:1,
        name:"garvin"
      },
      {
        id:2,
        name:"sagress"
      },
      {
        id:3,
        name:"peter"
      },
      {
        id:10,
        name:"jake"
      },
      {
        id:14,
        name:"jacob"
      },
      {
        id:19,
        name:"aher"
      },
      {
        id:29,
        name:"jacky"
      },
      {
        id:50,
        name:"jakson"
      },
      {
        id:55,
        name:"jakennn"
      },
      {
        id:66,
        name:"ake"
      },
      {
        id:100,
        name:"jaa"
      },
      {
        id:101,
        name:"foden"
      },
      {
        id:150,
        name:"james"
      },
      {
        id:180,
        name:"jalbi"
      }
  ]

  return(
    <View>
      <Text style={{fontSize:50, color:"black"}}>list with map function(custom)</Text>
      
      <ScrollView>
      {
        Users.map((data)=>
            <Text style={styles.textList}>{data.name}</Text> //data is like arguement any name instead data.
        )
      }
      </ScrollView>
      
    </View>
  );
}


const styles= StyleSheet.create({
    textList:{
      fontSize:20,
      color:"#fff",
      margin:15,
      backgroundColor:"skyblue",
      borderRadius:20,
      borderColor:"Black",
      borderWidth:3,

    }
})


export default App;

/*
>there are different kinds of lists.(flatlist, selection list)
>But if you want to make list without using properties of RN like Flatlist or selection list then we use map function(custom)
>basically map is property of javascript, that loops the functions and returns for every loop. that is why it used rather than loops like for, while in javascript.
>flatlist also uses map function internally.
>but why flatlist is preferred?
  - because flatlist has its own property to scroll the view but we need to write code for map. also if there are thousands of item in a list then it lags for map but flatlist easily scrolls as it removes the item that is not showing in the screen.
>we can encounter various problems while using map function.

*/




