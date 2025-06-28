import React from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, addToCart } from "./redux/action";

const App = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
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
