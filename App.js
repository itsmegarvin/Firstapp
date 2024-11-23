import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // Fetch the API data
    let result = await fetch(url); // By default, it uses the GET HTTP method
    result = await result.json();
    setData(result); // Update state with the fetched data
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      {
        data.length 
        ? 
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Id: {item.id}</Text>
              <Text>Title: {item.title}</Text>
              <Text>Body: {item.body}</Text>
            </View>
          )}
          // keyExtractor={(item) => item.id.toString()} // Unique key for each item
        />
       : 
       null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default App;


/*
Static/Dynamic Lists: Based on data source.
FlatList(lazy loading)/SectionList/VirtualizedList: Optimized for React Native.
Controlled Lists: Update dynamically with user interaction.
Scrollable Lists: Allow for scrolling through long lists.

*/
