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
      <Text style={{fontSize:50, color:"black"}}>Dynamic Grids</Text>
      
      <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
        {
          Users.map((item)=>
            <Text style={styles.textList}>{item.name}</Text>
          )
        }

      </View>


      

      
    </View>
  );
}


const styles= StyleSheet.create({
    textList:{
        fontSize:30,
        color:"white",
        backgroundColor:"skyblue",
        margin:5,
        padding:5,
        width:165,
        height:120,
        textAlignVertical:"center",
        textAlign:"center"



    }
})


export default App;

/*

grids(static,dynamic)

*/




