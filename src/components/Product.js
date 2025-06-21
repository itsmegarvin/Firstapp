import React, { use, useState } from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { ADD_TO_CART } from "./redux/action";

const App = (props) => {
  const item = props.item;
  const handleAddToCart = (item) => {
    alert("called")
  };
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: "skyblue",
        borderBottomWidth: 5,
      }}
    >
      <Text style={{ fontSize: 25 }}>{item.name}</Text>
      <Text style={{ fontSize: 25 }}>{item.price}</Text>
      <Text style={{ fontSize: 25 }}>{item.color}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
      <View style={{ margin: 10 }}>
        <Button title="add to cart" onPress={() => handleAddToCart(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
