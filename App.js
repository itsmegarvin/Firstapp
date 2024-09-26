import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const App = () =>
  //component name always capital
  {
    const Users = [
      //this is array
      {
        //this is object
        id: 1,
        name: "garvin",
      },
      {
        id: 2,
        name: "sagress",
      },
      {
        id: 3,
        name: "peter",
      },
      {
        id: 10,
        name: "jake",
      },
    ];

    return (
      <View>
        <Text style={{ fontSize: 40 }}>component in loop with flatlist</Text>
        <FlatList
          data={Users}
          renderItem={({item}) =><UserData item={item} /> }
          //items in data is passed as an object to the props like and arguement
         
        />
      </View>
    );
  };

const UserData=(props)=>{
  info=props.item;
  return(
    <View style={styles.box}>
    <Text style={styles.itemStyle}>{info.name}</Text>
    <Text style={styles.itemStyle}>{info.id}</Text>
  </View>
  );
}



const styles = StyleSheet.create({
  itemStyle: {  //item is for text
    fontSize: 30,
    color: "white",
    backgroundColor: "skyblue",
    flex: 1,
    padding: 5,
    width: 165,
    height: 120,
    textAlignVertical: "center",
    textAlign: "center",
  },
  box:{ // box is for styling view
    flexDirection:"row",
    borderWidth:2,
    borderColor:"blue",
    marginBottom:10
  }

});

export default App;

/*

>component in loop with flatlist
>concept of props as well.
>here in above example in app() ,data is assigned with all the value of Users() therfore list  and those items is then passed as an object from app() to UserData() then UserData() receives as a props.


*/
