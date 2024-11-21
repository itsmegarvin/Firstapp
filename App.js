import React from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {

  const btnPress = ()=>{
    Alert.alert("left button pressed")
  };

  return (
    <View style={styles.main}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle:()=><Button title="left" color={"midnightblue"} onPress={btnPress}/>,
            headerRight:()=><Button title="right" color={"midnightblue"}/>,
            // headerRight:()=><Header/>,
            headerStyle:{
              backgroundColor:"skyblue"
            },
            headerTitleStyle:{
              fontSize:20
            },
            headerTintColor:"#fff"
          }}>
          <Stack.Screen name="Login" component={Login} 
            />
          <Stack.Screen name="Home" component={Home} 
            options={{
              title:"Home page",
              headerStyle:{
                backgroundColor:"skyblue"
              },
              headerTitleStyle:{
                fontSize:20
              },
              headerTintColor:"blue"
            }}/>
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

// const Header = ()=>{
//     return(
//       <View>
//         <Text> this is header screen</Text>
//       </View>
//     );
// };

const styles = StyleSheet.create({
  main: {
    flex: 1,
   
  },
  homepg: {
    flex: 1,
     alignItems:"center",
    justifyContent:"center"
  },
  loginpg: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
   
  },
});

export default App;

/*

>navigation screeen cannot be styled  like other styling properties, we rather use options inside the stackscreen component or navigationcontainer.
>  we can  do styling  inside navigationcontainer and stack.navigator as well.
> we can pass the functional component either in headerTitle and headerRight.

*/
