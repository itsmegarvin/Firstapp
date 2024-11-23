import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet , ScrollView} from "react-native";

const App = () => {

  const [data,setData] = useState([])

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // you can simply use api without try/catch also
      let result = await fetch(url);//by default it is  get http method
      result = await result.json();
      setData(result)
    
  };

  useEffect(() => {
    getApiData();
  },[]);

  return (
    <ScrollView>
      <Text style={{fontSize:40, color:"blue"}}>List of Api Call</Text>
      {
        data.length
        ?
        data.map((item)=> // you can use curly braces along with return
          <View style={{fontSize:20, padding:10, margin:10, borderBottomColor:"#ccc", borderBottomWidth:5}}>
            <Text>Id : {item.id}</Text>
            <Text>Title : {item.title}</Text>
            <Text>Body : {item.body}</Text>
          </View>
        )
        :
        null
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
});

export default App;

/*
>here i have used alert because my version didn't support console.warn and within that alert i have used stringify to convert json format to the string because alert only supports strings.
>The getApiData function is declared as async, which means it can use await to pause execution until promises are resolved.
*/
