import React, { use, useState } from "react";
import { View, Text, Button, StyleSheet,Image } from "react-native";

const App = (props) => {
    const item= props.item
  return (
    <View style={{alignItems:"center",borderBottomColor:"skyblue",borderBottomWidth:5}}>
      <Text style={{ fontSize: 25 }}>{item.name}</Text>
      <Text style={{ fontSize: 25 }}>{item.price}</Text>
      <Text style={{ fontSize: 25 }}>{item.color}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
      <View style={{ margin: 10 }}>
        <Button title="add to cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
