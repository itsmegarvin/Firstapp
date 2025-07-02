import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, addToCart} from "./redux/action";
import { REMOVE_FROM_CART,removeFromCart } from "./redux/action";



const App = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  };
  const handleRemoveFromCart=(item)=>{
    dispatch(removeFromCart(item.name))
  };

  const cartItems= useSelector((state)=>state.reducer)
  const [isAdded,setIsAdded]=useState(false);
  useEffect(()=>{
    let result=cartItems.filter((element)=>{
      return element.name===item.name
    });
    if(result.length){
      setIsAdded(true);
    }
    else setIsAdded(false);

  },[cartItems])
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: "skyblue",
        borderBottomWidth: 3,
      }}
    >
      <Text style={{ fontSize: 25 }}>{item.name}</Text>
      <Text style={{ fontSize: 25 }}>{item.price}</Text>
      <Text style={{ fontSize: 25 }}>{item.color}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />

      {
        isAdded
        ?
        <View style={{ margin: 10 }}>
          <Button title="Remove to cart" onPress={() => handleRemoveFromCart(item)} />
        </View>
        :
        <View style={{ margin: 10 }}>
          <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
        </View>
      }
    </View>
  );
};


export default App;
