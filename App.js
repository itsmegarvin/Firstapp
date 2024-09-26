import React from "react";
import { Text, View, Button } from "react-native";

class App extends React.Component {
  fruit = () => {
    console.warn("apple");
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Class component in RN</Text>
        <Button
          title="press me"
          color="green"
          onPress={() => this.fruit()}
        ></Button>
        <Student />
      </View>
    );
  }
}

class Student extends React.Component {
  render() {
    return <Text style={{ fontSize: 20 }}>student class</Text>;
  }
}

export default App;

/*
>why class component ?
 -sometimes we may have to deal with the application that were developed many years ago. that means which used class component. so for that also we have to get the Prior knowledge about the class component.
> it is just like the class in OOP programming language with inheriting the properties of react using the keyword extend.

>we cant use const let for the varible in class component
>why render used?
  - basically class does not return anything but if functions does. so there is function kept inside that class that returns something. that function is nothing but render(){}



*/
