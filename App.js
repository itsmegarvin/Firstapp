import React from "react";
import { Text, View, StyleSheet, SectionList } from "react-native";

const App = () =>
  //component name always capital
  {
    const Users = [
      //this is array
      {
        //this is object
        id: 1,
        name: "garvin",
        data:['html','css','js']
      },
      {
        id: 2,
        name: "sagress",
        data:['php','react js','angular']
      },
      {
        id: 3,
        name: "peter",
        data:['python','django','server host']
      },
      {
        id: 10,
        name: "jake",
        data:['AI','ML','ANN','NLP']
      }
    ];

    return (
      <View>
        <Text style={{ fontSize: 40 }}>SectionList</Text>
        <SectionList
          sections={Users}
          renderItem={ ({item}) =>
              <Text style={styles.styling}>{item}</Text>
          }
          renderSectionHeader={ ({section:{name}}) => (<Text style={{fontSize:30, color:"blue"}}>{name}</Text>)}
         
          />
      </View>
    );
  };

const styles= StyleSheet.create({
  styling:{
    fontsize:20,
    color:'skyblue',
    marginLeft:20
  }

})


export default App;

/*

> SectionList is used for list with array inside an array therfore nested array.
> also section list have same syntax as FlatList but provides feature to include an header.
> but we can also include array inside array in FlatList but it is difficult to manipulate.


*/
