import React from "react"; 
import { Text, View, FlatList,StyleSheet } from "react-native";



const App= () => //component name always capital
{
  //you can make state also
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
      }
  ]

  return(
    <View>
      <Text style={{fontSize:30}}>Flastlist in RN</Text>
      <FlatList
        data={Users}
        renderItem={({item})=>
          <Text style={styles.textList}>{item.name}</Text>
        }
        //here insided renderItem, parameter should always be item
        keyExtractor={list=>list.id}
        //here can be any name instead list eg item iteself or any name abc.
      />
    </View>
  );
}


const styles= StyleSheet.create({
    textList:{
      fontSize:20,
      color:"#fff",
      margin:10,
      backgroundColor:"skyblue",
      borderRadius:20,
      borderColor:"Black",
      borderWidth:3,

    }
})


export default App;

/*
>there are different kinds of lists.(flatlist, selection list)
>we can also insert datas dynamically in the list it means the data may not be serial.
> flatlist may include state with list, or simply variables with list .
> const list= [
            {},{},{}
        ]
> also list can be like
   const list= ['hello', 'hi', 'goodmorning', 'goodevening']

>so like we make different states,variables for different textinput component similarly, it is good practice to make different flatlist component for different list.

*/




