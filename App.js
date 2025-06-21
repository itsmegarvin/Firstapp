import React, {  use, useState } from "react";
import {View, Text, Button,StyleSheet,Image ,ScrollView} from "react-native";
import Header from "./src/components/Header"
import Product from "./src/components/Product"

const App = ()=>{

  const products=[
    {
      name:"samsung",
      price:30000,
      color:"blue",
      image:'https://www.iconpacks.net/icons/1/free-icon-mobile-phone-695.png'
    },
    {
      name:"iphone ",
      price:130000,
      color:"black",
      image:"https://www.iconpacks.net/icons/1/free-icon-mobile-phone-695.png"
    },
    {
      name:"nokia",
      price:20000,
      color:"green",
      image:"https://www.iconpacks.net/icons/1/free-icon-mobile-phone-695.png"
    }
  ]

  return(
    <View style={styles.container}>
      <Text style={{fontSize:30, color:"black"}}>make add to cart UI for redux</Text>
      <Text style={{fontSize:30, color:"skyblue", textAlign:"right"}}>0</Text>
      <Header/>

      <ScrollView>
      {
        products.map((item,index)=>
          <Product item={item}/>
        )
      }
      </ScrollView>
      
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App;




