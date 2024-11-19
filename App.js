/* (eg webview package) in React-Native */
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.main}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.homepg}>
      <Text >home page</Text>;
    </View>
  );

};

const Login = (props) => {
  return(
  <View style={styles.loginpg}>
      <Text >login page</Text>;
      <Button title="go to home" color="skyblue" onPress={()=>{props.navigation.navigate("Home")}}/>
  </View> );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  homepg: {
    flex: 1,
    alignItems: "center",
  },
  loginpg: {
    flex: 1,
    alignItems: "center",
  },
});

export default App;

/*


*/
