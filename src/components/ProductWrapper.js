import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Header from "./Header";
import Product from "./Product";

const ProductWrapper = ({navigation}) => {
  const products = [
    {
      name: "samsung",
      price: 30000,
      color: "blue",
      image: "https://www.iconpacks.net/icons/1/free-icon-mobile-phone-695.png",
    },
    {
      name: "iphone ",
      price: 130000,
      color: "black",
      image: "https://www.iconpacks.net/icons/1/free-icon-mobile-phone-695.png",
    },
    {
      name: "nokia",
      price: 20000,
      color: "green",
      image: "https://www.iconpacks.net/icons/1/free-icon-mobile-phone-695.png",
    },
  ];

  return (
    <View style={styles.container}>
        <Button title="go to user list" onPress={()=>navigation.navigate("UserList")}/>
      <Header />

      <ScrollView>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default ProductWrapper;

