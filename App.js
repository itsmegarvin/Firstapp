import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import store from "./src/components/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./src/components/ProductWrapper";
import UserList from "./src/components/UserList";

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper}/>
        <Stack.Screen name="UserList" component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const reduxWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => reduxWrapper);

export default reduxWrapper;

/*
if i were using other than expo i could also make index.js as separate file and include as below:

import { AppRegistry } from "react-native";
import App from './App';
import {name as appName} from './app.json'
import { Provider } from "react-redux";
import store from "./src/components/redux/store";

const reduxWrapper=()=>{
    return(
    <Provider store={store}>
        <App/>
    </Provider>
    )
}

AppRegistry.registerComponent(appName, ()=> reduxWrapper);

*/
