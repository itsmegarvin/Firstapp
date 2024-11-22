import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="login" component={Login}/>
        <Tab.Screen name="signUp" component={SignUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  );

}

const Login = ()=>{
  return(
    <View>
      <Text>
        this is login page
      </Text>
    </View>
  );
}


const SignUp = ()=>{
  return(
    <View>
      <Text>
        this is signup page
      </Text>
    </View>
  );
}

 

const styles = StyleSheet.create({
});

export default App;

/*



*/
