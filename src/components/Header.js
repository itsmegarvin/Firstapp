
import React, {  use, useEffect, useState } from "react";
import {View, Text, Button ,StyleSheet,Alert} from "react-native";
import { useSelector } from "react-redux";

const Header = ()=>{
  const cartData=useSelector((state)=>state.reducer) //reducer from store.js
  const[cartItems,setCartItems]=useState("")
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  return(
    <View style={{backgroundColor:"skyblue",borderRadius:50}}>
      <Text style={{fontSize:30,textAlign:"right",padding:20}}>{cartItems}</Text>
    </View>
  )
}


export default Header;




